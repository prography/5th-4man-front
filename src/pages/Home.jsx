import React from 'react';
import Banner from 'components/Banner';
import ListContainer from 'containers/ListContainer';
import CreateBannerContainer from 'containers/CreateBannerContainer';

const Home = () => {
  return (
    <div className="home-wrap">
      <Banner />
      <div className="home-list-wrap">
        <section className="list-section">
          <div className="container">
            <CreateBannerContainer />
            <div className="display-flex flex-direction-row justify-content-space-between content-title-aria">
              <div className="section-title">
                <h2>최근 일주일 인기 팀</h2>
                <p className="text-light">
                  지금 개같하에서 가장 인기있는 팀들을 모아놨어요!
                </p>
              </div>
            </div>
            <ListContainer type="popular" />
          </div>
        </section>
        <section className="list-section">
          <div className="container">
            <div className="display-flex flex-direction-row justify-content-space-between content-title-aria">
              <div className="section-title">
                <h2>개같하 신규 팀</h2>
                <p className="text-light">
                  만들어진지 얼마 안된 따끈따근한 팀들이에요!
                </p>
              </div>
            </div>
            <ListContainer type="recent" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
