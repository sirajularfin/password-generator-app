/**
 * @summary Generate a random number between min and max
 * @param min
 * @param max
 * @returns {number}
 */
export const generateRandomNumber = (min: number, max: number): number => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};
