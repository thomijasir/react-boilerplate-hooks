import { useState, useEffect } from 'react';

const getSavedValue = (key: string, initialValue: any) => {
  const storageValue = window.sessionStorage.getItem(key);
  if (storageValue) {
    return JSON.parse(storageValue);
  }
  if (initialValue instanceof Function) {
    return initialValue();
  }
  return initialValue;
};

const useSession = (key: string, initialValue: any) => {
  const [value, setValue] = useState(() => getSavedValue(key, initialValue));

  useEffect(() => {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useSession;
