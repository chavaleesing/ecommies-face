import React from 'react';
import Product from '../../components/product'
import Sidebar from '../../components/sidebar'


const Home = () => {
    const products = [
        { name: "item1", "price": 1, "rate": 4 }, 
        { name: "item2", "price": 2, "rate": 2.5 }, 
        { name: "item3", "price": 3, "rate": 0 }, 
        { name: "item4", "price": 4, "rate": 1 }, 
        { name: "item5", "price": 5, "rate": 3.5 }, 
        { name: "item6", "price": 6, "rate": 2.5 },
        { name: "item7", "price": 7, "rate": 5 }, 
        { name: "item8", "price": 8, "rate": 5 }, 
        { name: "item9", "price": 9, "rate": 4 }, 
        { name: "item10", "price": 10, "rate": 4.5 }, 
        { name: "item11", "price": 11, "rate": 4 }, 
        { name: "item12", "price": 12, "rate": 3 }
    ]
    return (
        <React.Fragment>
            <Sidebar />
            <div className="container">
                <div className="row mt-5 justify-content-center">
                    {products.map(product => <Product product={product}/>)}
                </div>
            </div>
        </React.Fragment>
    );
};


export default Home;
