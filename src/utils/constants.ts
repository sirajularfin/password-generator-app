import {Dimensions} from 'react-native';

export const DEFAULT_ERROR = 'Something went wrong. Please try again!';
export const MAX_PASSWORD_LENGTH = 50;
export const MIN_PASSWORD_LENGTH = 1;
export const POSSIBLE_CHARACTER = {
	LOWERCASE: 'abcdefghijklmnopqrstuvwxyz',
	NUMBERS: '0123456789',
	SYMBOLS: '!@#$%^&*|()_+{};:,.<>?',
	UPPERCASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
};
export const STORAGE_PASSWORD_KEY = 'STORAGE_PASSWORD_KEY';
export const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
