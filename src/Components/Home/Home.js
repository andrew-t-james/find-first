import React from 'react';
import SignIn from '../SignIn/SignIn';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Home = ({ user }) => {
  return (
    <section className="home">
      <div className="logo-section">
        <h1 className="home__heading">Some Catchy Title Here</h1>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </div>
      <SignIn />
    </section>
  );
};

export default Home;

Home.propTypes = {

};