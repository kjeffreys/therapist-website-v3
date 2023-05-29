import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Create a new CSS file for Header component styles

const Header: React.FC = () =>
{
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () =>
    {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <header>
            <nav className={`navbar ${isNavOpen ? 'open' : ''}`}>
                <Link to="/" className="logo">
                    Joanna Jeffreys, LHMC
                </Link>
                <div className="nav-toggle" onClick={toggleNav}>
                    <span className={`toggle-icon ${isNavOpen ? 'open' : ''}`}></span>
                </div>
                <ul className="nav-links">
                    <li>
                        <Link to="/" onClick={toggleNav}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/resources" onClick={toggleNav}>
                            Resources
                        </Link>
                    </li>
                    <li>
                        <Link to="/services" onClick={toggleNav}>
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={toggleNav}>
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
