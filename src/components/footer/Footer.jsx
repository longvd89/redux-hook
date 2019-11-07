
import React from 'react';
import {Link} from 'react-router-dom'
import styled from "styled-components";

const Footer = (props) => {
    return(
        <>
        <FootContainer>
            <p>Some footer nonsense!</p>
        </FootContainer>
        </>
    )
}

export default Footer;

const FootContainer = styled.div`
//   max-width: 120rem;
//   display: flex;
//       margin: auto;
  padding: 0 2rem;;
//   justify-content: space-between;
  height: 5rem;
  flex-shrink: 0;
  text-align: center;
  background-color: tomato;
  color: white;
`;