// https://github.com/the-road-to-learn-react/use-state-with-callback
import { useState, useEffect, useRef, useCallback } from 'react';

export const useStateCallbackInstant = (initialState: any, callback: any) => {
  const [state, setState] = useState(initialState);

  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      callback(state);
    } else {
      didMount.current = true;
    }
  }, [state, callback]);

  return [state, setState];
};

const useStateCallback = (initialValue: any) => {
  const callbackRef = useRef<any>(null);

  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    if (callbackRef.current) {
      callbackRef.current(value);
      callbackRef.current = null;
    }
  }, [value]);

  const setValueWithCallback = useCallback((newValue: any, callback: any) => {
    callbackRef.current = callback;

    return setValue(newValue);
  }, []);

  return [value, setValueWithCallback];
};

export default useStateCallback;
