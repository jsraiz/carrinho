export const Types = {
  ADD: 'ADICIONA_ITEM',
  REMOVE: 'REMOVE_ITEM'
};

export default function reducer(state = {}, action) {
  switch (action.type) {
    case Types.ADD:
      return {
        ...state,
        [action.payload.id]: {
          ...action.payload,
          quantidade: state[action.payload.id] ? state[action.payload.id].quantidade + 1 : 1
        }
      }
    case Types.REMOVE:
      return (state[action.payload.id].quantidade > 1)
        ? {
          ...state,
          [action.payload.id]: {
            ...state[action.payload.id],
            quantidade: state[action.payload.id].quantidade - 1
          }
        }
        : Object.keys(state).reduce(function(acc, produtoId) {
            return {
              ...acc,
              ...( 
                produtoId === action.payload.id 
                  ? {} 
                  : { [produtoId]: state[produtoId] }
                )
            }
        }, {})

    default:
      return state;
  }
}

function addItem (produto) {
  return {
    type: Types.ADD,
    payload: produto
  }
}

function removeItem (itemId) {
  return {
    type: Types.REMOVE,
    payload: {
      id: itemId
    }
  }
}

export const Creators = {
  addItem,
  removeItem
};

const getItens = state => state.carrinhoItens;

export const Selectors = {
  getItens
};