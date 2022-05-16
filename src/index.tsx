// import 'react-app-polyfill/stable';
import React, { FC, useContext, useMemo, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Router from './services/Router';
import ClearCache from './ClearCache';
import AppProvider, { AppContext } from './store/AppProvider';
import LoadingGeneral from './components/LoadingGeneral/LoadingGeneral.comp';
import ErrorGeneral from './components/ErrorGeneral/ErrorGeneral.comp';
import './assets/app.scss';

const App: FC = () => {
  // ? SET FALSE IF YOU REQUIRED FETCH DATA BEFORE RENDER ROUTER
  const [appReady] = useState<boolean>(true);
  const context = useContext(AppContext);

  // useEffect(() => {
  // * IT WILL USE IF APP REQUIRED FETCH DATA BEFORE RENDER CONTAINER
  // ? FOR SOME CASE THAT APP NEED TOKEN BEFORE RENDER
  // ! setAppReady(true);
  // }, []);

  // * MEMOIZE ROUTER CAN HELP INCREASE INDEX PERFORMANCE APP
  const renderRouter = useMemo(() => appReady && <Router />, [appReady]);

  return (
    <>
      <LoadingGeneral {...context.loadingState} />
      <ErrorGeneral {...context.errorState} />
      {renderRouter}
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
