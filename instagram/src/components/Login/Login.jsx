import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import IGLogo from '../../img/Instagram-Brush-Lettering.png';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name] : e.target.value
    });
  };

  handleLoginSubmit = e => {
    const user = this.state.username;
    localStorage.setItem('user', user);
    window.location.reload();
  };

  render() {
    return (
      <Form className="login-form">
      <img alt="instagram logo" className='ig-logo' src={IGLogo} />
        <FormGroup>
          <Input type="text" placeholder="Phonenumber, username, or email" name="username" value={this.state.username} onChange={this.handleInputChange} />
        </FormGroup>
        <FormGroup>
          <Input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleInputChange} />
        </FormGroup>
        <FormGroup>
        <Button color="primary" size="large" onClick={this.handleLoginSubmit}>Log In</Button>
        </FormGroup>
      </Form>
    );
  }
}

export default Login;
