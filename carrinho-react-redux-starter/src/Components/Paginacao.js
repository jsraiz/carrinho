import React from 'react';
export default ({ proxima, anterior, ultima, atual, onClick }) => {
  return (
    <nav>
      <ul className="pagination">
        {anterior && <li className="page-item">
          <button onClick={() => { onClick(anterior) }} className="page-link">Anterior</button>
        </li>}
        {[...new Array(ultima)].map((valor, index) => (
          <li className={`page-item${(index + 1) === atual ? ' disabled' : ''}`}>
            <button 
              onClick={() => onClick(index + 1)}
              className="page-link"
            >{index + 1}</button>
          </li>
        ))}
        {proxima && <li className="page-item">
          <button onClick={() => { onClick(proxima) }} className="page-link">Próximo</button>
        </li>}
        
      </ul>
    </nav>
  )
}