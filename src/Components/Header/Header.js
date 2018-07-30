import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import logo from '../../images/compass-regular.svg';

export const Header = ({ user }) => {

  return (
    <section className="header">
      <div className={`header-toggle wrapper-menu`} >
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
        </div>
        : null
      }
    </section>

  );
};

export const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Header);
