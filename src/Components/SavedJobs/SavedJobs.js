import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Card from '../Card/Card';

export const SavedJobs = ({ jobs }) => {
  const renderJobs = jobs.map(job =>
    <Link to={`/saved-jobs/${job.id}`} key={job.id} >
      <Card {...job} key={job.id}/>
    </Link>
  );

  return (
    <section className="cards-section saved-card-section">
      {jobs.length ? renderJobs : null}
    </section>
  );
};

export default SavedJobs;

SavedJobs.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.object)
};