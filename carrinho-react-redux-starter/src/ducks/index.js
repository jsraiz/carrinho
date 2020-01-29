import { combineReducers } from 'redux';

import carrinhoReducer from './carrinho';
import produtosReducer from './produtos';

export default combineReducers({
  produtos: produtosReducer,
  carrinhoItens: carrinhoReducer
});