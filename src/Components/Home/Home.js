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
          <div className="logo-section">
            <div class={`home__menu--icon wrapper-menu ${slideMenuActive ? 'open' : ''}`} onClick={toggleMenu}>
              <div class="line-menu half start"></div>
              <div class="line-menu"></div>
              <div class="line-menu half end"></div>
            </div>
            <div className="logo">
              <img src={logo} alt="Find First Logo"/>
              <h1>Find First</h1>
            </div>
          </div>
          <div>
            <h1>Find First</h1>
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