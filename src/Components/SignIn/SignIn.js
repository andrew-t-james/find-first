import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SlideMenu from 'react-slide-menu';
import { googleSignInAction, googleSignOutAction, githubLoginAction, twitterLoginAction, facebookLoginAction } from '../../Actions/auth';
import { googleOAuthLogin, githubOAuthLogin, logout, twitterOAuthLogin, facebookOAuthLogin } from '../../firebase/firebase';
import { googleLogin, googleLogout } from '../../thunks/auth';

import { toggleMenu } from '../../Actions/menu';
import { nav } from '../../helpers/nav';

import menuIcon from '../../images/menu.svg';

export class SignIn extends Component {
  handleLogin = (authProvider, loginAction) => {
    this.props.googleLogin(authProvider, loginAction);
  }

  handleSignOut = (authLogOut, logOutAction) => {
    this.props.googleLogout(authLogOut, logOutAction);
  }

  render() {
    const { slideMenuActive, toggleMenu } = this.props;

    return (
      <SlideMenu
        active={slideMenuActive}
        nav={nav}
        reactRouter={true}
      >
        <section className="login-section">
          <div
            className="home__menu"
            onClick={toggleMenu}
          >
            <img className="home__menu--icon" src={menuIcon}/>
          </div>
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
      </SlideMenu>
    );
  }
}

export const mapStateToProps = state => ({
  slideMenuActive: state.slideMenuActive
});

export const mapDispatchToProps = dispatch => ({
  googleLogin: (authProvider, loginAction) => dispatch(googleLogin(authProvider, loginAction)),
  googleLogout: (authLogout, logOutAction) => dispatch(googleLogout(authLogout, logOutAction)),
  toggleMenu: () => dispatch(toggleMenu())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

SignIn.propTypes = {
  googleLogin: PropTypes.func,
  googleLogout: PropTypes.func,
  toggleMenu: PropTypes.func,
  slideMenuActive: PropTypes.bool
};