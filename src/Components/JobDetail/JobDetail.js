import React from 'react';
import PropTypes from 'prop-types';
import { Header } from '../Header/Header';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

const JobDetail = ({ title, description }) => {
  return (
    <div>
      <Header />
      <Link to="/dashboard">◀ back</Link>
      <main className="content">
        <section className="job-detail-container">
          <h1>{title}</h1>
          <p dangerouslySetInnerHTML={{ __html: description }}/>
        </section>
      </main>
    </div>
  );
};

const mapStateToProps = state => ({
  jobs: state.githubJobs
});

export default withRouter(connect(mapStateToProps)(JobDetail));

JobDetail.propTypes = {

};