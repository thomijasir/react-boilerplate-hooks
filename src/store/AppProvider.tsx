import React, { FC, useEffect, useMemo, useReducer } from 'react';
import { setAction } from './AppAction';
import appReducers, {
  initialState,
  makeInitialState,
  IAppContext,
  SET_LOADING,
  SET_ERROR,
} from './AppReducers';
import { ILoadingGeneralProps } from '../components/LoadingGeneral/LoadingGeneral.comp';
import { IErrorGeneralProps } from '../components/ErrorGeneral/ErrorGeneral.comp';
import { APP_CONTEXT, RESISTANCE_CONTEXT } from '../constants';

export interface IContext extends IAppContext {
  dispatch: React.Dispatch<any>;
  setLoading: (value: ILoadingGeneralProps) => void;
  setError: (value: IErrorGeneralProps) => void;
}

export const AppContext: React.Context<IContext> =
  React.createContext(initialState);

const AppProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(appReducers, makeInitialState());
  // ? USE RESISTANCE IF APPLICATION NEED DATA ON STORE RESISTANCE TO BROWSER REFRESH
  if (RESISTANCE_CONTEXT) {
    useEffect(() => {
      localStorage.setItem(APP_CONTEXT, JSON.stringify(state));
    }, [state]);
  }
  // ! USE CONTEXT BE WISE, ONLY USE CONTEXT API IF DATA NEED TO PASS TO OTHER COMPONENT
  // ! DON'T USE CONTEXT TO STORE ALL DATA, CONTEXT OR REDUX MIGHT USE HIGH RESOURCE OF RAM
  const context = useMemo<IContext>(
    () => ({
      ...state,
      dispatch,
      setLoading: (value: ILoadingGeneralProps) =>
        setAction(value, SET_LOADING, dispatch),
      setError: (value: IErrorGeneralProps) =>
        setAction(value, SET_ERROR, dispatch),
    }),
    [state],
  );

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default AppProvider;
