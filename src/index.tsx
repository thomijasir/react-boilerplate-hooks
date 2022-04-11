import 'react-app-polyfill/stable';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import APP_ROUTER, { IRoute } from './services/Router';
import ClearCache from './ClearCache';
import AppProvider, { AppContext } from './context/AppProvider';

import './assets/app.scss';

interface Props {}
interface State {
  appReady: boolean;
}
class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      appReady: true,
    };
  }
  componentDidMount() {
    console.log('Context Available: ', this.context);
  }

  // DID MOUNT IF HAVE INITIALIZATION DATA BEFORE RENDER
  renderRouter = () => (
    <BrowserRouter>
      <Routes>
        {APP_ROUTER.map((item: IRoute) => (
          <Route {...item} element={<item.element />} />
        ))}
        <Route path="*" element={<p>404 Page</p>} />
      </Routes>
    </BrowserRouter>
  );

  render() {
    const { appReady } = this.state;
    return appReady && this.renderRouter();
  }
}
// Insert Context To Class
App.contextType = AppContext;

ReactDOM.render(
  <ClearCache>
    <AppProvider>
      <App />
    </AppProvider>
  </ClearCache>,
  document.getElementById('root'),
);
