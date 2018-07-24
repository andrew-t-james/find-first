import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../Components/Home/Home';
import Dashboard from '../Components/Dashboard/Dashboard';
import SignIn from '../Components/SignIn/SignIn';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/sign-in" exact component={SignIn} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
