import React from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from '../Components/Home/Home';
import Dashboard from '../Components/Dashboard/Dashboard';
import SignIn from '../Components/SignIn/SignIn';
import JobDetail from '../Components/JobDetail/JobDetail';


export const AppRouter = ({ jobs }) => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/sign-in" exact component={SignIn} />
      <Route path="/job/:id" render={({ match }) => {
        const job = jobs.find(job => job.id === Number(match.params.id));
        return (
          <div>
            <JobDetail {...job}/>
          </div>
        );
      }} />
    </Switch>
  </BrowserRouter>
);

const mapStateToProps = state => ({
  jobs: state.githubJobs
});

export default connect(mapStateToProps)(AppRouter);
