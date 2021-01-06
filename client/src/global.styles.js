import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #22E470;
    --color-primary-dark: #43BA73;
    --color-primary-light: #EBFDF2;

    --color-grey: #909090;
    --color-grey-light: #EAEAEA;

    --color-black: #4B4B4B;
  }

  @font-face {
    font-family: Roboto;
    src: local('Roboto'), url(./assets/fonts/Roboto-Regular) format('ttf');
  }

  * {
    margin: 0;
    padding: 0;
  }
  
  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }
  
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
  
  body {
    min-height: 1vh;
    font-family: Roboto, sans-serif;
    font-weight: 800;
    color: var(--color-black);
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
