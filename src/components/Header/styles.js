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


  input[type="checkbox"]{
    display: none;
  }
  
  input[type="checkbox"]:checked ~ div.container > nav {
    transform: translateX(275px);
  } 

  input[type="checkbox"]:checked ~ label > div.menu > div.one{
    transform: rotate(45deg) translate(5px, 7px);
  }
  input[type="checkbox"]:checked ~ label > div.menu > div.two{
    opacity: 0;
  }
  input[type="checkbox"]:checked ~ label > div.menu > div.three{
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
  }
  img{
    width: 125px;
    height: 30px;
  }

  @media( max-width: 824px){
    div.menu {
      display:block;
      cursor: pointer;
    }
  }

  @media( max-width: 824px){
    nav{
      width: 50%;
      left: -100%;
      top: 100px;
      height: 100vh;
    }

    input[type="checkbox"]:checked ~ div.div-1 > div > nav {
      transform: translateX(100%);
    }

  }

  div.flex {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  div.div-1 {
    display: flex;
    align-items: center;
    max-height: 100px;
  }

  @media( max-width: 824px){
    div.div-1 {
      width: 100px;
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
  justify-content: center;
  align-items: center;
  height: 100px;
  

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
    text-transform: uppercase;

    transition: all 0.4s;

    &:hover{
      background-color: rgba(255,255,255,0.1);
    }
  }

  @media( max-width: 824px){

    nav {
      background-color: var(--cor5);
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

    padding: 20px 10px;

    box-shadow: 0 2px 5px -4px var(--cor1);

    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;

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
  text-transform: uppercase;

  span + span {
    margin-left: 2px;
  }

  span.item, span.valor{
    padding: 2px;
    background-color: red;
    border-radius: 4px;
    color: var(--white);
  }

  span.valor::before{
    content: "R$";
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    padding: 0 10px;

    transition: all 0.4s;

    @media( max-width: 1129px){
     span.car{
       display: none;
     }
    }
  }

  @media( max-width: 1032px){
    div.itens{
      display: none;
    }
  }
  
`;

export const CartIcon = styled(Cart)`
  width: 24px;
  height: 24px;
`;
