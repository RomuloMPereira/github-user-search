import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Navbar = () => {

    return (
        <nav className="main-nav">
            <Link to="/" className="nav-logo-text">
                <h5>Bootcamp DevSuperior</h5>
            </Link>
        </nav>
    );
}

export default Navbar;