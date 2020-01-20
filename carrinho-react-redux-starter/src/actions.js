export function addItem (produto) {
  return {
    type: 'ADICIONA_ITEM',
    payload: produto
  }
}

export function removeItem (produtoId) {
  return {
    type: 'REMOVE_ITEM',
    payload: {
      id: produtoId
    }
  }
}
