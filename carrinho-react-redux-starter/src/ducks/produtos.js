import produtosMock from '../data';

const getProdutos = state => state.produtos;

export const Selectors = {
  getProdutos,
};

export default function(state = produtosMock) {
  return state;
}