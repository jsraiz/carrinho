const produtosLista = [
  {
    id: 'abc123',
    nome: 'JSRaiz para FW',
    preco: 300,
    descricao: 'O melhor curso do mundo',
    imagem: 'https://lorempixel.com/500/300'
  },
  {
    id: 'bbc123',
    nome: 'JSRaiz para Node',
    preco: 1200,
    descricao: 'O melhor curso e todos',
    imagem: 'https://lorempixel.com/500/300'
  },
  {
    id: 'cbc123',
    nome: 'Programação funcional com JS',
    preco: 500,
    descricao: 'O melhor funcional de todos',
    imagem: 'https://lorempixel.com/500/300'
  }
];

function ProdutoComponent(props) {
  return (
    React.createElement('div', { className: 'col-sm-4 mb-3' },
      React.createElement('div', { className: 'card loja__item' },
        React.createElement('img', { className: 'card-img-top', src: props.item.imagem }),
        React.createElement('div', { className: 'card-body'},
          React.createElement('h5', { className: 'card-title'}, props.item.nome),
          React.createElement('small', null, `R$${props.item.preco}`),
          React.createElement('p', { className: 'card-text' }, props.item.descricao),
          React.createElement('button', { className: 'btn btn-primary', onClick: props.onAddCarrinho.bind(null, props.item) }, 'Adicionar')
        )
      )
    )
  )
}

function ListaProdutosComponent(props) { 
  return (
    React.createElement('div', { className: 'row loja' },
      props.children
    )
  )
}

function valorTotal(carrinhoItens) {
  return Object.keys(carrinhoItens).reduce(function(acc, produtoId) {
    return acc + (carrinhoItens[produtoId].preco * carrinhoItens[produtoId].quantidade)
  }, 0);
}

function CarrinhoComponent(props) {
  return (
    React.createElement('div', { className: 'carrinho' },
      React.createElement('div', { className: 'carrinho__itens'},
        Object.keys(props.itens).map(function(produtoId, index) {
          return (
            React.createElement('div', { className: 'card carrinho__item', key: `item-carrinho-${index}` },
              React.createElement('div', { className: 'card-body' },
                React.createElement('h5', { className: 'card-title'}, props.itens[produtoId].nome),
                React.createElement('p', { className: 'card-text' }, `Preço unidade: R$${props.itens[produtoId].preco} | Quantidade: ${props.itens[produtoId].quantidade}`),
                React.createElement('p', { className: 'card-text' }, `Valor: R$${props.itens[produtoId].preco * props.itens[produtoId].quantidade}`),
                React.createElement('button', { onClick: props.onRemoveItemCarrinho.bind(null, produtoId), className: 'btn btn-danger btn-sm' }, 'Remover')
              )
            )
          )
        })
      ),
      React.createElement('div', { className: 'carrinho__total mt-2 p-3'},
        React.createElement('h6', null,
          'Total: ',
          React.createElement('strong', null, `R$${valorTotal(props.itens)}`)
        )
      )
    )
  )
}

function AppComponente() {
  const [carrinhoItens, addItemCarrinho] = React.useState({});

  function addCarrinho(produto) {
    if (!carrinhoItens[produto.id]) {
      addItemCarrinho({
        ...carrinhoItens,
        [produto.id]: {
          ...produto,
          quantidade: 1
        }
      })
    } else {
      addItemCarrinho({
        ...carrinhoItens,
        [produto.id]: {
          ...produto,
          quantidade: ++carrinhoItens[produto.id].quantidade
        }
      })
    }
  }

  function removeItemCarrinho(produtoId) {
    if (carrinhoItens[produtoId].quantidade <= 1) {
      delete carrinhoItens[produtoId];
      addItemCarrinho({ ...carrinhoItens });
    } else {
      addItemCarrinho({
        ...carrinhoItens,
        [produtoId]: {
          ...carrinhoItens[produtoId],
          quantidade: --carrinhoItens[produtoId].quantidade
        }
      })
    }
  }

  return (
    React.createElement(React.Fragment, null, 
      React.createElement('div', { className: 'col-sm-8' }, 
        React.createElement(ListaProdutosComponent, null, 
          produtosLista.map(function(produto, index) {
            return React.createElement(ProdutoComponent, { item: produto, onAddCarrinho: addCarrinho, key: `produto-${index}` })
          })
        )
      ),
      React.createElement('div', { className: 'col-sm-4' },
        React.createElement(CarrinhoComponent, { itens: carrinhoItens, onRemoveItemCarrinho: removeItemCarrinho })
      )
    )
  )
}

ReactDOM.render(
  React.createElement(AppComponente),
  document.getElementById('app')
)