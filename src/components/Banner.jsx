import React from 'react';
import TagSearch from 'containers/TagSearchCotainer';

const Banner = () => {
  return (
    <section id="banner">
      <div className="bannerBg">
        <div className="container display-flex">
          <div className="stack-choice-area">
            <div>
              <TagSearch />
            </div>
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
