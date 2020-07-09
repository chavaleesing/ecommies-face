import React from 'react';
import './style.css';
import { Component } from 'react';
import axios from 'axios';

class RegisterForm extends Component {

  constructor(props) {
        super(props);

    this.onChanageUsername = this.onChanageUsername.bind(this);
    this.onChanagePassword = this.onChanagePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      email: '',
      password: ''
    }
  }

  onChanageUsername(e){
    this.setState({
      username: e.target.value
    });
  }

  onChanageEmail(e){
    this.setState({
      email: e.target.value
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
      email: this.state.email,
      password: this.state.password
    }

    console.log(userForm);

    axios.post('http://localhost:9000/users/register', userForm)
        .then(res => console.log(res.data));

    window.location = '/login';
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
              Email:
              <input type="text" name="name" value={this.state.value} onChange={this.onChanagePassword}/>
            </label>
            <label>
              Password:
              <input type="text" name="name" value={this.state.value} onChange={this.onChanagePassword}/>
            </label>
            <br />
            <input type="submit" value="Register" />
        </form>
    );
  }
}

export default RegisterForm;
