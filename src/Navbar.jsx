import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                {/* Clicking Schooling will take user to "/" which shows the school list */}
                <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                    <h2>Schooling</h2>
                </Link>
            </div>
            <div className='nav-links'>
                <Link to='/Addschools'>Add School</Link>
                <Link to='/Showschools'>Show Schools</Link>
            </div>
        </div>
    );
}

export default Navbar;
