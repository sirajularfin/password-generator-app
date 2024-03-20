import Clipboard from '@react-native-community/clipboard';
import {Dimensions, ToastAndroid} from 'react-native';
import {DEFAULT_ERROR} from './constants';
import {v4 as uuidv4} from 'uuid';

/**
 * Generate a random number between min and max
 * @param min
 * @param max
 * @returns {number}
 */
export const generateRandomNumber = (min: number, max: number): number => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Generates a unique identifier (UUID).
 * @returns A string representing the generated UUID.
 */
export const generateUUID = (): string => {
	return uuidv4();
};

/**
 * Copies the specified text to the clipboard.
 * @param text - The text to be copied to the clipboard.
 */
export const copyToClipboard = (text: string): void => {
	try {
		Clipboard.setString(text);
		ToastAndroid.show('Password copied to clipboard', ToastAndroid.SHORT);
	} catch (error) {
		ToastAndroid.show(DEFAULT_ERROR, ToastAndroid.SHORT);
	}
};
