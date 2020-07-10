import React from 'react';
import Product from '../../components/product'


const Home = () => {
    const products = [
        {name: "item1"},{name: "item2"},{name: "item3"},{name: "item4"},{name: "item5"},{name: "item6"},
        {name: "item7"},{name: "item8"},{name: "item9"},{name: "item10"},{name: "item11"},{name: "item12"}
    ]
    return (
        <React.Fragment>
            <div className="container" style={{paddingTop: '8rem'}} >
                <div className="row">
                    { products.map(product => <Product name={product.name}/>) }
                </div>
            </div>
        </React.Fragment>
    );
};


export default Home;
