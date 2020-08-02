import React from 'react';
import './style.scss';
import { Component } from 'react';
import axios from 'axios';
import tempPic from '../../assets/navbg.jpg'
import RatingSummary from '../ratingSummary'

class ProductDetail extends Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render(props) {
        return (
            <React.Fragment>
                <div className="container container-detail">
                    <div className="container">
                        <img className="card-img" src={tempPic} />
                        <div className="img-gal">
                            <img src={tempPic} />
                            <img src={tempPic} />
                            <img src={tempPic} />
                            <img src={tempPic} />
                        </div>
                    </div>
                    <div className="container">
                        <h1>{this.props.product.name} </h1>
                        <h5>{this.props.product.description}</h5>
                    </div>
                </div>
                <div className="container container-detail">
                    <div className="container">
                        <h1>User feedback</h1>
                    </div>
                    <div className="container">
                        <RatingSummary/>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ProductDetail;

