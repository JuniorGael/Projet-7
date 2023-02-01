import React from 'react';
import '../styles/components/Logo.css'
import logo from "../assets/images/logo.png";
import { NavLink } from 'react-router-dom';

const Logo = () => {
    return (
        <div className='logo'>
            <NavLink to="/">
                <img src={logo} alt="logo kasa" />
            </NavLink>
        </div>
    );
};

export default Logo;