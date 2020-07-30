import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Sidebar = () => {

    return (
        <nav class="nav nav-hm">
            <div className="container">
                <div className="row row-hm">
                    <a class="nav-link m-3" href="#">All</a>
                    <a class="nav-link m-3" href="#">Cookie</a>
                    <a class="nav-link m-3" href="#">Brownie</a>
                    <a class="nav-link m-3" href="#">SoftCake</a>
                    <a class="nav-link m-3" href="#">Cupcake</a>
                    <a class="nav-link m-3" href="#">PanCake</a>
                </div>
            </div>
        </nav>
    );
};

export default Sidebar;
