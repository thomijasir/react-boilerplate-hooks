import React, {
  FC,
  ReactElement,
  useEffect,
  useMemo,
  useReducer,
  useCallback,
} from 'react';
import appReducers, {
  initialState,
  makeInitialState,
  IAppContext,
  SET_LOADING,
  SET_ERROR,
} from './AppReducers';
import { APP_CONTEXT, RESISTANCE_CONTEXT } from '../constants';

export interface IContext extends IAppContext {
  setContext: (payload: any, type: string) => void;
  setLoading: (isLoading: boolean, text: string) => void;
  setError: (isError: boolean, title?: string, message?: string) => void;
}

export const AppContext: React.Context<IAppContext> =
  React.createContext(initialState);

// * MEMOIZATION TO REDUCE EXPENSIVE CALCULATION BY THE CONTEXT
export const AppProviderMemoize = React.memo(AppContext.Provider);
export const AppConsumerMemoize = React.memo(AppContext.Consumer);

const AppProvider: FC<{ children: ReactElement }> = ({ children }) => {
  // * LOAD DISPATCHER FROM useREDUCER
  const [state, dispatch] = useReducer(appReducers, makeInitialState());
  // ? USE RESISTANCE IF APPLICATION NEED DATA ON STORE RESISTANCE TO BROWSER REFRESH
  if (RESISTANCE_CONTEXT) {
    useEffect(() => {
      sessionStorage.setItem(APP_CONTEXT, JSON.stringify(state));
    }, [state]);
  }
  // * DEFINE GLOBAL SET ACTION HANDLER DIRECT INTO CONTEXT DATA
  const handleSetContext = useCallback((payload: any, type: string) => {
    dispatch({
      type,
      payload,
    });
  }, []);

  const handleSetLoading = useCallback((isLoading: boolean, text: string) => {
    dispatch({
      type: SET_LOADING,
      payload: {
        ...state.loadingState,
        isLoading,
        text,
      },
    });
  }, []);

  const handleSetError = useCallback(
    (isError: boolean, title?: string, message?: string) => {
      dispatch({
        type: SET_ERROR,
        payload: {
          ...state.errorState,
          isError,
          title,
          message,
        },
      });
    },
    [],
  );
  // ! USE CONTEXT BE WISE, ONLY USE CONTEXT API IF DATA NEED TO PASS TO OTHER COMPONENT
  // ! DON'T USE CONTEXT TO STORE ALL DATA, CONTEXT OR REDUX MIGHT USE HIGH RESOURCE OF RAM
  const context = useMemo<IContext>(
    () => ({
      ...state,
      setContext: handleSetContext,
      setLoading: handleSetLoading,
      setError: handleSetError,
    }),
    [state],
  );

  return <AppProviderMemoize value={context}>{children}</AppProviderMemoize>;
};

export default AppProvider;
