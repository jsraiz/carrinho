const Types = {
  DONE: 'PRODUTOS_DONE',
  INIT: 'PRODUTOS_INIT'
}

const produtosFinalizado = (payload) => ({
  type: Types.DONE,
  payload
});

const produtosInicializando = () => ({
  type: Types.INIT
});

function buscaProdutos() {
  return function(dispatch) {
    dispatch(produtosInicializando());
    window
      .fetch('http://localhost:3000/produtos')
      .then(data => data.json())
      .then(function(produtos) {
        dispatch(produtosFinalizado(produtos))
      })
  }
};

export const Creators = {
  buscaProdutos,
};

export default function(state = { data: [] }, action) {
  switch (action.type) {
    case Types.INIT:
      return {
        ...state,
        loading: true
      }
    case Types.DONE:
      return {
        ...state,
        loading: false,
        data: action.payload.data
      }
    default:
      return state;
  }
};

const getProdutos = state => state.produtos.data;
const isLoading = state => state.produtos.loading;

export const Selectors = {
  getProdutos,
  isLoading,
};