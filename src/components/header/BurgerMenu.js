/**
 * Created by vulong on 05/11/2019.
 */
import React, { useContext } from 'react';
import styled from "styled-components";
import { SidebarContext } from '../../App'

const Burgermenu = () => {
    const { toggleSidebar, isSidebarOpen } = useContext(SidebarContext)
    return (
        <Wrapper onClick={toggleSidebar}>
            <div className={isSidebarOpen ? "open" : "" }>
                <span>&nbsp;</span>
                <span>&nbsp;</span>
                <span>&nbsp;</span>
            </div>
        </Wrapper>
    );
}

export default Burgermenu;

const Wrapper = styled.div`
  position: relative;
  padding-top: .7rem;
  cursor: pointer;
  display: block;

  & span {
    background: #fdcb6e;
    display: block;
    position: relative;
    width: 3.5rem;
    height: .4rem;
    margin-bottom: .7rem;
    transition: all ease-in-out 0.2s;
  }

  .open span:nth-child(2) {
      opacity: 0;
    }

  .open span:nth-child(3) {
    transform: rotate(45deg);
    top: -11px;
  }

  .open span:nth-child(1) {
    transform: rotate(-45deg);
    top: 11px;
  }

`;
