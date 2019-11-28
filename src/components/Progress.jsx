import React from 'react';
import styled from 'styled-components';

const Progress = ({ max, current }) => {
  const ProgressBar = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(133deg, #5f76f3, #845ef7);
    height: 100%;
    width: ${(current / max) * 100}%;
    z-index: 9;
  `;
  return (
    <div className="progress-wrap">
      <div className="progress-outer">
        <div className="progress-text display-flex justify-content-space-between">
          <p className="join-description">
            총원 {max}명중 {current}명이 함께했어요!
          </p>
          <p className="join-count">
            {current}/{max}
          </p>
        </div>
        <ProgressBar />
      </div>
    </div>
  );
};

export default Progress;
