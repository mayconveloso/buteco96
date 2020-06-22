import styled from 'styled-components';
import { FacebookCircle } from 'styled-icons/boxicons-logos';
import { InstagramAlt } from 'styled-icons/boxicons-logos';
import { Whatsapp } from 'styled-icons/remix-fill';

export const Container = styled.div`
  grid-area: FT;

  background-color: var(--cor5);
  color: var(--cor1);

  height: 300px;

  > div.flex {
    width: 80%;
    height: 100%;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;

    strong{
      font-size: 2rem;
      font-weight: 500;
    }
    span{
      margin-bottom: 10px;
      font-size: 1.9rem;
      font-weight: 300;

      &:last-child{
        margin-bottom: 0;
      }
    }
  }

  @media (max-width: 587px){
    height: 400px;

    div.flex {
      flex-direction: column;
      padding: 20px 0;
    }
  }
`;

export const Endereco = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 587px){
    width: 100%;
    height: 100%;
    justify-content:center;
    align-items: center;

    strong{
      font-size: 1.5rem;
    }
    span{
      font-size: 1.3rem;
    }
  }

  @media (max-width: 339px){
    justify-content:center;
    align-items: flex-start;
  }
`;

export const Contato = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RedesSocias = styled.div`
  span{
    cursor: pointer;
  }
  span:hover{
    color: var(--cor2);
  }

  @media (max-width: 587px){
    width: 100%;

    padding: 10px;

    display: flex;
    justify-content: space-around;
    align-items: flex-start;
  }
`;

export const FaceIcon = styled(FacebookCircle)`
  width: 48px;
  height: 48px;
`;

export const InstaIcon = styled(InstagramAlt)`
  width: 53px;
  height: 53px;
`;

export const WhatsIcon = styled(Whatsapp)`
  width: 48px;
  height: 48px;
`;
