import React from 'react';
import { Header } from '../Header/Header';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const JobDetail = ({ title, description, url, image }) => {
  return (
    <section className="job-detail">
      <header className="job-detail__header">
        <h1>header logo goes here</h1>
      </header>
      <section className="job-detail-container">
        <div className="job-detail--buttons">
          <Link to="/dashboard">&larr; back to job listings</Link>
          <img src={image} alt={title} className="job-detail__image"/>
          <a href={url} target="_blank" rel="noopener noreferrer" >Apply Here &rarr;</a>
        </div>
        <h1 className="job-detail__tile">{title}</h1>
        <p className="job-detail__copy" dangerouslySetInnerHTML={{ __html: description }}/>
      </section>
    </section>
  );
};


export default withRouter(JobDetail);