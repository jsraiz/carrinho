import React from 'react';
import ReactDOM from 'react-dom';
import AppComponent from './App'

import { createStore, combineReducers } from 'redux';

import { Provider } from 'react-redux';

import carrinhoReducer from './reducers';
import produtosMock from './data';

const produtosReducer = function(state = produtosMock) {
  return state;
}

const rootReducers = combineReducers({
  produtos: produtosReducer,
  carrinhoItens: carrinhoReducer
})

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