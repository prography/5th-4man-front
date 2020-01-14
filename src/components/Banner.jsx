import React from 'react';
import TagSearch from 'containers/TagSearchCotainer';

const Banner = () => {
  return (
    <section id="banner">
      <div className="bannerBg">
        <div className="container display-flex">
          <div className="stack-choice-area display-flex flex-direction-column justify-content-center align-items-center">
            {/* <h2 className="text-bold">서비스 준비 중입니다 🤔</h2> */}
            <div style={{ textAlign: 'left' }}>
              관련 태그를 추가하고 검색해보세요.
            </div>
            <TagSearch />
          </div>
          <div className="banner-title">
            <h2 className="text-light">
              함께 개발할 사람,
              <br /> 3초만에 알아보세요
            </h2>
            <p>
              같이 개발할 사람 찾기가 어려웠다면
              <br />
              개같하로 나와 FIT이 맞는 사람을 찾아보세요!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
