// the type of the json data of the gainzfire data
export type JsonDataProp = {
	Date: string;
	Set: number;
	'Reps/Seconds': number;
	Weight: number;
	Plan: string;
};

export type PreparedStrengthData = {
	date: string;
	averageReps: number;
	averageWeight: number;
	exerciseVolume: number;
	oneRepMax: number;
	sets: any;
}[];
