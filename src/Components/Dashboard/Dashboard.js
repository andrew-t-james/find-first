import React, { Component } from 'react';
import Search from '../Search/Search';
import Card from '../Card/Card';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';


export class Dashboard extends Component {
  render() {
    return (
      <div className="grid-container">
        <Header />
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
  }
}

Dashboard.propTypes = {

};

export default Dashboard;
