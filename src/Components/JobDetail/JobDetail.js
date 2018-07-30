import React, { Component } from 'react';
import uuid from 'uuid';
import { Header } from '../Header/Header';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addJobToFirebase, getSavedJobsFromFirebase } from '../../thunks/firebase';

export class JobDetail extends Component {
  constructor() {
    super();
    this.state = {
      saving: false,
      savedToDB: false,
      applied: false
    };
  }

  componentDidMount = () => {
    const alreadyAppliedToJob = this.props.savedJobs.find(job => job.apiID === this.props.id);
    this.setState({
      applied: alreadyAppliedToJob
    });
  }

  saveNewJob = async newJobToSave => {
    const { saveJobToFirebase, getSavedJobs } = this.props;

    this.setState({
      saving: true
    });

    if (!this.state.applied) {
      await saveJobToFirebase(newJobToSave);
    }

    setTimeout(() => {
      this.setState({
        saving: false,
        savedToDB: true
      });
    }, 1300);
  };

  render() {
    const { title, description, company, url, image, id, saveJob, savedJobs, isLoading } = this.props;
    const { saving, savedToDB, applied  } = this.state;
    const newJob = {
      title,
      description,
      company,
      url,
      image,
      apiID: id,
      id: uuid(),
      applied: true
    };

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
            <Link to="/dashboard">&larr; Back to Job Listings</Link>
            {image ?
              <img src={image} alt={title} className="job-detail__image"/> :
              <div></div>
            }
            <a href={url} target="_blank" rel="noopener noreferrer" >Apply Here &rarr;</a>
          </div>
          <h1 className="job-detail__tile">{title}</h1>
          <div className="job-detail__save-job">
            <button onClick={() => this.saveNewJob(newJob)}
              className={`job-detail__save-job--button ${saving ? 'loading' : ''} ${savedToDB || applied ? 'success': ''}`}
              disabled={savedToDB || applied ? true : false}
            >
              {!savedToDB && !applied ?  'Mark Applied' : 'Saved'}
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