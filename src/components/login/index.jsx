import React from 'react';
import './style.css';
import { Component } from 'react';
import LoginForm from './form'
import axios from 'axios';

class Login extends Component {

  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onClick(e) {
    window.location = '/register';
  }

  
  render() {
    return (
      <div className="Login">
        <div className="Login-header">
          <h2>Login</h2>
          <LoginForm/>
          <br/>
          <button onClick={this.onClick}>Register</button>
        </div>
      </div>
    );
  }
}

export default Login;
