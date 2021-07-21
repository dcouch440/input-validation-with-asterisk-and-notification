import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
	* {
    box-sizing: border-box;
	}
	html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0
	}
  #root {
    height: inherit;
    width: inherit;
  }
  h3 {
    font-family: sans-serif;
  }
  h1 {
    font-family: sans-serif;
  }
  .global-container {
    padding: 14px;
    height: 100vh;
    width: 100vw;
  }
`;

export default GlobalStyles;