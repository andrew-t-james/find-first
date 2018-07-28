import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Card from '../Card/Card';
import Header from '../Header/Header';
import { connect } from 'react-redux';
import CardContainer from '../CardContainer/CardContainer';
import Footer from '../Footer/Footer';
import Loader from '../Loader/Loader';
import PropTypes from 'prop-types';
import { githubJobsThunk } from '../../thunks/jobListings';

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      jobs: this.props.jobs
    };
  }

  componentDidMount = async () => {
    const { jobs } = this.props;

    if (!jobs.length) {
      const githubJobListings = await githubJobsThunk();
      await this.props.githubJobs(githubJobListings);
      this.setState({ jobs: this.props.jobs });
    }
  }

  handleUpdate = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });

    this.filterJobs(value);
  }

  filterJobs = value => {
    const { jobs } = this.state;
    const filteredJobs = this.props.jobs.filter(job => job.title.toLowerCase().includes(value.toLowerCase()));
    this.setState({ jobs: filteredJobs });
  }

  render() {
    const { isLoading } = this.props;
    const { query, jobs } = this.state;

    return (
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
    );
  }
}

export const mapStateToProps = state => ({
  jobs: state.githubJobs,
  isLoading: state.isLoading
});

export const mapDispatchToProps = dispatch => ({
  githubJobs: () => dispatch(githubJobsThunk())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

Dashboard.propTypes = {

};