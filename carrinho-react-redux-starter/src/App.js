import React from 'react';
import produtosLista from './data';
import ProdutoComponent from './Components/Produto';
import ListaProdutosComponent from './Components/ListaProdutos';
import CarrinhoComponent from './Components/Carrinho';

export default function AppComponent() {
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
    <React.Fragment>
      <div className="col-sm-8">
        <ListaProdutosComponent>
          {produtosLista.map((produto, index) => (
            <ProdutoComponent
              item={produto}
              onAddCarrinho={addCarrinho}
              key={`produto-${index}`}
            />
          ))}
        </ListaProdutosComponent>
      </div>
      <div className="col-sm-4">
        <CarrinhoComponent itens={carrinhoItens} onRemoveItemCarrinho={removeItemCarrinho} />
      </div>
    </React.Fragment>
  )
}