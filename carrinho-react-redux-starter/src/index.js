import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import AppComponent from './App'
import { Provider } from 'react-redux';

import rootReducers from './ducks';

const store = createStore(
  rootReducers,
  applyMiddleware(thunk)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <AppComponent />
  </Provider>,
  document.getElementById('app')
)