import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { googleLogin } from '../../actions/auth';

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

  handleGoogleLogin = () => {
    const { googleLogin } = this.props;
    googleLogin();
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
        </form>
        <button
          onClick={this.handleGoogleLogin}
        >
          Google
        </button>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  googleLogin: () => dispatch(googleLogin())
});

export default connect(null, mapDispatchToProps)(SignIn);
