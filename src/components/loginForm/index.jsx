import React from 'react';
import './style.scss';
import { Component } from 'react';
import axios from 'axios';
// import LoginForm from './form';

class LoginForm extends Component {

  constructor(props) {
    super(props);

    this.onChanageUsername = this.onChanageUsername.bind(this);
    this.onChanagePassword = this.onChanagePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onClick = this.onClick.bind(this);

    this.state = {
      username: '',
      password: ''
    }
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
      username: this.state.username,
      password: this.state.password
    }
    console.log(userForm);

    axios.post('http://localhost:9000/users/login', userForm)
      .then(res => console.log(res.data));

    window.location = '/home';
  }

  onClick(e) {
    window.location = '/register';
  }

  render() {
    return (
      <div className="container" style={{ paddingTop: '10rem' }}>
        <div className="row">
          <h2>Login</h2>
        </div>
        <br />
        <div className="form-group">
          <label>Username:</label>
          <input type="email" className="form-control w-50" placeholder="Enter email" value={this.state.value} onChange={this.onChanageUsername} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" class="form-control w-50" id="pwd" value={this.state.value} onChange={this.onChanagePassword} />
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label">Remember me</label>
        </div>
        <br />
        <button onClick={this.onSubmit} className="btn btn-primary btn-sm btn-lg btn-block w-50">Login</button>
        {/* <br /><br /> delete br  */}
        <div className="row">
            Don’t have an account?
        </div>
        <div className="row">
          <br />
          <a href="#" className="txt3" onClick={this.onClick}>
            Sign up now
					</a>
        </div>
      </div>
    );
  }
}

export default LoginForm;
