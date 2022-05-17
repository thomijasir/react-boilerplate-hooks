import React, { FC, useState, useEffect, useContext } from 'react';
import Image from '../../components/Image/Image.comp';
import { AppContext } from '../../store/AppProvider';
import { TITLE_HOME_PAGE } from '../../constants';
import reactLogo from '../../assets/images/react.svg';
import './Home.scss';

export interface IProps {}

const Home: FC<IProps> = () => {
  const context = useContext(AppContext);
  const [title] = useState('Boilerplate');

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(TITLE_HOME_PAGE);
    // eslint-disable-next-line no-console
    console.log('HOME CONTEXT: ', context);
  }, []);

  return (
    <div className="home-page safe-area">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <Image src={reactLogo} className="rotate" alt="react-logo" />
            <h1>{title}</h1>
            <span className="typing-master">
              Project Template with the latest react hook, <br /> simple clean
              and no vulnerability package.
            </span>
            <p className="credits">
              React Template by <b>Thomi Jasir</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
