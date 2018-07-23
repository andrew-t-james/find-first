import React, { Component } from 'react';
import SignIn from '../SignIn/SignIn';
import { NavLink } from 'react-router-dom';
import SlideMenu from 'react-slide-menu';
import PropTypes from 'prop-types';

import menuIcon from '../../images/menu.svg';

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      slideMenuActive: true,
      nav: [
        {id: 'home', label: 'Home', path: '/'},
        {id: 'sign-in', label: 'Sign-In', path: '/sign-in'},
        {id: 'dashboard', label: 'Dashboard', path: '/dashboard'}
      ]
    };
  }

  toggleMenu = () => {
    const { slideMenuActive } = this.state;
    this.setState({ slideMenuActive: !this.state.slideMenuActive });
  }

  render() {
    const { slideMenuActive, nav } = this.state;

    return (
      <SlideMenu
        active={slideMenuActive}
        nav={nav}
        reactRouter={true}
        closeMenu={() => this.setState({slideMenuActive: false})}
      >
        <section className="home">
          <div className="logo-section">
            <div
              className="home__menu"
              onClick={this.toggleMenu}
            >
              <img className="home__menu--icon" src={menuIcon}/>
            </div>
          </div>
        </section>
      </SlideMenu>
    );
  }
}

export default Home;

Home.propTypes = {

};