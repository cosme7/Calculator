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
    --bg-lightgrey: #D4D4D2;
    --bg-black: #000000;
    --bg-grey: #505050;
    --bg-orange: #FF9500;
    /*  */
  }
`;