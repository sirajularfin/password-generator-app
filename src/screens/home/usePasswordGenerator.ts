import {useEffect, useState} from 'react';
import {MAX_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH, POSSIBLE_CHARACTER} from '../../utils/constants';
import {generateRandomNumber} from '../../utils/functions';

/**
 * @summary Interface for password filters
 */
type IPasswordFilters = {
	includeLowercase: boolean;
	includeNumbers: boolean;
	includeSymbols: boolean;
	includeUppercase: boolean;
	passwordLength: number | null;
};

/**
 * @summary Custom hook to generate password
 * @returns {object}
 */
const usePasswordGenerator = () => {
	const [errorMessage, setErrorMessage] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [passwordFilters, setPasswordFilters] = useState<IPasswordFilters>({
		includeLowercase: false,
		includeNumbers: false,
		includeSymbols: false,
		includeUppercase: false,
		passwordLength: null,
	});

	useEffect(() => {
		if (isPasswordGenerationPossible()) {
			generatePassword();
		} else {
			setPassword('');
		}
	}, [passwordFilters]);

	/**
	 * @summary Generate password
	 * @returns {void}
	 */
	const generatePassword = (): void => {
		let potentialPasswordCharacters = '';

		if (passwordFilters.includeUppercase) {
			potentialPasswordCharacters += POSSIBLE_CHARACTER.UPPERCASE;
		}

		if (passwordFilters.includeLowercase) {
			potentialPasswordCharacters += POSSIBLE_CHARACTER.LOWERCASE;
		}

		if (passwordFilters.includeNumbers) {
			potentialPasswordCharacters += POSSIBLE_CHARACTER.NUMBERS;
		}

		if (passwordFilters.includeSymbols) {
			potentialPasswordCharacters += POSSIBLE_CHARACTER.SYMBOLS;
		}

		if (passwordFilters.passwordLength !== null) {
			for (let i = 0; i < passwordFilters.passwordLength; i++) {
				const index = generateRandomNumber(0, potentialPasswordCharacters.length - 1);
				const character = potentialPasswordCharacters[index];
				setPassword(prev => prev + character);
			}
		}
	};

	/**
	 * @summary Checks if password generation is possible
	 * @returns {boolean}
	 */
	const isPasswordGenerationPossible = (): boolean => {
		const activeFiltersCount = Object.values(passwordFilters).filter(Boolean).length;

		if (activeFiltersCount === 0) {
			setErrorMessage('Please select at least one filter to generate a password.');
			return false;
		}

		if (
			passwordFilters.passwordLength !== null &&
			(passwordFilters.passwordLength < MIN_PASSWORD_LENGTH ||
				passwordFilters.passwordLength > MAX_PASSWORD_LENGTH)
		) {
			setErrorMessage(`Please set a password length between ${MIN_PASSWORD_LENGTH} and ${MAX_PASSWORD_LENGTH}.`);
			return false;
		}

		if (passwordFilters.passwordLength !== null && passwordFilters.passwordLength < activeFiltersCount) {
			setErrorMessage(
				'The password length should not be less than the number of selected filters. Please adjust accordingly.',
			);
			return false;
		}

		return true;
	};

	/**
	 * @summary Reset password and filters
	 * @returns {void}
	 */
	const handleReset = (): void => {
		setPassword('');
		setPasswordFilters({
			includeLowercase: false,
			includeNumbers: false,
			includeSymbols: false,
			includeUppercase: false,
			passwordLength: 0,
		});
	};

	return {
		errorMessage,
		handleReset,
		password,
		setPasswordFilters,
	};
};

export default usePasswordGenerator;
