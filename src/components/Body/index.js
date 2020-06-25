import React from 'react';
import { Container, Cardapio, Batatas, Porcoes, Bebidas } from './styles';
import Carousel from '../Carousel';
import Card from '../Card';

function Footer() {
  return (
    <Container style={{
      backgroundImage: `url(${require("./img/background.jpg")})`,
      backgroundPosition: 'left top',
      backgroundRepeat: 'repeat',
      backgroundColor: 'white',
      }} >
      <div className="Title"><h1>Buteco 96</h1></div>
      <div id="destaques"></div>
      <Carousel />
      <Cardapio id="cardapio">
        <Batatas>
          <label>Batata Recheada</label>
          <div className="card-contet">
            <Card
              type="Batata Recheada"
              nome="Strogonoff de Frango"
              src="https://picsum.photos/300/200"
              descricao="batata, frango, batata palha"
              preco="23,99"
            />
            <Card
              type="Batata Recheada"
              nome="Carne Seca"
              src="https://picsum.photos/300/200"
              descricao="batata, carne seca, queijo ou catupiry"
              preco="25,99"
            />
            <Card
              type="Batata Recheada"
              nome="Brócolis"
              src="https://picsum.photos/300/200"
              descricao="batata, brócolis, queijo mussarela, bacon"
              preco="23,99"
            />
          </div>
        </Batatas>
        <Porcoes>
          <label>Porções</label>
          <div className="card-contet">
            <Card
              type="Porções"
              nome="Batata frita"
              src="https://picsum.photos/300/200"
              descricao="catupiry, queijo mussarela, cheddar, katchup, bacon"
              preco="14,99 - P"
              preco2="29,99 - G"
            />
            <Card
              type="Porções"
              nome="Calabresa com cebola"
              src="https://picsum.photos/300/200"
              preco="7,99 - P"
              preco2="14,99 - G"
            />
            <Card
              type="Porções"
              nome="Mandioca com Manteiga"
              src="https://picsum.photos/300/200"
              preco="5,99 - P"
              preco2="11,99 - G"
            />
          </div>
        </Porcoes>
        <Bebidas>
          <label>Bebidas</label>
          <div className="card-contet">
            <Card
              type="Bebidas"
              nome="Coca-Cola"
              src="https://picsum.photos/300/200"
              descricao="lata - 350ml"
              preco="4,99"
            />
            <Card
              type="Bebidas"
              nome="Guaraná Antática"
              src="https://picsum.photos/300/200"
              descricao="lata - 350ml"
              preco="4,99"
            />
            <Card
              type="Bebidas"
              nome="Pepsi"
              src="https://picsum.photos/300/200"
              descricao="garrafa - 2l"
              preco="9,99"
            />
            <Card
              type="Bebidas"
              nome="Cerverja skol"
              src="https://picsum.photos/300/200"
              descricao="lata - 350ml"
              preco="4,99"
            />
          </div>
        </Bebidas>
      </Cardapio>
    </Container>
  );
}

export default Footer;