import styled from 'styled-components';

export const Container = styled.div`
  grid-area: BD;
  width: 100%;

  color: var(--white);

  > div.Title{
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    background-color: var(--cor6);

    > h1{
      color: var(--white);
      text-shadow: 2px 2px var(--cor3);

      font-size: 5.3rem;
    }
  }
`;

export const Cardapio = styled.div`

  width: 100%;
  height: auto;
  padding: 30px 0;
  margin: 0 auto ;

  background-color: var(--cor2);

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: space-between;

  div.card-contet{
    display: grid!important;
    justify-content: center!important;
    grid-template-columns: minmax(400px, max-content) repeat(auto-fill, 400px)!important;
    grid-template-rows: auto!important;
    gap: 10px!important;
    padding: 10px 5px!important;
    
  }

  label{
    font-size: 2.6rem;
    font-weight: bold;
    padding-left: 10px;
  }

  @media( max-width: 1045px){
    div.card-contet{
      grid-template-columns: minmax(350px, max-content) repeat(auto-fill, 350px)!important;
    }
  }

  @media( max-width: 928px){
    div.card-contet{
      display: flex!important;
      flex-direction: column!important;
      justify-content: center!important;
      align-items: center!important;
    }
  }

  @media( max-width: 534px){
    label{
      font-size: 2.2rem;
    }
  }
`;

export const Batatas = styled.section`
  height: 34%;
  width: 80%;

  margin: 0 auto;
  padding: 10px;
  padding-top: 20px;

  background-color: var(--cor1);
  color: var(--white);

  box-shadow: rgba(0,0,0,0.3) 0px 0px 5px 0px;

  border-radius: 8px 8px 0 0;

  @media(max-width: 600px){
    width: 90%;
  }
`;

export const Porcoes = styled.section`
  height: 34%;
  width: 80%;

  margin: 0 auto;
  padding: 10px;
  padding-top: 20px;

  box-shadow: rgba(0,0,0,0.3) 0px 0px 5px 0px;

  background-color: var(--cor1);
  color: var(--white);

  @media(max-width: 600px){
    width: 90%;
  }

`;

export const Bebidas = styled.section`
  height: 34%;
  width: 80%;

  margin: 0 auto;
  padding: 10px;
  padding-top: 20px;

  box-shadow: rgba(0,0,0,0.3) 0px 0px 5px 0px;

  background-color: var(--cor1);
  color: var(--white);

  border-radius: 0 0 8px 8px;

  @media(max-width: 600px){
    width: 90%;
  }

`;

