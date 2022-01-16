import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <p className="logo">FIT STUDIO</p>
            <nav className="header-nav">
                <Link className="header-nav-link home" to="/">
                    Home
                </Link>
                <Link className="header-nav-link" to="/subscriptions-list">
                    Subscription List
                </Link>
                <Link className="header-nav-link" to="/about-me">
                    About me
                </Link>
            </nav>
        </div>
    );
}

export default Header;