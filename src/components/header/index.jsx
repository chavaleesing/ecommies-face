import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <NavLink className="navbar-brand m-4" to="/">ECOMMIES</NavLink>
                <input class="form-control mr-sm-2" type="search" placeholder="Search ..." aria-label="Search" />
                <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                <NavLink className="navbar-brand ml-4" to="/login">
                    Login <i class="fa fa-user-circle-o" style={{ color: "white" }} aria-hidden="true"></i>
                </NavLink>
            </div>
        </nav>
    );
};

export default Header;
