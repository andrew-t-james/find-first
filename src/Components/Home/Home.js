import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SlideMenu from 'react-slide-menu';
import { toggleMenu } from '../../Actions/menu';
import { nav } from '../../helpers/nav';

import SignIn from '../SignIn/SignIn';

import menuIcon from '../../images/menu.svg';

const logoComponent = () => (
  <img src={logo} />
);

export const Home = props => {
  const { slideMenuActive, toggleMenu } = props;

  return (
    <SlideMenu
      active={slideMenuActive}
      nav={nav}
      reactRouter={true}
      closeMenu={() => toggleMenu()}
      extraComponent={logoComponent}
    >
      <section className="home">
        <div className={`home__menu--icon wrapper-menu ${slideMenuActive ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="line-menu half start"></div>
          <div className="line-menu"></div>
          <div className="line-menu half end"></div>
        </div>
        <div className="logo-section">
          <div className="logo">
            <h1 className="logo__forward">F</h1>
            <h1 className="logo__backward">F</h1>
          </div>
          <div className="logo__title">
            <h1>Find<span className="logo__title-thin">First</span></h1>
          </div>
          <div>
            <h2 className="copy-section__header--small">Find a dev Job that fits you First</h2>
          </div>
        </div>
        <div className="copy-section">
          <h2 className="copy-section__header">Finding a job is a pain 😠</h2>
          <p className="copy-section__paragraph">
            Find First helps you search, organize and track all of your dev job applications in one place.
          </p>
        </div>
      </section>
    </SlideMenu>
  );
};

export const mapStateToProps = state => ({
  slideMenuActive: state.slideMenuActive
});

export const mapDispatchToProps = dispatch => ({
  toggleMenu: () => dispatch(toggleMenu())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

Home.propTypes = {
  toggleMenu: PropTypes.func,
  slideMenuActive: PropTypes.bool
};