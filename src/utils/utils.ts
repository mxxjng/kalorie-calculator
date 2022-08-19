import type { JsonDataProp, PreparedStrengthData } from 'src/types/types';

/**
 * Berechnet den Grundumsatze eines Menschen anhand der Formel von Benedict & Harris
 * @param {number} age - Alter in Jahren
 * @param {number} height - Größe in CM
 * @param {number} weight - Gewicht in KG
 * @returns {number} - Grundumsatze in Kalorien
 */
export function calculateGrundumsatz(age: number, height: number, weight: number): number {
	return 66.43 + 13.752 * weight + 5.003 * height - 6.755 * age;
}

/**
 * Returns an object of grouped elements by a given key
 * @param {Array} arr - Array to group
 * @param {string} category - Key of the array to group by
 * @returns Returns an object of grouped elements by a given key
 * @example ...
 */
export const groupBy = (arr: Array<any>, category: string) => {
	return arr.reduce((acc, obj) => {
		let key = obj[category];
		if (!acc[key]) {
			acc[key] = [];
		}
		acc[key].push(obj);
		return acc;
	}, {});
};

/**
 * Prepares the incoming json strength data from gainzfire to a usefull format
 * CSV from gainzfire was converted with this website https://csvjson.com/csv2json
 * @param data
 * @returns
 */
export function prepareData(data: JsonDataProp[]): PreparedStrengthData {
	const arr = [];
	const grouped = groupBy(data, 'Date');

	for (const workout in grouped) {
		const averageReps = calculateAverage(
			grouped[workout].map((d: JsonDataProp) => d['Reps/Seconds'])
		);

		const averageWeight = calculateAverage(grouped[workout].map((d: JsonDataProp) => d.Weight));

		const exerciseVolume = calculateVolume(
			grouped[workout].map((d: JsonDataProp) => d['Reps/Seconds']),
			grouped[workout].map((d: JsonDataProp) => d.Weight)
		);

		const oneRepMax = calculateOneRepMax(averageWeight, averageReps);

		const sets = grouped[workout].length;

		const obj = {
			date: workout,
			averageReps,
			averageWeight,
			exerciseVolume,
			oneRepMax,
			sets
		};

		arr.push(obj);
	}

	const sorted = arr.sort((a, b) => +new Date(a.date) - +new Date(b.date));

	return sorted;
}

// calculates the average of a given array of numbers
export function calculateAverage(data: number[]) {
	const sum = data.reduce((acc, val) => acc + val, 0);
	return sum / data.length;
}

/**
 * Calculates the volume of an exercise in a workout session
 * @param averageReps
 * @param averageWeight
 * @returns
 */
export function calculateVolume(exerciseReps: number[], exerciseWeight: number[]) {
	let volume = 0;

	for (let i = 0; i < exerciseReps.length; i++) {
		const setVolume = exerciseReps[i] * exerciseWeight[i];

		volume += setVolume;
	}

	return volume;
}

/**
 * Calculates the one rep max based on the formular of lander (https://www.vcalc.com/wiki/cjlynch/Lander%27s+Formula)
 * @param weight
 * @param reps
 * @returns
 */
export function calculateOneRepMax(weight: number, reps: number) {
	return (100 * weight) / (101.3 - 2.67123 * reps);
}

/**
 * Gets the best workout by a specific caregory
 * @param jsonData
 * @param data
 * @param key
 * @returns
 */
export function getBestWorkoutByCategory(
	jsonData: JsonDataProp[],
	data: PreparedStrengthData,
	key: keyof PreparedStrengthData[0]
) {
	// sort array by selected key
	let a = [...data];
	const arr = a.sort((a, b) => b[key] - a[key]);

	// get the highest value in the array = best workout
	const bestWorkout = arr[0];

	const groupedRawData = groupBy(jsonData, 'Date');

	// get the original workout data by the date
	return {
		date: bestWorkout.date,
		value: bestWorkout[key],
		sets: groupedRawData[bestWorkout.date]
	};
}

/**
 * prepares all json files to readable data
 * @param rawJsonFiles
 * @returns
 */
export function prepareBulkData(files: { category: string; name: string; data: JsonDataProp[] }[]) {
	const preparedData = [];

	for (const file of files) {
		const data = prepareData(file.data);

		let obj = {
			name: file.name,
			category: file.category,
			pd: data,
			bestOneRepMax: getBestWorkoutByCategory(file.data, data, 'oneRepMax'),
			bestVolume: getBestWorkoutByCategory(file.data, data, 'exerciseVolume'),
			bestWeight: getBestWorkoutByCategory(file.data, data, 'averageWeight')
		};

		preparedData.push(obj);
	}
	return preparedData;
}
