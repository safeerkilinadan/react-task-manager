import { useState, useEffect } from "react";

/**
 * useLocalStorage - a custom hook for syncing React state with localStorage.
 * @param {string} key - The localStorage key to use.
 * @param {*} initialValue - The default state value if nothing is found in storage.
 */
export default function useLocalStorage(key, initialValue) {
  // 🟢 Initialize from localStorage (lazy state initialization)
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error("Error reading localStorage:", error);
      return initialValue;
    }
  });

  // 🟣 Sync state with localStorage on every update
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error("Error writing to localStorage:", error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
