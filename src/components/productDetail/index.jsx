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
                    <h2>Product Detail............</h2>
                </div>
            </div>
        );
    }
}

export default ProductDetail;

