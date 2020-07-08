import React from 'react';
import './style.css';
import { Component } from 'react';
import LoginForm from './form'

class Login extends Component {

  constructor(props) {
    super(props);

    this.onChanageUsername = this.onChanageUsername.bind(this);
    this.onChanagePassword = this.onChanagePassword.bind(this);

    this.state = {
      username: '',
      password: ''
    }
  }

  onChanageUsername(e){
    this.setState({
      username: e.target.value
    });
  }

  onChanagePassword(e){
    this.setState({
      password: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const userForm = {
      username: this.state.username,
      password: this.state.password
    }
    console.log(userForm);

    window.location = '/';
  }

  render() {
    return (
      <div className="Login">
        <div className="Login-header">
          <h2>Login</h2>
          <LoginForm/>
          <br/>
          <button>
            Test 123s
          </button>
        </div>
        <p>
          To get started Login,  and save to reload.
        </p>
      </div>
    );
  }
}

export default Login;
