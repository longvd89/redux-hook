/**
 * Created by vulong on 05/11/2019.
 */
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');;

  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }

  html {
    font-size: 100%;
    height: 100%; 
  }

  body {
    box-sizing: border-box;
    height: 100%; 
    font-family: 'Montserrat', sans-serif;
    background: ${props => props.theme.bgColor};
  }
`;

export default GlobalStyles;