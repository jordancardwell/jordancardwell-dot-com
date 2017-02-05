import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import App from './components/App';
import configureStore from './utils/configureStore';

const store = configureStore(window.__PRELOADED_STATE__);

render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}
