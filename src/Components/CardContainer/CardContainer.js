import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import { connect } from 'react-redux';


export const CardContainer = ({ githubJobs }) => {
  const renderJobs = githubJobs.map(job => <Card {...job} key={job.title}/>);

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

};