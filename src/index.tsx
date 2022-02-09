import 'react-app-polyfill/stable';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import APP_ROUTER from './services/Router';
import withClearCache from './cache';
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

  // DID MOUNT IF HAVE INITIALIZATION DATA BEFORE RENDER

  renderRouter = () => (
    <BrowserRouter>
      <Routes>
        {APP_ROUTER.map((item) => (
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

// Clear Component
const ClearCacheComponent = withClearCache(App);

ReactDOM.render(<ClearCacheComponent />, document.getElementById('root'));
