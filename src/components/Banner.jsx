import React from 'react';
import TagSearch from 'containers/MainSearchCotainer';

const Banner = () => {
  return (
    <section id="banner">
      <div className="bannerBg">
        <div className="container display-flex">
          <div className="stack-choice-area display-flex flex-direction-column justify-content-center align-items-center">
            {/* <h2 className="text-bold">서비스 준비 중입니다 🤔</h2> */}
            <div style={{textAlign:'center'}}>
                <img src = { process . env . PUBLIC_URL + '/images/tagSearchImage.png' }  width="20%" height="100%" alt="태그 그림"/>
            </div>
            <div style={{fontSize:'30px', marginTop:'4%'}}>
              태그 검색
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
