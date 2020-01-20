import React from 'react';

import { connect } from 'react-redux';

import { addItem } from '../actions';
import CardComponent from '../Components/Card';

const ListaProdutos = (props) => (
  <div className="row">
    {props.itens.map((produto, index) => (
      <CardComponent
        item={produto}
        onClick={props.onClick}
        key={`produto-${index}`}
      />
    ))}
  </div>
);

const mapStateToProps = state => ({
  itens: state.produtos
})

const mapDispatchToProps = (dispatch) => ({
  onClick: function(item) {
    dispatch(addItem(item))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListaProdutos);