import styled from 'styled-components';
import { Cart } from 'styled-icons/boxicons-solid';

export const Container = styled.div`
  grid-area: HD;

  position: fixed;
  width: 100%;

  background-color: var(--cor5);
  color: var(--cor1);
  box-shadow: rgba(0,0,0,0.6) 0px 1px 3px 0px;

  z-index: 100;

  .hidden{
    display: none!important;
  }

  input[type="checkbox"]{
    display: none;
  }
  
  input#menu-toggle:checked ~ div > nav {
    transform: translateX(275px);
  } 

  input#menu-toggle:checked ~ label > div.menu > div.one{
    transform: rotate(45deg) translate(5px, 7px);
  }
  input#menu-toggle:checked ~ label > div.menu > div.two{
    opacity: 0;
  }
  input#menu-toggle:checked ~ label > div.menu > div.three{
    transform: rotate(-45deg) translate(5px, -8px);
  }

  label{
    z-index:2;
  }

  div.menu {
    display:none;
    cursor: pointer;
  }

  .one,
  .two,
  .three{
    width: 37px;
    height: 4px;
    
    margin: 5px 0px;

    border-radius: 8px;

    background :var(--cor1);
    transition-duration: 0.5s;

  }

  li{
    font-weight: bold;
    width: 100%;
  }

  span{
    padding: 10px;
    font-size: 1.9rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  img{
    width: 125px;
    height: 30px;
  }
  div.flex {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  div.div-1 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    max-height: 100px;
    width: 80%;
  }

  @media( max-width: 824px){

    div.menu {
      display:block;
      cursor: pointer;
    }

    div.div-1 {
      width: 100px;
    }

    nav{
      width: 50%;
      left: -100%;
      top: 100px;
      height: 100vh;
    }

    input#menu-toggle:checked ~ div.div-1 > div > nav {
      transform: translateX(100%);
    }

  }


`;

export const Logo = styled.div`
  > a > img {
    width: 100px;
    height: 80px;
    color: var(--white);
  }
`;

export const Menu = styled.div`
  margin-left: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100px;
  width: 100%;

  nav{
    width: 100%;
    height: 100%;
  }
  
  ul {
    display: flex;
    list-style: none;
    height: 100%;
  }

  ul > li > a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    padding: 0 10px;

    font-size: 1.6rem;
    font-weight: bold;

    transition: all 0.4s;

    &:hover{
      background-color: rgba(255,255,255,0.1);
    }
  }

  @media( max-width: 1129px){
    width: 100%;
  }

  @media( max-width: 824px){

    nav {
      width: 50%;
      height: 100%;
      left: -50%;
      top: 100px;
      position: absolute;
      transition: all 0.5s;
    }

    ul{
      position: absolute;
      top: -3px;

      list-style: none;

      width: 100%;
      height: 100vh;

      background-color: var(--cor5);
      opacity: 0.98;

      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: start;
    }

    ul > li > a {

      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      height: 100%;

      padding: 20px;

      box-shadow: 0 2px 5px -4px var(--cor1);

      font-size: 2rem;
      font-weight: bold;

      transition: all 0.4s;

      &:hover{
        background-color: rgba(255,255,255,0.1);
      }
    }
  }

`;

export const Car = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;

  font-size: 1.6rem;
  font-weight: bold;

  div.itens{
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    margin-right: 10px;

  }

  input[type="checkbox"]{
    display: none;
  }
  
  input#car-toggle:checked ~ div > nav {
    transform: translateX(-100%);
  }

  nav {
    width: 50%;
    height: 100%;
    left: 100%;
    top: 100px;
    position: absolute;
    transition: all 0.5s;
  }

  ul {
    position: absolute;
    top:-3px;
    padding-top: 10px;
    padding: 20px 5px 0;

    opacity: 0.98;

    overflow-y: scroll;

    list-style: none;

    width: 100%;
    height: calc(100vh - 97px);

    background-color: var(--cor5);

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
  }

  ul > li {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
  }

  ul > li.preco-finalizar {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    margin-top: 30px;

    height: 30px;

    
  }

  li.li-itens{
    padding: 0 5px;

    > label {
      font-size: 2.4rem;
      font-weight: bold;
      padding-bottom: 10px;
      &:last-child{
        padding: none;
      }
    }
  }

  ul > li > button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 50%;

    border-radius: 8px;
    background-color: var(--white);

    padding:5px;

    box-shadow: 0 0 5px 0 var(--cor1);
    color: var(--cor1);

    font-size: 1.6rem;
    font-weight: bold;

    transition: all 0.4s;

    &:hover{
      background-color: rgba(255,255,255,0.1);
    }
  }
  
  span + span {
    margin-left: 2px;
  }

  span.valor{
    padding: 2px;
    font-size: 1.6rem;

    border-radius: 4px;
    background-color: red;
    color: var(--white);
  }

  span.valor::before, span.total::before, span.RS::before{
    content: "R$ ";
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    padding: 0 10px;

    transition: all 0.4s;
  }

  label{
    display: block;
    width: 100%;
  }

  label.label-car{
    display: block;
    width: 100%;
    position: relative;

    cursor: pointer;
    transition: 3s;

    &:after{
      width: 15px;
      height: 15px;

      font-size: 0.9rem;

      background-color: red;
      color: var(--white);
      border-radius: 8px;

      display: flex;
      justify-content: center;
      align-items: center;

      content: attr(data-content);

      position: absolute;

      top: -3px;
      right: -3px;

      z-index: 4;

      transition: 3s;
    }

  }

  div.pedido{
    display: flex;
    justify-content: space-between;

    margin: 2px 2px 10px;
    padding: 8px 6px;
    position: relative;

    background-color: var(--white);
    box-shadow: 0 0px 5px 0px var(--cor1);
    border-radius: 8px;

    cursor: pointer;

    .texto {
      flex-shrink: 1;
      width: 60%;
      padding-right: 8px;

      > h1{
        font-size: 1.9rem;
      }
      > h3{
        font-size: 1.5rem;
        font-weight: 400;
        text-transform: lowercase;
      }

      &::after{
        content: "X";
        font-size: 1rem;
        background-color: red;
        color: white;
        font-weight: bold;
        width: 15px;
        height: 15px;

        border-radius: 3px;

        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        top: 8px;
        right: 5px;
      }

    }

    .valor{
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      width: 40%;

      font-size: 1rem;

      > span {
        margin:0;
        padding: 0;
      }
    }
  }

    
  @media( max-width: 1032px){
    div.itens{
      display: none;
    }
  }

  @media( max-width: 600px){
    li.li-itens > label {
      font-size: 2rem;
    }

    div.texto {
      > h1 {
        font-size: 1.8rem;
      }

      > h3 {
        font-size: 1.3rem;
      }
    }

    span.RS{
      font-size: 1.6rem;
    }

  }
  
  @media(max-width: 554px){

    ul > li.preco-finalizar {
      flex-direction: column;
      align-items: flex-start;

      > span {

        padding: 5px;
        font-size: 1.5rem;

        > span.total{
          font-size: 1.5rem;
        }
      }

      > button {
        width: 100%;
        font-size: 1.5rem;
      }
    }
  }

  @media( max-width: 534px){
    li.li-itens > label {
      font-size: 1.5rem!important;
    }

    div.texto {
      > h1 {
        font-size: 1.3rem!important;
      }

      > h3 {
        font-size: 1rem!important;
      }
    }

    span.RS{
      font-size: 1.3rem!important;
    }

  }

  @media( max-width: 448px){
    .texto::after{
      font-size: 0.8rem!important;
      width: 12px!important;
      height: 12px!important;

      border-radius: 2px!important;

      top: 4px!important;
    }
  }

  @media( max-width: 420px){
    li.li-itens > label {
      font-size: 1.2rem!important;
    }

    div.texto {
      > h1 {
        font-size: 1rem!important;
      }

      > h3 {
        font-size: 0.8rem!important;
      }
    }

    span.RS{
      font-size: 1rem!important;
    }

    > span {
    font-size: 1.2rem;

    > span.total{
      font-size: 1.2rem;
    }
    }

    > button {
    font-size: 1.2rem;
}
  }


  @media( max-width: 340px){
    li.li-itens > label {
      font-size: 1.1rem!important;
    }

    div.texto {
      > h1 {
        font-size: 0.9rem!important;
      }

      > h3 {
        font-size: 0.7rem!important;
      }
    }

    span.RS{
      font-size: 0.9rem!important;
    }

  }
    
`;

export const CartIcon = styled(Cart)`
  width: 24px;
  height: 24px;
`;
