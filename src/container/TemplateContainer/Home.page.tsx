/* eslint-disable */
import React, { FC, useState, useEffect, useContext } from 'react';
import { AppContext } from '../../store/AppProvider';
import { TITLE_HOME_PAGE } from '../../constants';
import reactLogo from '../../assets/images/react.svg';
import './Home.scss';

export interface IProps {}

const Home: FC<IProps> = () => {
  const context = useContext(AppContext);
  const [title] = useState('React Boilerplate');

  useEffect(() => {
    console.log(TITLE_HOME_PAGE);
    console.log('HOME CONTEXT: ', context);
  }, []);

  return (
    <div className="home-page safe-area">
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
