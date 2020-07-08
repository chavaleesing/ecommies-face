import React from 'react';
import './style.css';
import { Component } from 'react';
import axios from 'axios';

class LoginForm extends Component {

  constructor(props) {
        super(props);

    this.onChanageUsername = this.onChanageUsername.bind(this);
    this.onChanagePassword = this.onChanagePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      password: ''
    }
  }

  onChanageUsername(e){
    this.setState({
      username: e.target.value
    });
    console.log(`.................... ${e.target.value}`)
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

    axios.post('http://localhost:9000/users/login', userForm)
        .then(res => console.log(res.data));

    // window.location = '/';
  }

  render() {
    return (
          <form onSubmit={this.onSubmit}>
            <label>
              Username:
              <input type="text" name="name" value={this.state.value} onChange={this.onChanageUsername}/>
            </label>
            <br />
            <label>
              Password:
              <input type="text" name="name" value={this.state.value} onChange={this.onChanagePassword}/>
            </label>
            <br />
            <input type="submit" value="Submit" />
          </form>
    );
  }
}

export default LoginForm;
