import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import SignIn from '../SignIn/SignIn';
import PropTypes from 'prop-types';
import SlideMenu from 'react-slide-menu';
import { toggleMenu } from '../../Actions/menu';
import { nav } from '../../helpers/nav';

import menuIcon from '../../images/menu.svg';
import logo from '../../images/compass-regular.svg';

export class Home extends Component {
  render() {
    const { slideMenuActive, toggleMenu } = this.props;

    return (
      <SlideMenu
        active={slideMenuActive}
        nav={nav}
        reactRouter={true}
      >
        <section className="home">
          <div className={`home__menu--icon wrapper-menu ${slideMenuActive ? 'open' : ''}`} onClick={toggleMenu}>
            <div className="line-menu half start"></div>
            <div className="line-menu"></div>
            <div className="line-menu half end"></div>
          </div>
          <div className="logo-section">
            <div className="logo">
              <h1 class="logo__forward">F</h1>
              <h1 class="logo__backward">F</h1>
            </div>
            <div className="logo__title">
              <h1>Find<span className="logo__title-thin">First</span></h1>
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
  toggleMenu: () => dispatch(toggleMenu())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

Home.propTypes = {
  toggleMenu: PropTypes.func,
  slideMenuActive: PropTypes.bool
};