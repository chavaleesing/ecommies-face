import React from 'react';
import './style.scss';
import { Component } from 'react';
import axios from 'axios';
import tempPic from '../../assets/navbg.jpg'
import Ratings from '../rating'

class Product extends Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  onClick(e) {
    window.location = '/productdetail/' + e.target.name;
  }

  render(props) {
    return (
      <div className="card product-card m-4">
        <img className="card-img-top" src={tempPic} alt="Card image cap" />
        <div className="card-body container-card">
          <h5 className="card-title">{this.props.product.name}</h5>
          <h6> {this.props.product.price} Baht </h6>
          <Ratings rate={this.props.product.rate}/>
          <a href="#" onClick={this.onClick} name={this.props.name} className="btn btn-sm btn-info">Detail</a>
        </div>
      </div>
    );
  }
}

export default Product;

