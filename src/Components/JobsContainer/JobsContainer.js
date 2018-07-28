import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export class JobsContainer extends Component {
  render() {
    return (
      <div className="grid-container">
        <Header />
        <main className="content">
          <section className="cards-container">
            <h1>Jobs Container</h1>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default JobsContainer;
