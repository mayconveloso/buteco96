import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html,body, #root{
    height: 100%;
  }

  html{
    font-size: 62.5%;
  }

  a {
    text-decoration: none;
    color: var(--cor1);

    &:hover{
      color: var(--cor6);
    }
  }

  *, button, input{
    border: 0;
    outline: 0;
    font-family: 'Roboto', sans-serif;
  }

  button{
    cursor: pointer;
  }

  :root {
    --primary: #36393f;
    --secondary: #2f3136;
    --tertiary: rgb(32,34,37);
    --quaternary: #292b2f;
    --quinary: #393d42;
    --senary: #828386;
    
    --white: #fff;
    --gray: #8a8c90;
    --chat-input: rgb(64,68,75);
    --symbol: #74777a;

    --notification: #f84a4b;
    --discord: #6e86d6;
    --mention-detail: #f9a839;
    --mention-message: #413f3f;

    --cor1: #c19e34;
    --cor2: #6c5a29;
    --cor3: #372a15;
    --cor4: #8d8c8c;
    --cor5: #060505;
    --cor6: #bc9936;

    --link: #5d80d6;

    --rocketseat: #6633cc;
  }

`;
