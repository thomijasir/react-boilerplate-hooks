import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../container/Home/Home.page';

const Router: FC<{}> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<p>404 Page</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
