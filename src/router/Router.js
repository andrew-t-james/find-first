import React from 'react';
import { Router, Route, Switch, withRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { connect } from 'react-redux';

import Home from '../Components/Home/Home';
import Dashboard from '../Components/Dashboard/Dashboard';
import SignIn from '../Components/SignIn/SignIn';
import JobDetail from '../Components/JobDetail/JobDetail';
import JobsContainer from '../Components/JobsContainer/JobsContainer';
import { SavedJobDetail } from '../Components/SavedJobCard/SavedJobDetail';

export const history = createHistory();

export const AppRouter = ({ jobs, savedJobs }) => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/sign-in" exact component={SignIn} />
      <Route path="/saved-jobs" exact  component={JobsContainer} />
      <Route path="/job/:id" exact render={({ match }) => {
        const job = jobs.find(job => job.id === match.params.id);
        return (
          <JobDetail {...job}/>
        );
      }} />
      <Route path="/saved-jobs/:id" exact render={({ match }) => {
        const job = savedJobs.find(job => job.id === match.params.id);
        console.log(job);
        return (
          <SavedJobDetail {...job}/>
        );
      }} />
    </Switch>
  </Router>
);

const mapStateToProps = state => ({
  jobs: state.githubJobs,
  savedJobs: state.savedJobs
});

export default connect(mapStateToProps)(AppRouter);
