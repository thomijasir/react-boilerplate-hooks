import { APP_CONTEXT } from '../constants';

export interface IErrorState {
  isError: boolean;
  image?: string;
  title?: string;
  message?: string;
}

export interface IAppContext {
  isLoading: boolean;
  errorState: IErrorState;
}

// INITIAL STATE
export const initialState: any = {
  isLoading: false,
  errorState: {
    isError: false,
    image: '',
    title: 'Something Wrong!',
    message: 'Opps, Failure Open Apps',
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
        isLoading: action.payload,
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
