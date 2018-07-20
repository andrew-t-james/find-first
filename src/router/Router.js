import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../Components/Home/Home';
import Dashboard from '../Components/Dashboard/Dashboard';
import SignUp from '../Components/SignUp/SignUp';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/sign-up" exact component={SignUp} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
