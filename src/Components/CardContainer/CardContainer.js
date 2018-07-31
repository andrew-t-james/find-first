import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Card from '../Card/Card';

export const CardContainer = ({ jobs }) => {
  const renderJobs = jobs.map(job =>
    <Link to={`/job/${job.id}`} key={job.id} >
      <Card {...job} key={job.id}/>
    </Link>
  );

  return (
    <section className="cards-section">
      {jobs.length ? renderJobs : null}
    </section>
  );
};

export default CardContainer;

CardContainer.propTypes = {
  jobs: PropTypes.arrayOf(PropTypes.object)
};