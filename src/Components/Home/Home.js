import React from 'react';
import SignIn from '../SignIn/SignIn';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Home = () => {
  return (
    <section className="home">
      <h1 className="home__heading">Some Catchy Title Here</h1>
      <SignIn />
    </section>
  );
};

Home.propTypes = {

};

export default Home;
