import React from 'react';
import './style.scss';
import { Component } from 'react';
import axios from 'axios';

class Product extends Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  render(props) {
    return (
        <div className="card m-3" style={{width: '18rem'}}>
        <img className="card-img-top" src="https://bizflyportal.mediacdn.vn/bizflyportal/345/470/2020/04/21/14/34/415874328738322.jpg" alt="Card image cap" />
        <div className="card-body">
          <h6 className="card-title">{this.props.name}</h6>
          <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <a href="#" className="btn btn-sm btn-primary">Detail</a>
        </div>
      </div>
    );
  }
}

export default Product;

