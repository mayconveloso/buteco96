import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Logo, Menu, Car, CartIcon } from './styles';
const LogoImg = require('./logo.png');

function Layout() {

  function finalizar(){
    console.log("finalizar")
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