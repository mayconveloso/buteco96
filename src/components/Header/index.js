import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Logo, Menu, Car, CartIcon } from './styles';
const LogoImg = require('./logo.png');

function Layout() {
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
            <span> <span className="item">0</span> itens </span>
            <span className="valor"> 0,00 </span>
          </div>
          <Link to=""> <span className="car">Carrinho</span> <CartIcon /> </Link>
        </Car>
      </div>
    </Container>
  );
}

export default Layout;