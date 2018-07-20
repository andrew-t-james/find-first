import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;

    return (
      <section>
        <form action="">
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
          <button
            type="submit"
          >
          Submit
          </button>
        </form>
      </section>
    );
  }
}

export default SignIn;
