import {useEffect, useState} from 'react';
import {
  MAX_PASSWORD_LENGTH,
  MIN_PASSWORD_LENGTH,
  POSSIBLE_CHARACTER,
  STORAGE_PASSWORD_KEY,
} from '../../utils/constants';
import {generateRandomNumber} from '../../utils/functions';
import {setAsyncStorage} from '../../utils/storage';

/**
 * @summary Interface for password filters
 */
export type IPasswordFilters = {
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  includeUppercase: boolean;
  passwordLength: number | null;
};

/**
 * @summary Custom hook to generate password
 */
const usePasswordGenerator = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
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
      setPassword(null);
    }
  }, [passwordFilters]);

  /**
   * @summary Generates a random password.
   * It first creates a string of all possible characters based on the active filters.
   * Then, it generates a random password by selecting characters from the possible characters string randomly.
   * @returns {void}
   */
  const generatePassword = (): void => {
    let potentialPasswordCharacters: string = '';
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

    if (
      passwordFilters.passwordLength !== null &&
      potentialPasswordCharacters.length > 0
    ) {
      let password: string = '';
      for (let i = 0; i < passwordFilters.passwordLength; i++) {
        const index = generateRandomNumber(
          0,
          potentialPasswordCharacters.length - 1,
        );
        const character = potentialPasswordCharacters[index];
        password += character;
      }
      setPassword(password);
      setAsyncStorage(STORAGE_PASSWORD_KEY, password);
    }
  };

  /**
   * @summary Checks if password generation is possible
   * @returns {boolean}
   */
  const isPasswordGenerationPossible = (): boolean => {
    const activeFiltersCount =
      Object.values(passwordFilters).filter(Boolean).length;

    if (activeFiltersCount === 0) {
      return false;
    }

    if (
      passwordFilters.passwordLength !== null &&
      (passwordFilters.passwordLength < MIN_PASSWORD_LENGTH ||
        passwordFilters.passwordLength > MAX_PASSWORD_LENGTH)
    ) {
      setErrorMessage(
        `Please set a password length between ${MIN_PASSWORD_LENGTH} and ${MAX_PASSWORD_LENGTH}.`,
      );
      return false;
    }

    if (
      passwordFilters.passwordLength !== null &&
      passwordFilters.passwordLength < activeFiltersCount
    ) {
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
    setPassword(null);
    setPasswordFilters({
      includeLowercase: false,
      includeNumbers: false,
      includeSymbols: false,
      includeUppercase: false,
      passwordLength: null,
    });
  };

  return {
    errorMessage,
    handleReset,
    password,
    passwordFilters,
    setPasswordFilters,
  };
};

export default usePasswordGenerator;
