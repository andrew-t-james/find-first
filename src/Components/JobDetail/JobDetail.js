import React from 'react';
import { Header } from '../Header/Header';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addJobToFirebase } from '../../thunks/firebase';

export const JobDetail = ({ title, description, url, image, saveJob }) => {
  const newJob = {
    title,
    description,
    url,
    image
  };

  return (
    <section className="job-detail">
      <header className="job-detail__header">
        <h1>header logo goes here</h1>
      </header>
      <section className="job-detail-container">
        <div className="job-detail--buttons">
          <Link to="/dashboard">&larr; Back to Job Listings</Link>
          <img src={image} alt={title} className="job-detail__image"/>
          <a href={url} target="_blank" rel="noopener noreferrer" >Apply Here &rarr;</a>
        </div>
        <h1 className="job-detail__tile">{title}</h1>
        <div className="job-detail__save-job">
          <button onClick={() => saveJob(newJob)}
            className="job-detail__save-job--button"
          >
            Mark Applied
          </button>
        </div>
        <p className="job-detail__copy" dangerouslySetInnerHTML={{ __html: description }}/>
      </section>
    </section>
  );
};

export const mapDispatchToProps = dispatch => ({
  saveJob: newJob => dispatch(addJobToFirebase(newJob))
});

export default connect(null, mapDispatchToProps)(JobDetail);