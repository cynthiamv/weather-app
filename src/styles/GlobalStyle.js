import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle` 
  * {
    box-sizing: border-box;
    margin: 0;
    overflow-x: hidden
  }

  body {
    font-family: 'Raleway', sans-serif;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }
`

export default GlobalStyle;