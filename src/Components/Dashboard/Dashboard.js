import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import SlideMenu from 'react-slide-menu';
import { githubJobsThunk } from '../../thunks/jobListings';
import { getSavedJobsFromFirebase } from '../../thunks/firebase';
import { nav } from '../../helpers/nav';
import { toggleMenu } from '../../Actions/menu';

import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import Footer from '../Footer/Footer';
import CardContainer from '../CardContainer/CardContainer';
import Card from '../Card/Card';


export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      jobs: this.props.jobs
    };
  }

  componentDidMount = async () => {
    const { jobs, githubJobs } = this.props;
    if (!jobs.length) {
      await githubJobs();
      this.setState({ jobs: this.props.jobs });
      this.handleLoadSavedJobs();
    }
  }

  handleUpdate = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });

    this.filterJobs(value);
  }

  handleLoadSavedJobs = () => {
    const { getSavedJobs } = this.props;
    getSavedJobs();
  }

  filterJobs = value => {
    const { jobs } = this.state;
    const filteredJobs = this.props.jobs.filter(job => job.title.toLowerCase().includes(value.toLowerCase()));
    this.setState({ jobs: filteredJobs });
  }

  render() {
    const { isLoading, slideMenuActive, toggleMenu } = this.props;
    const { query, jobs } = this.state;

    return (
      <SlideMenu
        active={slideMenuActive}
        nav={nav}
        reactRouter={true}
        closeMenu={() => toggleMenu()}
      >
        <div className="grid-container">
          <Header />
          <main className="content">
            <section className="cards-container">
              <div className="search">
                <input
                  type="text"
                  value={query}
                  name="query"
                  onChange={this.handleUpdate}
                  className="search__input"
                  placeholder="Search Jobs"
                />
              </div>
              {isLoading
                ?
                <div className="loader-container">
                  <Loader />
                </div>
                :
                <CardContainer jobs={jobs} />
              }
            </section>
          </main>
          <Footer />
        </div>
      </SlideMenu>
    );
  }
}

export const mapStateToProps = state => ({
  jobs: state.githubJobs,
  isLoading: state.isLoading,
  slideMenuActive: state.slideMenuActive
});

export const mapDispatchToProps = dispatch => ({
  githubJobs: () => dispatch(githubJobsThunk()),
  getSavedJobs: () => dispatch(getSavedJobsFromFirebase()),
  toggleMenu: () => dispatch(toggleMenu())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

Dashboard.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool,
  slideMenuActive: PropTypes.bool,
  githubJobs: PropTypes.func,
  getSavedJobs: PropTypes.func,
  toggleMenu: PropTypes.func
};