import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return(
        <div className='navBar'>
            <ul>
            <Link to='/'>
                <li>Home</li>
            </Link>
            <Link to='/play'>
                <li>Play</li>
            </Link>
            <Link to='/rules'>
                <li>Rules</li>
            </Link>
            <Link to='/contact'>
                <li>Contact</li>
            </Link>
            </ul>
        </div>
    )
}

export default Navbar;