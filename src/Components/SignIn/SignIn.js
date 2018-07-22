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
      <section className="sign-in">
        <button
          className="google"
          onClick={() => this.handleLogin(googleOAuthLogin, googleSignInAction)}
        >
          Google
        </button>
        <button
          className="github"
          onClick={() => this.handleLogin(githubOAuthLogin, githubLoginAction)}
        >
          GitHub
        </button>
        <button
          className="twitter"
          onClick={() => this.handleLogin(twitterOAuthLogin, twitterLoginAction)}
        >
          Twitter
        </button>
        <button
          className="facebook"
          onClick={() => this.handleLogin(facebookOAuthLogin, facebookLoginAction)}
        >
          Facebook
        </button>
        <button
          className="sign-out"
          onClick={() => this.handleSignOut(logout, googleSignOutAction)}
        >
         Sign Out
        </button>
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