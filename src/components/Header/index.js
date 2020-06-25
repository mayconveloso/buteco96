import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Logo, Menu, Car, CartIcon } from './styles';
const LogoImg = require('./logo.png');

function Layout() {

  function finalizar() {
    var dadosPedido = localStorage.getItem(`dadosPedido`);
    dadosPedido = JSON.parse(dadosPedido);

    var precoTotal = localStorage.getItem(`precoTotal`);

    var newDadosPedido = [];

    dadosPedido.map((item, index) => {
      if (index === 0) {
        return;
      }
      const { nome, type, preco, preco2 } = JSON.parse(item)

      if (preco) {
        newDadosPedido.push([type, nome, `R$ ${preco.replace(",", ".")}`]);
      }
      if (preco2) {
        newDadosPedido.push([type, nome, `R$ ${preco2.replace(",", ".")}`]);
      }
    });

    var br = "%0A";
    var espa = "%20"
    var espaço = "------------------------------";
    precoTotal = precoTotal.replace(" ", `${espa}`);

    var mensagem = [];
    mensagem.push("Pedido:")
    newDadosPedido.forEach((item, index) => {
      console.log(item);
      mensagem.push(`nº:${espa}${index + 1}`)

      for (var i = 0; i < 3; i++) {
        mensagem.push(item[i].replace(" ", `${espa}`));
      }
      // mensagem.push(br);
      mensagem.push(espaço);
      // mensagem.push(br);
    })

    mensagem.push(`Total${espa}:${espa}${precoTotal}`)

    var msn = mensagem.toString()

    var busca = ",";
    // Aqui informamos para alterar todas as ocorrências de "e" 
    var strbusca = eval('/' + busca + '/g');
    // substitui todas as ocorrências de "," por "br" 
    msn = msn.replace(strbusca, `${br}`)
    console.log(msn);

    window.location.href = `https://api.whatsapp.com/send?l=pt-BR&text=${msn}&phone=11966501337`;

    return;

  }
  return (
    <Container>
      <div className="flex">
        <input id="menu-toggle" type="checkbox" />
        <label htmlFor="menu-toggle">
          <div className="menu">
            <div className="one"></div>
            <div className="two"></div>
            <div className="three"></div>
          </div>
        </label>

        <div className="div-1">
          <Logo to="/">
            <Link to="/">
              <img alt="Logomarca" src={LogoImg} />
            </Link>
          </Logo>
          <Menu>
            <nav>
              <ul>
                <li>
                  <Link to="">Contato</Link>
                </li>
                <li>
                  <Link to="">Cardápio</Link>
                </li>
                <li>
                  <Link to="">Promoções</Link>
                </li>
                <li>
                  <Link to="">Local de Entrega</Link>
                </li>
              </ul>
            </nav>
          </Menu>
        </div>
        <Car>
          <div className="itens">
            <span className="valor"> 0 </span>
          </div>
          <input id="car-toggle" type="checkbox" />
          <label className="label-car" data-content="0" htmlFor="car-toggle">
            <span className="car">Carrinho</span> <CartIcon />
          </label>
          <div className="nav">
            <nav>
              <ul>
                <li className="li-itens">
                  <label id="Batata">
                    Batatas
                  </label>
                  <label id="Porcoes">
                    Porcoes
                  </label>
                  <label id="Bebidas">
                    Bebidas
                  </label>
                </li>
                <li className="preco-finalizar">
                  <span>Total: <span className="total">0</span></span>
                  <button onClick={() => finalizar()}>Fazer pedido</button>
                </li>
              </ul>
            </nav>
          </div>
        </Car>
      </div>
    </Container>
  );
}

export default Layout;