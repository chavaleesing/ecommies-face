import React from 'react';
import './style.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <div>
            <nav className="navbar navbar-hd">
                <div className="container">
                    <div className="col-2">
                        <a className="navbar-brand" href="http://localhost:3000/home">Más FOODEST</a>
                    </div>
                    <div className="col-6">
                        <input className="form-control my-5" type="search" placeholder="Search .." aria-label="Search" />
                    </div>
                    <div className="col-2">
                        <button className="btn btn-primary w-100" type="submit">Search</button>
                    </div>
                    <div className="col-2">
                        <a className="nav-item" href="http://localhost:3000/login">Login/ Register</a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
