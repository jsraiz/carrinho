import React from 'react';
import ListaProdutosContainer from './containers/ListaProdutos';
import CarrinhoContainer from './containers/Carrinho';

export default function AppComponent() {
  return (
    <React.Fragment>
      <div className="col-sm-8">
        <ListaProdutosContainer />
      </div>
      <div className="col-sm-4">
        <CarrinhoContainer />
      </div>
    </React.Fragment>
  )
}