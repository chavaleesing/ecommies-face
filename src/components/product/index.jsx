import React from 'react';
import './style.css';
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
        <img className="card-img-top" src="https://img.pngio.com/cheesecake-cheese-cake-dessert-png-transparent-image-and-cheesecake-png-650_650.png" alt="Card image cap" />
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


// import React from 'react';
// import './style.css';
// import { Component } from 'react';
// import LoginForm from './form'
// import axios from 'axios';

// class Login extends Component {

//   constructor(props) {
//     super(props);

//     this.onClick = this.onClick.bind(this);
//   }

//   onClick(e) {
//     window.location = '/register';
//   }

  
//   render() {
//     return (
//       <div className="Login">
//         <div className="Login-header">
//           <h2>Login</h2>
//           <LoginForm/>
//           <br/>
//           <button onClick={this.onClick}>Register</button>
//         </div>
//       </div>
//     );
//   }
// }

// export default Login;
