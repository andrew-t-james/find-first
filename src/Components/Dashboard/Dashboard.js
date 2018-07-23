import React from 'react';
import Search from '../Search/Search';
import Card from '../Card/Card';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';

const Dashboard = () => {
  return (
    <div className="grid-container">
      <header className="header"><h1>header</h1></header>
      <main className="content">
        <h2>Main</h2>
        <section className="cards-container">
          <Search />
          <section className="cards-section">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
};

Dashboard.propTypes = {

};

export default Dashboard;
