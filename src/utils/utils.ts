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
