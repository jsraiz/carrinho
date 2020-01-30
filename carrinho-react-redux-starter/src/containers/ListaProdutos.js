import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import { Creators as carrinhoCreators } from '../ducks/carrinho';
import { 
  Selectors as produtosSelector,
  Creators as produtosCreators
} from '../ducks/produtos';

import CardComponent from '../Components/Card';

const ListaProdutos = (props) => {
  //
  useEffect(function() {
    if (props.itens.length <= 0) {
      props.buscaProdutos()
    }
  })
  //
  return (
    <div className="row">
      {props.loading
        ? <strong>Carregando...</strong>
        : props.itens.map((produto, index) => (
          <CardComponent
            item={produto}
            onClick={props.onClick}
            key={`produto-${index}`}
          />
       ))
      }
    </div>
  )
};

const mapStateToProps = state => ({
  itens: produtosSelector.getProdutos(state),
  loading: produtosSelector.isLoading(state)
})

const mapDispatchToProps = (dispatch) => ({
  onClick: function(item) {
    dispatch(carrinhoCreators.addItem(item))
  },
  buscaProdutos: function() {
    dispatch(produtosCreators.buscaProdutos())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListaProdutos);