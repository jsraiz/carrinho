import React from 'react';
import ReactDOM from 'react-dom';
import AppComponent from './App'

import { createStore } from 'redux';

import { Provider } from 'react-redux';

import rootReducers from './ducks';

const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <AppComponent />
  </Provider>,
  document.getElementById('app')
)