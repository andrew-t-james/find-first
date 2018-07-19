import React from 'react';
import PropTypes from 'prop-types';

const Footer = () => {
  return (
    <footer className="footer">
      <ui className="footer__nav">
        <li className="footer__nav--item active"><a href="">navigation</a></li>
        <li className="footer__nav--item"><a href="">navigation</a></li>
        <li className="footer__nav--item"><a href="">navigation</a></li>
        <li className="footer__nav--item"><a href="">navigation</a></li>
      </ui>
    </footer>
  );
};

Footer.propTypes = {

};

export default Footer;