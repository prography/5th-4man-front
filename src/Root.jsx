import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Header from 'components/Header';

// lazy-load
const Home = lazy(() => import('./pages/Home'));

const Root = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Suspense>
  </Router>
);

export default Root;
