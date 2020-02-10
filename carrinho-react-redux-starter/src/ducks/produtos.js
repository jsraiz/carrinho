import * as backendService from '../services/backend';

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

function buscaProdutos(pagina = 1) {
  return function(dispatch) {
    dispatch(produtosInicializando());
    backendService
      .getProdutosPorPagina(pagina)
      .then(function(data) {
        dispatch(produtosFinalizado({
          ...data,
          atual: pagina
        }))
      })
  }
};

export const Creators = {
  buscaProdutos,
};

const estadoInicial = {
  data: [],
  atual: 1
}

export default function(state = estadoInicial, action) {
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
        data: action.payload.data,
        paginacao: {
          anterior: action.payload.prev || null,
          proxima: action.payload.next || null,
          primeira: action.payload.first,
          ultima: action.payload.last,
          atual: action.payload.atual
        }
      }
    default:
      return state;
  }
};

const getProdutos = state => state.produtos.data;
const isLoading = state => state.produtos.loading;

const getPaginacao = state => state.produtos.paginacao;

export const Selectors = {
  getProdutos,
  isLoading,
  getPaginacao,
};