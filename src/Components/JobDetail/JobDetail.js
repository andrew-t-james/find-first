import React, { Component } from 'react';
import { Header } from '../Header/Header';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addJobToFirebase } from '../../thunks/firebase';

export class JobDetail extends Component {
  constructor() {
    super();
    this.state = {
      saving: false,
      savedToDB: false
    };
  }

  saveNewJob = newJobToSave => {
    const { saveJobToFirebase, savedJobs } = this.props;
    this.setState({
      saving: true
    });


    saveJobToFirebase(newJobToSave);
    setTimeout(() => {
      this.setState({
        saving: false,
        savedToDB: true
      });
    }, 1300);
  };

  render() {
    const { title, description, url, image, id, saveJob, savedJobs, isLoading } = this.props;
    const { saving, savedToDB } = this.state;
    const newJob = {
      title,
      description,
      url,
      image,
      id
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
            <button onClick={() => this.saveNewJob(newJob)}
              className={`job-detail__save-job--button ${saving ? 'loading' : ''} ${savedToDB ? 'success': ''}`}
              disabled={savedToDB ? true : false}
            >
              {!savedToDB ?  'Mark Applied' : 'Saved'}
            </button>
          </div>
          <p className="job-detail__copy" dangerouslySetInnerHTML={{ __html: description }}/>
        </section>
      </section>
    );
  }
};

export const mapStateToProps = state => ({
  savedJobs: state.savedJobs,
  isLoading: state.isLoading
});

export const mapDispatchToProps = dispatch => ({
  saveJobToFirebase: newJob => dispatch(addJobToFirebase(newJob))
});

export default connect(mapStateToProps, mapDispatchToProps)(JobDetail);