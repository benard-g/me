import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import CvPage from '../pages/cv/CvPage';
import HomePage from '../pages/home/HomePage';

const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>

      <Route path="/curriculum-vitae">
        <CvPage />
      </Route>

      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
