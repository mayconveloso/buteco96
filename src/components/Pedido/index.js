import React from 'react';

// import { Container } from './styles';

function Pedido({ nome, descricao, preco, preco2 }) {
  return (
    <div class="pedido" >
      <div class="texto">
        <h1>{nome}</h1>
        {descricao ? <h3>{descricao}</h3> : ""}
      </div>
      <div class="valor">
        {preco ? <span class="RS">{preco}</span> : ""}
        {preco2 ? <span class="RS">{preco2}</span> : ""}
      </div>
    </div>
  );
}

export default Pedido;