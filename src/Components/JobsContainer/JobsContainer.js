import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SlideMenu from 'react-slide-menu';

import Header from '../Header/Header';
import SavedJobs from '../SavedJobs/SavedJobs';
import Loader from '../../Components/Loader/Loader';
import Footer from '../Footer/Footer';
import { getSavedJobsFromFirebase } from '../../thunks/firebase';
import { nav } from '../../helpers/nav';

export class JobsContainer extends Component {
  constructor() {
    super();
    this.state = {
      savedJobs: []
    };
  }

  componentDidMount = async () => {
    await this.props.getSavedJobs();
    this.setState({ savedJobs: this.props.savedJobs });
  }

  render() {
    const { isLoading, slideMenuActive } = this.props;
    const { savedJobs } = this.state;

    return (
      <SlideMenu
        active={slideMenuActive}
        nav={nav}
        reactRouter={true}
        navClassName={"slide-menu"}
      >
        <div className="grid-container">
          <Header />
          <main className="content">
            <section className="cards-container">
              <h1>Jobs Container</h1>
              {isLoading
                ?
                <div className="loader-container">
                  <Loader />
                </div>
                :
                <SavedJobs jobs={savedJobs} />
              }
            </section>
          </main>
          <Footer />
        </div>
      </ SlideMenu>
    );
  }
}

export const mapStateToProps = state => ({
  savedJobs: state.savedJobs,
  isLoading: state.isLoading,
  slideMenuActive: state.slideMenuActive
});

export const mapDispatchToProps = dispatch => ({
  getSavedJobs: () => dispatch(getSavedJobsFromFirebase())
});

export default connect(mapStateToProps, mapDispatchToProps)(JobsContainer);
