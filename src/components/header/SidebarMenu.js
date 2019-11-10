import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import styled from "styled-components"
import { SidebarContext } from '../../App'


export const SidebarMenu = () => {
    const { toggleSidebar, isSidebarOpen, overlay=true } = useContext(SidebarContext)
    return <Sidebar isSidebarOpen={isSidebarOpen} overlay={overlay}>
         <p className='sidebar-link closebtn' onClick={toggleSidebar}>&times;</p>
        <Link className='sidebar-link' to={'/'}> Home </Link>
        <Link className='sidebar-link' to={'/contact'}>Contact</Link>
        <Link className='sidebar-link' to={'/about'}>About</Link>
    </Sidebar>
}



const Sidebar = styled.div`
  @media (min-width: 769px) {
    display: none;
  }

  ${props => props.overlay && `
    top: 0;
    left: 0;
    position: fixed;`
  }

${props => !props.overlay && `
    flex: 0 0 auto;
    position: relative;`
  }
  
    height: 100%;
    width: 0;
    z-index: 1;

    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 100px;
    width: ${props => props.isSidebarOpen ? '250px' : '0px'};
    -webkit-transition: width 1s ease-in-out;
    -moz-transition: width 1s ease-in-out;
    -o-transition: width 1s ease-in-out;
    transition: width 1s ease-in-out;


 
    .sidebar-link {
        padding: 8px 8px 8px 32px;
        text-decoration: none;
        font-size: 25px;
        color: #818181;
        display: block;
        transition: 0.3s;
    }

    .sidebar-link a:hover {
    color: #f1f1f1;
    }

    .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 60px;
  margin-left: 50px;
  cursor: pointer;
} 
`