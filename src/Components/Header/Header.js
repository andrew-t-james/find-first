import React, { Component } from 'react';
import SlideMenu from 'react-slide-menu';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleMenu } from '../../Actions/menu';


export const Header = ({ user, toggleMenu, slideMenuActive, recentJobs }) => {
  return (
    <section className="header">
      <div
        className={
          `home__menu--icon hide-menu
        wrapper-menu ${slideMenuActive ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <div className="line-menu half start"></div>
        <div className="line-menu"></div>
        <div className="line-menu half end"></div>
      </div>
      <div className="header__logo">
        <h1 className="logo__forward">F</h1>
        <h1 className="logo__backward">F</h1>
      </div>
      {user.name ?
        <div className="user-info">
          <h2 className="user-info__heading">{user.name}</h2>
          <img className="user-info__image" src={user.image} alt={user.name}/>
          <div className="user-info__recent-jobs">
            <p>Pending Applications: {recentJobs.length}</p>
          </div>
        </div>
        : null
      }
    </section>
  );
};

export const mapStateToProps = state => ({
  user: state.user,
  slideMenuActive: state.slideMenuActive,
  recentJobs: state.savedJobs
});

export const mapDispatchToProps = dispatch => ({
  toggleMenu: () => dispatch(toggleMenu())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
