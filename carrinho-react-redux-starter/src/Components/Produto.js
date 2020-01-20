import React from 'react';
import { connect } from 'react-redux';
import { addItem } from './../actions';

function ProdutoComponent(props) {
  return (
    <div className="col-sm-4 mb-3">
      <div className="card loja__item">
        <img className="card-img-top" src={props.item.imagem} />
        <div className="card-body">
          <h5 className="card-title">{props.item.nome}</h5>
          <small>R${props.item.preco}</small>
          <p className="card-text">{props.item.descricao}</p>
          <button className="btn btn-primary" onClick={() => props.onClick(props.item)}>Adicionar</button>
        </div>
      </div>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: function(item) {
      dispatch(addItem(item))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(ProdutoComponent)