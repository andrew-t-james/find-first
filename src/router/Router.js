import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from '../Components/App/App';
import Footer from '../Components/Footer/Footer';

const AppRouter = () => (
  <BrowserRouter>
    <div className="grid-container">
      <header className="header"><h1>header</h1></header>
      <Switch>
        <Route path="/" exact component={App} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;
