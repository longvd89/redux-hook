/**
 * Created by vulong on 28/10/2019.
 */
import React from 'react';
import {Link} from 'react-router-dom'

function Navigation () {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav mr-auto">
                    <li><Link to={'/'} className="nav-link"> Home </Link></li>
                    <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
                    <li><Link to={'/about'} className="nav-link">About</Link></li>
                </ul>
            </nav>
        </React.Fragment>

    )
}

export default Navigation;