import React from 'react';
import { Header } from '../Header/Header';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const JobDetail = ({ title, description }) => {
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


export default withRouter(JobDetail);