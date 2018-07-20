import React from 'react';
import SignIn from '../SignIn/SignIn';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Home = () => {
  return (
    <section>
      <SignIn />
      <p>Dont have and account ? <NavLink to="/sign-up" >Sign Up</NavLink></p>
    </section>
  );
};

Home.propTypes = {

};

export default Home;
