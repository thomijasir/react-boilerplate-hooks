import { APP_CONTEXT } from '../constants';
import { ILoadingGeneralProps } from '../components/LoadingGeneral/LoadingGeneral.comp';
import { IErrorGeneralProps } from '../components/ErrorGeneral/ErrorGeneral.comp';

export interface IAppContext {
  loadingState: ILoadingGeneralProps;
  errorState: IErrorGeneralProps;
}

// INITIAL STATE
export const initialState: any = {
  loadingState: {
    isLoading: false,
    text: 'Loading...',
  },
  errorState: {
    isError: false,
    title: 'Something Wrong!',
    message:
      'Opps, please check app configuration or service that might cause this error.',
  },
};

export const makeInitialState = () => {
  const getStorageContext = localStorage.getItem(APP_CONTEXT);
  if (getStorageContext) {
    return JSON.parse(getStorageContext);
  }
  return initialState;
};

// TYPE ACTION
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';

// REDUCERS
export default (state: IAppContext, action: any) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loadingState: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        errorState: action.payload,
      };
    default:
      return state;
  }
};
