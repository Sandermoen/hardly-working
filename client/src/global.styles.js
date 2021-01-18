import { createGlobalStyle } from 'styled-components';

import RobotoRegular from './assets/fonts/Roboto-Regular.ttf';
import RobotoMedium from './assets/fonts/Roboto-Medium.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Roboto;
    font-style: normal;
    font-weight: 400;
    src: url(${RobotoRegular}) format('truetype');
  }

  @font-face {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    src: url(${RobotoMedium}) format('truetype');
  }

  :root {
    --color-primary: #22E470;
    --color-primary-dark: #43BA73;
    --color-primary-light: #EBFDF2;

    --color-white: #ffffff;

    --color-grey: #909090;
    --color-grey-light: #EAEAEA;

    --color-black: #4B4B4B;

    --gutter-width: 2rem;
    --mobile-nav-height: 6rem;
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
    overflow-x: hidden;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
