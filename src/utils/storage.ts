import EncryptedStorage from 'react-native-encrypted-storage';

/**
 * Sets the value of a key in the storage.
 * @param key - The key to set the value for.
 * @param value - The value to be set.
 * @returns A promise that resolves when the value is set successfully, or rejects with an error.
 */
export const setAsyncStorage = async (key: string, value: string): Promise<void> => {
	try {
		await EncryptedStorage.setItem(key, value);
	} catch (error) {
		console.error('Error saving data', error);
	}
};

/**
 * Retrieves a value from storage based on the provided key.
 * @param key - The key to retrieve the value for.
 * @returns A Promise that resolves to the retrieved value (string) if it exists, or null if it doesn't.
 */
export const getAsyncStorage = async (key: string): Promise<string | null> => {
	try {
		const value = await EncryptedStorage.getItem(key);
		if (value !== null) {
			return value;
		}
	} catch (error) {
		console.error('Error retrieving data', error);
	}
	return null;
};

/**
 * Removes the data associated with the specified key from the storage.
 * @param key - The key of the data to be removed.
 * @returns A Promise that resolves when the data is successfully removed, or rejects with an error if removal fails.
 */
export const removeAsyncStorage = async (key: string): Promise<void> => {
	try {
		await EncryptedStorage.removeItem(key);
	} catch (error) {
		console.error('Error removing data', error);
	}
};

/**
 * Clears the storage.
 * @returns A promise that resolves when the storage is cleared.
 */
export const clearAsyncStorage = async (): Promise<void> => {
	try {
		await EncryptedStorage.clear();
	} catch (error) {
		console.error('Error clearing data', error);
	}
};
