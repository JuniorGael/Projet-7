import React from 'react';
import '../styles/components/Header.css'
import Logo from './Logo';
import Navigation from './Navigation';

const Header = () => {
    return (
        <header className='header'>
            <Logo />
            <Navigation />
        </header>
    );
};

export default Header;