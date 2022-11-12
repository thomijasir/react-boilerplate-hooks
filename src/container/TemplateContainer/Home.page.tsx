import React, { FC, useState, useEffect, useContext } from 'react';
import Image from '../../components/Image/Image.comp';
import { AppContext } from '../../store/AppProvider';
import { TITLE_HOME_PAGE } from '../../constants';
import reactLogo from '../../assets/images/react.svg';
import './Home.css';

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
    <div className="home-page w-full h-full mt-40">
      <div className="w-full text-center">
        <Image
          src={reactLogo}
          className="rotate w-60 h-60 m-auto"
          alt="react-logo"
        />
        <h1 className="text-2xl font-bold p-4">{title}</h1>
        <span className="typing-master text-base xs:text-xs sm:text-base">
          Project Template with the latest react hook, <br /> simple clean and
          no vulnerability package.
        </span>
        <p className="credits text-sm">
          React with tailwind flavour by <b>Thomi Jasir</b>
        </p>
      </div>
    </div>
  );
};

export default Home;
