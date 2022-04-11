import { useState, useEffect } from 'react';

const getSavedValue = (key: string, initialValue: any) => {
  const storageValue = localStorage.getItem(key);
  if (storageValue) {
    return JSON.parse(storageValue);
  }
  if (initialValue instanceof Function) {
    return initialValue();
  }
  return initialValue;
};

const useStorage = (key: string, initialValue: any) => {
  const [value, setValue] = useState(() => getSavedValue(key, initialValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useStorage;
