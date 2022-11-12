import React, { FC } from 'react';
import ERROR_DEFAULT from '../../assets/images/general_error_default.png';
import packageInfo from '../../../package.json';
import './ErrorGeneral.css';

export interface IErrorGeneralProps {
  title?: string;
  message?: string;
  image?: string;
  isError: boolean;
}

export const ErrorGeneralDefaultProps: IErrorGeneralProps = {
  title: 'Something Wrong!',
  message: 'Opps, failure open apps or your session has expired.',
  image: ERROR_DEFAULT,
  isError: false,
};

export const ErrorGeneralNamespace: string = 'ErrorGeneral';

const ErrorGeneral: FC<IErrorGeneralProps> = ({
  title,
  message,
  image,
  isError,
}) => {
  return (
    <div
      className={`error-general transition duration-150 ease-in-out ${
        isError ? 'on' : ''
      }`}
    >
      <div className="error-container">
        <img src={image} alt="errorPage" />
        <h2 className="error-title">{title}</h2>
        <p className="error-desc">{message}</p>
      </div>
      <div className="error-footer">
        <p className="text-sm">v{packageInfo.version}</p>
      </div>
    </div>
  );
};

ErrorGeneral.displayName = ErrorGeneralNamespace;
ErrorGeneral.defaultProps = ErrorGeneralDefaultProps;

export default React.memo(ErrorGeneral);
