import Clipboard from '@react-native-community/clipboard';
import {ToastAndroid} from 'react-native';
import {DEFAULT_ERROR} from './constants';

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

/**
 * Returns an array of possible characters based on the provided configuration.
 * @param includeLowercase - Whether to include lowercase characters.
 * @param includeUppercase - Whether to include uppercase characters.
 * @param includeSymbols - Whether to include symbol characters.
 * @param includeNumbers - Whether to include numeric characters.
 * @returns An array of possible characters.
 */
export const getPossibleCharacters = (
  includeLowercase: boolean,
  includeUppercase: boolean,
  includeSymbols: boolean,
  includeNumbers: boolean,
): string[] => {
  return [
    includeLowercase ? 'abcdefghijklmnopqrstuvwxyz' : null,
    includeUppercase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : null,
    includeNumbers ? '0123456789' : null,
    includeSymbols ? '!@#$%^&*|()_+{};:,.<>?' : null,
  ].filter(character => character !== null);
};
