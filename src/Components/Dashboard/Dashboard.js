import React, { Component } from 'react';
import Search from '../Search/Search';
import Card from '../Card/Card';
import Header from '../Header/Header';
import { connect } from 'react-redux';
import CardContainer from '../CardContainer/CardContainer';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';
import PropTypes from 'prop-types';
import { githubJobsThunk } from '../../thunks/jobListings';

export class Dashboard extends Component {
  componentDidMount = async () => {
    const { jobs } = this.props;

    if (!jobs.length) {
      const githubJobListings = await githubJobsThunk();
      this.props.githubJobs(githubJobListings);
    }
  }

  render() {
    const isLoading = true;
    return (
      <div className="grid-container">
        <Header />
        <main className="content">
          <section className="cards-container">
            <Search />
            {isLoading
              ?
              <div className="loader-container">
                <Loader />
              </div>
              :
              <CardContainer />
            }
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  jobs: state.githubJobs
});

export const mapDispatchToProps = dispatch => ({
  githubJobs: () => dispatch(githubJobsThunk())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

Dashboard.propTypes = {

};