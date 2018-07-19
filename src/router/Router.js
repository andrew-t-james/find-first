import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Footer from '../Components/Footer/Footer';
import Dashboard from '../Components/Dashboard/Dashboard';

const AppRouter = () => (
  <BrowserRouter>
    <div className="grid-container">
      <header className="header"><h1>header</h1></header>
      <Switch>
        <Route path="/" exact component={Dashboard} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;
