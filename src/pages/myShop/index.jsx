import React from 'react';
import Product from '../../components/product'
import Sidebar from '../../components/sidebar'
import './style.scss';
import AddCircleIcon from '@material-ui/icons/AddCircle';


const MyShop = () => {
    const products = [
        { name: "item1", "price": 1, "rate": 4 }, 
        { name: "item2", "price": 2, "rate": 2.5 }, 
        { name: "item3", "price": 3, "rate": 0 }
    ]
    return (
        <React.Fragment>
            <Sidebar />
            <div className="container">
                <div className="myshop-header">
                    <h3 >My Items</h3>
                    <AddCircleIcon className="add-btn"/>
                </div>
                {/* <AddCircleIcon className="add-btn"/> */}
                <div className="row mt-5 justify-content-center">
                    {products.map(product => <Product product={product}/>)}
                </div>
            </div>
        </React.Fragment>
    );
};


export default MyShop;
