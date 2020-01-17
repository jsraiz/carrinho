import React from 'react';
export default function ListaProdutosComponent(props) {
  return (
    <div className="row loja">
      {props.children}
    </div>
  )
}