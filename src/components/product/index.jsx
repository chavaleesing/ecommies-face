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
        <div className="card" style={{width: '18rem'}}>
        <img className="card-img-top" src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/react-512.png" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Detail</a>
        </div>
      </div>
    );
  }
}

export default Product;

