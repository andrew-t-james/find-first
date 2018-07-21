import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      email: '',
      password: ''
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { firstName, email, password } = this.state;

    return (
      <section>
        <form action="">
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <button>Sign Up</button>
        </form>
      </section>
    );
  }
}

export default SignUp;
