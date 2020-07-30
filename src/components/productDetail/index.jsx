import React from 'react';
import './style.scss';
import { Component } from 'react';
import axios from 'axios';

class ProductDetail extends Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render(props) {
        return (
            <div className="container" style={{ paddingTop: '10rem' }}>
                <div className="row">
                    <h1>{this.props.product.name} </h1>
                    <h5>{this.props.product.description}</h5>
                </div>
            </div>
        );
    }
}

export default ProductDetail;

