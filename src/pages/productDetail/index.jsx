import React from 'react';
import ProductDetail from '../../components/productDetail'
import Sidebar from '../../components/sidebar'


const Detail = () => {
    const product = { 
        name: "item1", 
        price: 1, 
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fuga facilis possimus est deleniti, aliquid quam impedit. Voluptatum nesciunt, et enim facere est dicta repudiandae ipsum excepturi delectus, quasi deleniti." 
    }
    
    return (
        <React.Fragment>
            <Sidebar />
            <ProductDetail product={product}/>
        </React.Fragment>
    );
};


export default Detail;