import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Oauth from './pages/Oauth';

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
        <Route exact path="/oauth" component={Oauth} />
      </Switch>
      <Footer />
    </Suspense>
  </Router>
);

export default Root;
