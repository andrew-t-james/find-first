import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { googleLogin, googleLogout } from '../../thunks/auth';
import { googleSignInAction, googleSignOutAction, githubLoginAction, twitterLoginAction, facebookLoginAction } from '../../Actions/auth';
import { googleOAuthLogin, githubOAuthLogin, logout, twitterOAuthLogin, facebookOAuthLogin } from '../../firebase/firebase';

export class SignIn extends Component {
  handleLogin = (authProvider, loginAction) => {
    this.props.googleLogin(authProvider, loginAction);
  }

  handleSignOut = (authLogOut, logOutAction) => {
    this.props.googleLogout(authLogOut, logOutAction);
  }

  render() {
    return (
      <section className="login-section">
        <div className="sign-in">
          <button
            className="google auth-button"
            onClick={() => this.handleLogin(googleOAuthLogin, googleSignInAction)}
          >
          Google
            <i className="fab fa-google"></i>
          </button>
          <button
            className="github auth-button"
            onClick={() => this.handleLogin(githubOAuthLogin, githubLoginAction)}
          >
          GitHub
            <i className="fab fa-github"></i>
          </button>
          <button
            className="twitter auth-button"
            onClick={() => this.handleLogin(twitterOAuthLogin, twitterLoginAction)}
          >
          Twitter
            <i className="fab fa-twitter"></i>
          </button>
          <button
            className="facebook auth-button"
            onClick={() => this.handleLogin(facebookOAuthLogin, facebookLoginAction)}
          >
          Facebook
            <i className="fab fa-facebook"></i>
          </button>
          <button
            className="sign-out"
            onClick={() => this.handleSignOut(logout, googleSignOutAction)}
          >
         Sign Out
          </button>
        </div>
      </section>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  googleLogin: (authProvider, loginAction) => dispatch(googleLogin(authProvider, loginAction)),
  googleLogout: (authLogout, logOutAction) => dispatch(googleLogout(authLogout, logOutAction))
});

export default connect(null, mapDispatchToProps)(SignIn);

SignIn.propTypes = {
  googleLogin: PropTypes.func,
  githubLogin: PropTypes.func,
  googleLogout: PropTypes.func
};