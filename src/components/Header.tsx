import React from 'react';
import NavBar from './NavBar';
import './Header.css'; // Create a new CSS file for Header component styles

const Header: React.FC = () =>
{
    return (
        <header>
            <NavBar />
        </header>
    );
};

export default Header;
