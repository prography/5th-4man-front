import React from 'react';
import { Link } from 'react-router-dom';
import ListContainer from 'containers/ListContainer';

import Banner from 'components/Banner';

const Home = () => {
  return (
    <>
      <Banner />
      <section id="content">
        <div className="container">
          <div className="display-flex flex-direction-row justify-content-space-between content-title-aria">
            <div className="section-title">
              <h2>카테고리별 인기 팀</h2>
              <p className="text-light">
                각각 카테고리별로 인기있는 팀들을 모아놨어요!
              </p>
            </div>
            <ul className="category-navigation">
              <li className="category-link active">
                <Link to="#">ReactJS</Link>
              </li>
              <li className="category-link">
                <Link to="#">AngularJS</Link>
              </li>
              <li className="category-link">
                <Link to="#">VueJS</Link>
              </li>
              <li className="category-link">
                <Link to="#">Python</Link>
              </li>
            </ul>
          </div>
          <ListContainer />
        </div>
      </section>
    </>
  );
};

export default Home;
