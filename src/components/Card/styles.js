import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border-radius: 8px;
  position: relative;

  background-color: var(--white);
  color: var(--cor5);
  box-shadow: rgba(0,0,0,0.3) 0px 0px 5px 0px;

  div.cont-img{
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 10px;

  }
  img{
    border-radius: 50% 50% 0 0;
    box-shadow: rgba(0,0,0,0.8) 0px 0px 5px 0px;
  }

  .hidden{
    display: none!important;
  }

  div.modal {
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;

    background-color: var(--cor5);

    overflow: hidden;

    border-radius: 8px;

    color: var(--cor1);

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    > h1{
      font-size: 2.3rem;
    }
  }


  div.group{
    padding: 20px 2px;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:first-child{
      box-shadow: 0 7px 3px -7px var(--cor1);
    }

    > span {
      font-size: 1.5rem;
      font-weight: bold;

      &:before{
        content: "R$ ";

      }
    }
  }

  div.group > button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45%;

    border-radius: 8px;
    background-color: var(--white);

    padding:5px;

    box-shadow: 0 0 5px 0 var(--cor1);
    color: var(--cor1);

    font-size: 1.9rem;
    font-weight: bold;
    text-transform: uppercase;

    transition: all 0.4s;

    &:hover{
      background-color: rgba(255,255,255,0.1);
    }
  }

  @media( max-width: 928px){
    margin-bottom: 10px;

    :last-child{
      margin-bottom: none;
    }
  }

  @media( max-width: 448px){
    img {
      width: 90%;
      height: 90%;
    }
  }

  @media( max-width: 351px){

    div.modal {
      > h1 {
        font-size: 2rem;
      }
    }

    div.group {
      > span {
        font-size: 1.4rem;
      }

      > button{
        font-size: 1.6rem;
      }
    }

  }
  
`;

export const Text = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    padding: 5px;
`;

export const Titles = styled.div`
    width: 60%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    > h1 {
      font-size: 1.9rem;
      font-weight: bold;
      text-transform: uppercase;
      margin-bottom: 5px;
    }

    > h3 {
      font-size: 1.5rem;
      font-weight: 400;
      margin-bottom: 5px;

      width: 200px;
    }

    @media( max-width: 566px){
      h1 {
        font-size: 1.7rem;
      }
      h3 {
        font-size: 1.3rem;
      }
    }

    @media( max-width: 351px){
      h1 {
        font-size: 1.6rem;
      }
      h3 {
        font-size: 1.2rem;
      }
    }

`;

export const Extras = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 30%;

    > span {
      font-size: 1.5rem;
      font-weight: 400;

      margin-bottom: 5px;
      font-weight: bold;
    }

    > button {
      width: 110%;

      padding: 5px;
      margin-bottom: 5px;

      font-size: 1.9rem;
      font-weight: bold;
      text-transform: uppercase;

      background-color: var(--cor5);
      color: var(--cor1);

      border-radius: 8px;

      cursor: pointer;

      transition: 0.4s;

      &:hover{
        box-shadow: rgba(0,0,0,0.3) 0px 0px 5px 0px;
        background-color: var(--cor6);
        color: var(--white);
      }
    }

    > span::before{
      content: "R$ "
    }

    @media( max-width: 566px){
      > span {
      font-size: 1.3rem;
      }
      button{
        font-size: 1.5rem;
      }
    }

    @media( max-width: 351px){
      > span {
      font-size: 1.1rem;
      }
      button{
        font-size: 1.3rem;
      }
    }
`;

