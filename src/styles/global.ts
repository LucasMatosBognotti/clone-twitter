import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    color: var(--white);
  }

  #root, html, body {
    max-height: 100vh;
    max-width: 100vw;

    width: 100%;
    height: 100%;

    -webkit-font-smoothing: antialiazed;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  html {
    background: var(--primary);
  }

  :root {
    --primary: #000;
    --secundary: #15181c;
    --search: #202317;
    --white: #D9D9D9;
    --gray: #7a7a7a;
    --outline: #2f3336;
    --retweet: #00c06b;
    --like: #e8265e;
    --twitter: #33a1f2;
    --twitter-dark-hover: #011017;
    --twitter-light-hover: #2c8ed6;
  }
`;