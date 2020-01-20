import React from 'react';
import produtosLista from './data';
import ProdutoComponent from './Components/Produto';
import ListaProdutosComponent from './Components/ListaProdutos';
import CarrinhoComponent from './Components/Carrinho';

export default function AppComponent() {
  return (
    <React.Fragment>
      <div className="col-sm-8">
        <ListaProdutosComponent>
          {produtosLista.map((produto, index) => (
            <ProdutoComponent
              item={produto}
              key={`produto-${index}`}
            />
          ))}
        </ListaProdutosComponent>
      </div>
      <div className="col-sm-4">
        <CarrinhoComponent />
      </div>
    </React.Fragment>
  )
}