import React from 'react';
// import './style.css';
// import { Component } from 'react';
import Product from './../../components/product'

const Home = () => {
    const products = [
        {name: "item1"},{name: "item2"},{name: "item3"},{name: "item4"},{name: "item5"},{name: "item6"}
    ]
    return (
        <React.Fragment>
            <div className="container" style={{paddingTop: '6rem'}} >
                <div className="row">
                    { products.map(product => <Product name={product.name}/>) }
                </div>
            </div>
        </React.Fragment>
    );
};


export default Home;