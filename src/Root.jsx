import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Header from 'components/Header';

// lazy-load
const Home = lazy(() => import('./pages/Home'));
const Register = lazy(() => import('./pages/Register'));

const Root = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Suspense>
  </Router>
);

export default Root;
