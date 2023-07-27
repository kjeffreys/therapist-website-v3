import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Hamburger from './Hamburger';

const NavBar: React.FC = () =>
{
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () =>
    {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <>
            <nav className={`navbar ${isNavOpen ? 'open' : ''}`}>
                <Link to="/" className="logo">
                    <h1 className="logo-two-line">Joanna Jeffreys<br /><span className="lmhc">LMHC</span></h1>
                </Link>
                <div className="nav-toggle" onClick={toggleNav}>
                    {/* add {`nav-toggle ? 'open' : ''} logic for ham <-> X */}
                    <span className="nav-toggle" onClick={toggleNav}>
                        <Hamburger />
                    </span>
                </div>
                <ul className={`nav-links ${isNavOpen ? 'open' : ''}`}>
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
            <div className={`overlay ${isNavOpen ? 'active' : ''}`} onClick={toggleNav}></div>
        </>

    );
};

export default NavBar;
