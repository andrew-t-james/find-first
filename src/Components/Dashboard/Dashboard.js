import React, { Component } from 'react';
import Search from '../Search/Search';
import Card from '../Card/Card';
import Header from '../Header/Header';
import CardContainer from '../CardContainer/CardContainer';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';


export class Dashboard extends Component {
  render() {
    return (
      <div className="grid-container">
        <Header />
        <main className="content">
          <section className="cards-container">
            <Search />
            <CardContainer />
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
