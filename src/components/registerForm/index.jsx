import React from 'react';
import './style.scss';
import { Component } from 'react';
import axios from 'axios';
// import LoginForm from './form';

class RegisterForm extends Component {

  constructor(props) {
    super(props);

    this.onChanageUsername = this.onChanageUsername.bind(this);
    this.onChanageEmail = this.onChanageEmail.bind(this);
    this.onChanagePassword = this.onChanagePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: '',
      username: '',
      password: ''
    }
  }

  onChanageEmail(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChanageUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChanagePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const userForm = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    }
    console.log(userForm);

    axios.post('http://localhost:9000/users/register', userForm)
      .then(res => console.log(res.data));

    window.location = '/home';
  }

  render() {
    return (
      <div className="container" style={{ paddingTop: '10rem' }}>
        <div className="row">
          <h2>Register</h2>
        </div>
        <br />
        <div className="form-group">
          <label>Email:</label>
          <input type="email" className="form-control w-50" placeholder="Enter email" name="name" value={this.state.value} onChange={this.onChanageUsername} />
        </div>
        <div className="form-group">
          <label>Username:</label>
          <input type="email" className="form-control w-50" placeholder="Enter email" name="name" value={this.state.value} onChange={this.onChanageUsername} />
        </div>
        <div className="form-group">
          <label for="pwd">Password:</label>
          <input type="password" class="form-control w-50" id="pwd" value={this.state.value} onChange={this.onChanagePassword} />
        </div>
        <br />
        <button onClick={this.onSubmit} className="btn btn-primary btn-sm btn-lg btn-block w-50">Sign-Up</button>
        <br />
      </div>
    );
  }
}

export default RegisterForm;
