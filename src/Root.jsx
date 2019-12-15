import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';

import styled from 'styled-components';

// lazy-load
const Home = lazy(() => import('./pages/Home'));
const Register = lazy(() => import('./pages/Register'));
const Oauth = lazy(() => import('./pages/Oauth'));
const AddForm = lazy(() => import('./pages/AddForm'));
const TeamDetail = lazy(() => import('./pages/TeamDetail'));
const TeamCreate = lazy(() => import('./pages/TeamCreate'));

// 임시로 설문을 받기 위한 컴포넌트 생성
const TopBanner = styled.div`
  width: 100%;
  font-size: 0.9rem;
  color: #fff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
  padding: 15px 0;
  background: linear-gradient(
      133deg,
      rgba(95, 118, 243, 0.7),
      rgba(132, 94, 247, 0.7)
    ),
    url('https://cdn.pixabay.com/photo/2016/03/09/09/14/books-1245690_1280.jpg')
      center;

  a {
    color: #8ce99a;
  }
`;

const Root = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <TopBanner className="display-flex justify-content-center align-item-center">
        페이지에 대한 평가를 마음껏 남겨주세요!
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScwdDfdkuHQ9AO2z5vvQ1AX_Vz-8_3OaAuDY4m7AKXlF03wwQ/viewform"
          target="_blank"
          className="pl-10"
        >
          구글 폼
        </a>
      </TopBanner>
      <div className="posr">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/oauth" component={Oauth} />
          <Route exact path="/team/:teamId" component={TeamDetail} />
          <Route exact path="/addForm" component={AddForm} />
          <Route exact path="/teamCreate" component={TeamCreate} />
        </Switch>
        <Footer />
      </div>
    </Suspense>
  </Router>
);

export default Root;
