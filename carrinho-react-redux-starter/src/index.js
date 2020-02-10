import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import AppComponent from './App'
import { Provider } from 'react-redux';

import rootReducers from './ducks';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <AppComponent />
  </Provider>,
  document.getElementById('app')
)