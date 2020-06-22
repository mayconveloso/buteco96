import React from 'react';

import { Container, Text, Titles, Extras } from './styles';

function Card({ nome, descricao, preco, preco2, src }) {
  return (
    <Container>
      <div className="cont-img">
        <img alt="imagem do produto" src={src} />
      </div>
      <Text>
        <Titles>
          <h1>{nome}</h1>
          <h3>{descricao}</h3>
        </Titles>
        <Extras>
          <span>{preco}</span>
          {preco2 ? <span>{preco2}</span> : ""}
          <button>Pedir</button>
        </Extras>
      </Text>
    </Container>
  );
};

export default Card;