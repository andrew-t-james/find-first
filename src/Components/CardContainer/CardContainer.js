import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const CardContainer = ({ githubJobs }) => {
  const renderJobs = githubJobs.map(job =>
    <Link to={`/job/${job.id}`} key={job.id} >
      <Card {...job} key={job.id}/>
    </Link>
  );

  return (
    <section className="cards-section">
      {githubJobs.length ? renderJobs : null}
    </section>
  );
};

export const mapStateToProps = state => ({
  githubJobs: state.githubJobs
});

export default connect(mapStateToProps)(CardContainer);

CardContainer.propTypes = {
  githubJobs: PropTypes.arrayOf(PropTypes.object)
};