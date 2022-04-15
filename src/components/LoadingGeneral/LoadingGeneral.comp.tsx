import React, { FC } from 'react';
import LOADING_SPINNER from '../../assets/images/react.svg';
import './LoadingGeneral.scss';

export type ILoadingGeneralProps = {
  isLoading: boolean;
  text?: string;
};

export const loadingGeneralDefaultProps = {
  isLoading: false,
  text: 'Loading..',
};

export const loadingGeneralNamespace = 'LoadingGeneral';

const LoadingGeneral: FC<ILoadingGeneralProps> = ({ isLoading, text }) => (
  <div className={`loading-mask ${isLoading ? 'on' : ''}`}>
    <div className="spinner">
      <img className="rotate" src={LOADING_SPINNER} alt="loading" />
    </div>
    <div className="loading-text">{text}</div>
  </div>
);

LoadingGeneral.displayName = loadingGeneralNamespace;
LoadingGeneral.defaultProps = loadingGeneralDefaultProps;
export default LoadingGeneral;
