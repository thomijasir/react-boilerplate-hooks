// import 'react-app-polyfill/stable';
import React, { FC, useContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import APP_ROUTER, { IRoute } from './services/Router';
import ClearCache from './ClearCache';
import AppProvider, { AppContext } from './store/AppProvider';
import LoadingGeneral from './components/LoadingGeneral/LoadingGeneral.comp';
import ErrorGeneral from './components/ErrorGeneral/ErrorGeneral.comp';
import './assets/app.scss';

const App: FC = () => {
  const [appReady, setAppReady] = useState<boolean>(false);
  const context = useContext(AppContext);

  useEffect(() => {
    // * IT WILL USE IF APP REQUIRED FETCH DATA BEFORE RENDER CONTAINER
    // ? FOR SOME CASE THAT APP NEED TOKEN BEFORE RENDER
    setAppReady(true);
  }, []);

  return (
    <>
      <LoadingGeneral {...context.loadingState} />
      <ErrorGeneral {...context.errorState} />
      {appReady && (
        <BrowserRouter>
          <Routes>
            {APP_ROUTER.map((item: IRoute) => (
              <Route {...item} element={<item.element />} />
            ))}
            <Route path="*" element={<p>404 Page</p>} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
};

ReactDOM.createRoot(
  document.getElementById('root') || document.createDocumentFragment(),
).render(
  <ClearCache>
    <AppProvider>
      <App />
    </AppProvider>
  </ClearCache>,
);
