import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const Header = ({ user }) => {

  return (
    <div className="header">
      <h1>header</h1>
      {user.name &&
         <div className="user-info">
           <h2 className="user-info__heading">{user.name}</h2>
           <img className="user-info__image" src={user.image} alt={user.name}/>
         </div>
      }
    </div>
  );
};

export const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Header);
