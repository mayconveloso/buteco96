import styled from 'styled-components';
import { KeyboardArrowLeft } from 'styled-icons/material-rounded';
import { KeyboardArrowRight } from 'styled-icons/material-rounded';

export const Slider = styled.div`
  width: 80%;
  margin: 20px auto 30px;
  height: 600px;

  border-radius: 10px;

  display: flex;
  align-items: center;
  position: relative;

  overflow: hidden;
  background: var(--secondary);

  p {
    background-color: var(--cor1);
    position: absolute;
    top: 0;
    right: 10%;

    color: var(--white);
    padding: 0.8rem;
    margin: 10px 0 0 0;

    border-radius: 10px;

    font-size: 2rem;
    text-transform: uppercase;
  }

  #goLeft{
    left: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 10%;
    height: 100%;
    background-color: transparent;
  }
  #goRight{
    right: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 10%;
    height: 100%;
    background-color: transparent;
  }

  @media( max-width: 1000px){
    p{
      padding: 0.5rem;
      font-size: 1.6rem;
    }
  }

  @media( max-width: 566px){
    height: 500px;

    p{
      padding: 0.3rem;
      font-size: 1.3rem;
    }

  }
`;

export const Slide = styled.div`
  min-width: 100%;
  height: 100%;
  transition: all 0.5s;
  overflow: hidden;
`;

export const Button = styled.button`
  cursor: pointer;
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;

  > svg{
    transition: 0.5s;
  }

  &:hover{
    background: rgba(0,0,0,0.35)!important;
    > svg{
      color: var(--gray);
    }
  }
`;

export const Img = styled.img`
  width: 100%;
  position:absolute;
  top: -700px;
  height: auto;

  @media( max-width: 1300px){
    top: -600px;
  }

  @media( max-width: 1129px){
    top: -500px;
  }
  
  @media( max-width: 1032px){
    top: -400px;
  }

  @media( max-width: 938px){
    top: -300px;
  }

  @media( max-width: 844px){
    top: -200px;
  }

  @media( max-width: 754px){
    top: -100px;
  }

  @media( max-width: 666px){
    top: 0;
  }

  @media( max-width: 566px){
    height: 100%;
  }
  
`;

export const LeftIcon = styled(KeyboardArrowLeft)`
  width: 39px;
  height: 39px;

  color: var(--white);  
`;

export const RightIcon = styled(KeyboardArrowRight)`
  width: 39px;
  height: 39px;

  color: var(--white);
`;