import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SlideMenu from 'react-slide-menu';
import { googleSignInAction, githubLoginAction, twitterLoginAction, facebookLoginAction } from '../../Actions/auth';
import { googleOAuthLogin, githubOAuthLogin, twitterOAuthLogin, facebookOAuthLogin } from '../../firebase/firebase';
import { googleLogin } from '../../thunks/auth';

import { toggleMenu } from '../../Actions/menu';
import { nav } from '../../helpers/nav';

import menuIcon from '../../images/menu.svg';

export class SignIn extends Component {
  handleLogin = (authProvider, loginAction) => {
    this.props.googleLogin(authProvider, loginAction);
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
          <div className="logo sign-in__logo">
            <h1 className="logo__forward">F</h1>
            <h1 className="logo__backward">F</h1>
          </div>
          <div>
            <div class={`home__menu--icon wrapper-menu ${slideMenuActive ? 'open' : ''}`} onClick={toggleMenu}>
              <div className="line-menu half start"></div>
              <div className="line-menu"></div>
              <div className="line-menu half end"></div>
            </div>
            <div className="sign-in">
              <h2 className="sign-in__title">Sing-In</h2>
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
            </div>
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
  toggleMenu: () => dispatch(toggleMenu())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

SignIn.propTypes = {
  googleLogin: PropTypes.func,
  googleLogout: PropTypes.func,
  toggleMenu: PropTypes.func,
  slideMenuActive: PropTypes.bool
};