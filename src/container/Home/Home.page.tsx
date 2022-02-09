import React, { FC, useState, useEffect } from 'react';
import { TITLE_HOME_PAGE } from '../../constants';
import reactLogo from '../../assets/images/react.svg';
import './Home.scss';

export interface IProps {}

const Home: FC<IProps> = () => {
  const [title] = useState('React Boilerplate');

  useEffect(() => {
    // eslint-disable-next-line no-alert
    alert(TITLE_HOME_PAGE);
  }, []);

  return (
    <div className="home-page">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <img src={reactLogo} className="rotate" alt="react-logo" />
            <h1>{title}</h1>
            <p>
              Project Template with the latest react hook, simple clean and no
              vulnerability package
            </p>
            <small>React Template by Thomi Jasir</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
