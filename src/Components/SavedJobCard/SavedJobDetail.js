import React, { Component } from 'react';
import { Header } from '../Header/Header';
import { Link } from 'react-router-dom';

export class SavedJobDetail extends Component {

  render() {
    const { title, description, url, image, id } = this.props;

    return (
      <section className="job-detail">
        <header className="job-detail__header">
          <div className="header__logo">
            <h1 className="logo__forward">F</h1>
            <h1 className="logo__backward">F</h1>
          </div>
        </header>
        <section className="job-detail-container">
          <div className="job-detail--buttons">
            <Link to="/saved-jobs">&larr; Back to Saved Jobs</Link>
            <img src={image} alt={title} className="job-detail__image"/>
            <a href={url} target="_blank" rel="noopener noreferrer" >Review Application &rarr;</a>
          </div>
          <h1 className="job-detail__tile">{title}</h1>
          <p className="job-detail__copy" dangerouslySetInnerHTML={{ __html: description }}/>
        </section>
      </section>
    );
  }
};

export default SavedJobDetail;