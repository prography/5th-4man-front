import React from 'react';
import ListContainer from 'containers/ListContainer';

import Banner from 'components/Banner';

const Home = () => {
  return (
    <>
      <Banner />
      <section id="content">
        <div className="container">
          <div className="display-flex flex-direction-column content-title-aria">
            <h2 className="text-bold">카테고리별 인기 팀</h2>
            <p className="text-light">
              각각 카테고리별로 인기있는 팀들을 모아놨어요!
            </p>
            <ul className="category-navigation">
              <li className="category-link">ReactJS</li>
              <li className="category-link">AngularJS</li>
              <li className="category-link">VueJS</li>
              <li className="category-link">Python</li>
            </ul>
          </div>
          <ListContainer />
        </div>
      </section>
    </>
  );
};

export default Home;
