import React from 'react';
import ReactDOM from 'react-dom';
import AppComponent from './App'

import { createStore } from 'redux';

import { Provider } from 'react-redux';

import reducers from './reducers';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <AppComponent />
  </Provider>,
  document.getElementById('app')
)