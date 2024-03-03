import {act, renderHook} from '@testing-library/react-hooks';
import usePasswordGenerator from '../usePasswordGenerator';
import {MAX_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH} from '../../../utils/constants';

describe('usePasswordGenerator', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('should check initial state', () => {
		const {result} = renderHook(() => usePasswordGenerator());
		expect(result.current.errorMessage).toBe('');
		expect(result.current.password).toBe('');
		expect(result.current.passwordFilters).toEqual({
			includeLowercase: false,
			includeNumbers: false,
			includeSymbols: false,
			includeUppercase: false,
			passwordLength: null,
		});
	});

	it('should reset password and filters when handleReset is called', () => {
		const {result} = renderHook(() => usePasswordGenerator());
		act(() => {
			result.current.handleReset();
		});
		expect(result.current.password).toBe('');
		expect(result.current.passwordFilters).toStrictEqual({
			includeLowercase: false,
			includeNumbers: false,
			includeSymbols: false,
			includeUppercase: false,
			passwordLength: null,
		});
	});

	it('should generate a password of specified length with lowercase characters only', () => {
		const {result} = renderHook(() => usePasswordGenerator());
		act(() => {
			result.current.setPasswordFilters({
				includeLowercase: true,
				includeNumbers: false,
				includeSymbols: false,
				includeUppercase: false,
				passwordLength: 10,
			});
		});
		expect(result.current.passwordFilters).toStrictEqual({
			includeLowercase: true,
			includeNumbers: false,
			includeSymbols: false,
			includeUppercase: false,
			passwordLength: 10,
		});
		expect(result.current.errorMessage).toBe('');
		expect(result.current.password).toMatch(/^[a-z]{10}$/);
		expect(result.current.password).toHaveLength(10);
	});

	it('should generate a password of specified length with uppercase characters only', () => {
		const {result} = renderHook(() => usePasswordGenerator());
		act(() => {
			result.current.setPasswordFilters({
				includeLowercase: false,
				includeNumbers: false,
				includeSymbols: false,
				includeUppercase: true,
				passwordLength: 10,
			});
		});
		expect(result.current.passwordFilters).toStrictEqual({
			includeLowercase: false,
			includeNumbers: false,
			includeSymbols: false,
			includeUppercase: true,
			passwordLength: 10,
		});
		expect(result.current.errorMessage).toBe('');
		expect(result.current.password).toMatch(/^[A-Z]{10}$/);
		expect(result.current.password).toHaveLength(10);
	});

	it('should generate a password of specified length with numbers only', () => {
		const {result} = renderHook(() => usePasswordGenerator());
		act(() => {
			result.current.setPasswordFilters({
				includeLowercase: false,
				includeNumbers: true,
				includeSymbols: false,
				includeUppercase: false,
				passwordLength: 10,
			});
		});
		expect(result.current.passwordFilters).toStrictEqual({
			includeLowercase: false,
			includeNumbers: true,
			includeSymbols: false,
			includeUppercase: false,
			passwordLength: 10,
		});
		expect(result.current.errorMessage).toBe('');
		expect(result.current.password).toMatch(/^[0-9]{10}$/);
		expect(result.current.password).toHaveLength(10);
	});

	it('should generate a password of specified length with symbols only', () => {
		const {result} = renderHook(() => usePasswordGenerator());
		act(() => {
			result.current.setPasswordFilters({
				includeLowercase: false,
				includeNumbers: false,
				includeSymbols: true,
				includeUppercase: false,
				passwordLength: 10,
			});
		});
		expect(result.current.passwordFilters).toStrictEqual({
			includeLowercase: false,
			includeNumbers: false,
			includeSymbols: true,
			includeUppercase: false,
			passwordLength: 10,
		});
		expect(result.current.errorMessage).toBe('');
		expect(result.current.password).toMatch(/^[!@#$%^&*|()_+{};:,.<>?]{10}$/);
		expect(result.current.password).toHaveLength(10);
	});

	it('should generate a password of specified length with all characters', () => {
		const {result} = renderHook(() => usePasswordGenerator());
		act(() => {
			result.current.setPasswordFilters({
				includeLowercase: true,
				includeNumbers: true,
				includeSymbols: true,
				includeUppercase: true,
				passwordLength: 10,
			});
		});
		expect(result.current.passwordFilters).toStrictEqual({
			includeLowercase: true,
			includeNumbers: true,
			includeSymbols: true,
			includeUppercase: true,
			passwordLength: 10,
		});
		expect(result.current.errorMessage).toBe('');
		expect(result.current.password).toMatch(/^[a-zA-Z0-9!@#$%^&*|()_+{};:,.<>?]{10}$/);
		expect(result.current.password).toHaveLength(10);
	});

	it('should not generate a password if no filters are selected', () => {
		const {result} = renderHook(() => usePasswordGenerator());
		act(() => {
			result.current.setPasswordFilters({
				includeLowercase: false,
				includeNumbers: false,
				includeSymbols: false,
				includeUppercase: false,
				passwordLength: 10,
			});
		});
		expect(result.current.passwordFilters).toStrictEqual({
			includeLowercase: false,
			includeNumbers: false,
			includeSymbols: false,
			includeUppercase: false,
			passwordLength: 10,
		});
		expect(result.current.errorMessage).toBe('');
		expect(result.current.password).toBe('');
	});

	it('should not generate a password if password length is less than minimum length', () => {
		const {result} = renderHook(() => usePasswordGenerator());
		act(() => {
			result.current.setPasswordFilters({
				includeLowercase: true,
				includeNumbers: true,
				includeSymbols: true,
				includeUppercase: true,
				passwordLength: 0,
			});
		});
		expect(result.current.passwordFilters).toStrictEqual({
			includeLowercase: true,
			includeNumbers: true,
			includeSymbols: true,
			includeUppercase: true,
			passwordLength: 0,
		});
		expect(result.current.errorMessage).toBe(
			`Please set a password length between ${MIN_PASSWORD_LENGTH} and ${MAX_PASSWORD_LENGTH}.`,
		);
		expect(result.current.password).toBe('');
	});

	it('should not generate a password if password length is greater than maximum length', () => {
		const {result} = renderHook(() => usePasswordGenerator());
		act(() => {
			result.current.setPasswordFilters({
				includeLowercase: true,
				includeNumbers: true,
				includeSymbols: true,
				includeUppercase: true,
				passwordLength: 51,
			});
		});
		expect(result.current.passwordFilters).toStrictEqual({
			includeLowercase: true,
			includeNumbers: true,
			includeSymbols: true,
			includeUppercase: true,
			passwordLength: 51,
		});
		expect(result.current.errorMessage).toBe(
			`Please set a password length between ${MIN_PASSWORD_LENGTH} and ${MAX_PASSWORD_LENGTH}.`,
		);
		expect(result.current.password).toBe('');
	});

	it('should not generate a password if password length is less than active filters count', () => {
		const {result} = renderHook(() => usePasswordGenerator());
		act(() => {
			result.current.setPasswordFilters({
				includeLowercase: true,
				includeNumbers: true,
				includeSymbols: true,
				includeUppercase: true,
				passwordLength: 3,
			});
		});
		expect(result.current.passwordFilters).toStrictEqual({
			includeLowercase: true,
			includeNumbers: true,
			includeSymbols: true,
			includeUppercase: true,
			passwordLength: 3,
		});
		expect(result.current.errorMessage).toBe(
			'The password length should not be less than the number of selected filters. Please adjust accordingly.',
		);
		expect(result.current.password).toBe('');
	});
});
