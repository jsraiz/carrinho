import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Creators as carrinhoCreators } from '../ducks/carrinho';
import { 
  Selectors as produtosSelector,
  Creators as produtosCreators
} from '../ducks/produtos';

import CardComponent from '../Components/Card';
import PaginacaoComponent from '../Components/Paginacao';
import NavComponent from '../Components/Nav';

const ListaProdutos = (props) => {
  //
  useEffect(function() {
    if (props.itens.length <= 0 && !props.loading) {
      props.buscaProdutos()
    }
  })
  //

  return (
    <>
      <NavComponent />
      <hr />
      <PaginacaoComponent {...props.paginacao} onClick={props.buscaProdutos} />
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
    </>
  )
};

const mapStateToProps = state => ({
  itens: produtosSelector.getProdutos(state),
  loading: produtosSelector.isLoading(state),
  paginacao: produtosSelector.getPaginacao(state)
})

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: function(item) {
      dispatch(carrinhoCreators.addItem(item))
    },
    ...bindActionCreators(produtosCreators, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListaProdutos);