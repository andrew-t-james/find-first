import React from 'react';
import { Router, Route, Switch, withRouter } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { connect } from 'react-redux';

import Home from '../Components/Home/Home';
import Dashboard from '../Components/Dashboard/Dashboard';
import SignIn from '../Components/SignIn/SignIn';
import JobDetail from '../Components/JobDetail/JobDetail';

export const history = createHistory();

export const AppRouter = ({ jobs }) => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/sign-in" exact component={SignIn} />
      <Route path="/job/:id" render={({ match }) => {
        const job = jobs.find(job => job.id === match.params.id);
        return (
          <JobDetail {...job}/>
        );
      }} />
    </Switch>
  </Router>
);

const mapStateToProps = state => ({
  jobs: state.githubJobs
});

export default connect(mapStateToProps)(AppRouter);
