import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root{
    --fw-900: 900;
    --fw-700: 700;
    --fw-500: 500;
    --fw-400: 400;
    /*  */
    --ff-primary: 'Roboto', sans-serif;
    /*  */
    --clr-white: #FFFFFF;
    --clr-black: #1C1C1C;
    --clr-orange: #FF9500;
    /*  */
    --bg-lightgrey: #D4D4D2;
    --bg-grey: #505050;
    --bg-black: #1C1C1C;
    --bg-dark: #000000;
    --bg-orange: #FF9500;
    --bg-white: whitesmoke;
    /*  */
  }

  body{
    background: radial-gradient(#0d1321ff, #1d2d44ff, #3e5c76ff, #748cabff, #f0ebd8ff);;
  }
`;