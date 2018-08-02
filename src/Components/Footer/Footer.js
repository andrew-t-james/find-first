import React from 'react';
import { NavLink } from 'react-router-dom';
import { googleLogout } from '../../thunks/auth';
import { logout } from '../../firebase/firebase';
import { googleSignOutAction } from '../../Actions/auth';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const Footer = ({ googleLogout }) => {
  return (
    <footer className="footer">
      <ul className="footer__nav">
        <NavLink className="footer__nav--item" exact to="/dashboard">
          <i className="far fa-clone"></i>
          Dashboard
        </NavLink>
        <NavLink className="footer__nav--item" exact to="/saved-jobs">
          <i className="fas fa-archive"></i>
          My Jobs
        </NavLink>
        <NavLink className="footer__nav--item" exact to="/sign-in">
          <i className="far fa-user-circle"></i>
          Profile
        </NavLink>
        <button
          onClick={() => googleLogout(logout, googleSignOutAction)}
          className="footer__nav--item sign-out"
        >
          <i className="far fa-times-circle"></i>
          Sign Out
        </button>
      </ul>
    </footer>
  );
};


export const mapDispatchToProps = dispatch => ({
  googleLogout: (authLogout, logOutAction) => dispatch(googleLogout(authLogout, logOutAction))
});

export default connect(null, mapDispatchToProps)(Footer);

Footer.propTypes = {
  googleLogout: PropTypes.func
};