import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { googleLogin, googleLogout, githubLogin } from '../../thunks/auth';

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
    this.props.googleLogin();
  }

  handleGitHubLogin = () => {
    this.props.githubLogin();
  }

  handleGoogleSignOut = () => {
    this.props.googleLogout();
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
          className="google"
          onClick={this.handleGoogleLogin}
        >
          Google
        </button>
        <button
          className="github"
          onClick={this.handleGitHubLogin}
        >
          GitHub
        </button>
        <button
          className="sign-out"
          onClick={this.handleGoogleSignOut}
        >Sign Out</button>
      </section>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  googleLogin: () => dispatch(googleLogin()),
  githubLogin: () => dispatch(githubLogin()),
  googleLogout: () => dispatch(googleLogout())
});

export default connect(null, mapDispatchToProps)(SignIn);

SignIn.propTypes = {
  googleLogin: PropTypes.func,
  githubLogin: PropTypes.func,
  googleLogout: PropTypes.func
};