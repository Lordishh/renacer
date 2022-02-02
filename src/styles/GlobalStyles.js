import { createGlobalStyle } from 'styled-components';

// Typography
import '@fontsource/poppins';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';

const GlobalStyles = createGlobalStyle`
  :root {
    /* colors */
    --darkBlue_1: #5FEBD8;
    --darkBlue_2: #50B7A9;
    --darkBlue_3: #112623;
    --darkBlue_4: #0A1412;
    --mediumSlateBlue: #6C62E2;
    --lightBlue_1: #F3F1FE;
    --white: #FFFFFF;
    --black: #000000
  }
  html {
    font-size: 10px;
  }
  body {
    background-color: var(---lightBlue_1);
    font-family: 'Poppins', sans-serif;
  }
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }
  ul, li {
    list-style: none;
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyles;
