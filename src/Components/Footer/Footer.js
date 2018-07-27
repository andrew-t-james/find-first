import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__nav">
        <NavLink className="footer__nav--item" exact to="/dashboard">
          <i class="far fa-clone"></i>
          Dashboard
        </NavLink>
        <NavLink className="footer__nav--item" exact to="/">
          <i class="far fa-user-circle"></i>
          Home
        </NavLink>
        <NavLink className="footer__nav--item" exact to="/sign-in">
          <i class="fas fa-sign-in-alt"></i>
          Sign In
        </NavLink>
        <button className="footer__nav--item" exact to="/">
          <i class="far fa-times-circle"></i>
          Sign Out
        </button>
      </ul>
    </footer>
  );
};

Footer.propTypes = {

};

export default Footer;