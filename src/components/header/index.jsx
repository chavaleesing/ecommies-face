import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <NavLink className="navbar-brand" to="/">Ecommies</NavLink>
                <NavLink className="navbar-brand" to="/login">Login/Register</NavLink>
            </div>
        </nav>
    );
};

export default Header;
