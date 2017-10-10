import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';
import store from './store';

const AppWrapper = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

render(<AppWrapper />, document.getElementById('app'));