import { useState } from 'react';

export const useStorage = (key: string, initialValue: any = '') => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: any) => {
    try {
      let valueToStore = value;
      if (value instanceof Function) {
        valueToStore = value(storedValue);
      }
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    }
  };

  return [storedValue, setValue];
};
