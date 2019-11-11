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
    min-height: 100%;
  }

  body {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    background: ${props => props.theme.bgColor};
    height:100vh
  }
`;

export default GlobalStyles;