import {useEffect, useState} from 'react';
import {MAX_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH} from '../../utils/constants';
import {
  generateRandomNumber,
  getPossibleCharacters,
} from '../../utils/functions';

/**
 * @summary Interface for password filters
 */
export type IPasswordFilters = {
  includeLowercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  includeUppercase: boolean;
  passwordLength: number | null;
  numberOfDigits: number | null;
  numberOfSymbols: number | null;
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
    numberOfDigits: null,
    numberOfSymbols: null,
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
    let password: string = '';
    const {
      includeLowercase,
      includeUppercase,
      includeSymbols,
      includeNumbers,
      passwordLength,
    } = passwordFilters;

    const possibleCharacters = getPossibleCharacters(
      includeLowercase,
      includeUppercase,
      includeSymbols,
      includeNumbers,
    );

    for (let i = 0; i < passwordLength!; i++) {
      const randomCharacter =
        possibleCharacters[
          generateRandomNumber(0, possibleCharacters.length - 1)
        ];
      password +=
        randomCharacter[generateRandomNumber(0, randomCharacter.length - 1)];
    }

    setPassword(password);
  };

  /**
   * @summary Checks if password generation is possible
   * @returns {boolean}
   */
  const isPasswordGenerationPossible = (): boolean => {
    const {passwordLength} = passwordFilters;
    const activeFiltersCount =
      Object.values(passwordFilters).filter(Boolean).length - 1;

    if (activeFiltersCount === 0 || passwordLength === null) {
      return false;
    }

    if (
      passwordLength !== null &&
      (passwordLength < MIN_PASSWORD_LENGTH ||
        passwordLength > MAX_PASSWORD_LENGTH)
    ) {
      setErrorMessage(
        `Please set a password length between ${MIN_PASSWORD_LENGTH} and ${MAX_PASSWORD_LENGTH}.`,
      );
      return false;
    }

    if (passwordLength !== null && passwordLength < activeFiltersCount) {
      setErrorMessage(
        'Password length should not be less than the number of selected filters.',
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
      numberOfDigits: null,
      numberOfSymbols: null,
    });
  };

  return {
    errorMessage,
    handleReset,
    password,
    passwordFilters,
    setPassword,
    setPasswordFilters,
  };
};

export default usePasswordGenerator;
