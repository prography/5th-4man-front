import React, { memo } from 'react';
import styled from 'styled-components';
import { Card, Icon } from 'antd';

const TeamCard = props => {
  const { item } = props;

  // 넘어오는 props에 따라서 프로그레스바 길이가 달라져서 styled-component로 작업
  const ProgressBar = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(133deg, #5f76f3, #845ef7);
    height: 100%;
    width: 60%;
    z-index: 9;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
  `;

  // 팀 카드 이미지
  const cardImage = (
    <span className="card-image-wrap">
      <img src={item.img} alt="team-img" />
      <div className="progress-wrap">
        <div className="progress-outer">
          <div className="progress-text display-flex justify-content-space-between">
            <p className="join-description">총원 10명중 6명이 함께했어요!</p>
            <p className="join-count">6/10</p>
          </div>
          <ProgressBar />
        </div>
      </div>
    </span>
  );

  return (
    <Card
      className="no-padding-card team-card"
      style={{ borderRadius: 8, marginBottom: 15 }}
      hoverable
      cover={cardImage}
    >
      <div className="team-card-meta">
        <h3 className="text-bold text-overflow-ellipsis">{item.title}</h3>
        <p className="description">{item.description}</p>
        <div className="card-counts">
          <div className="display-flex justify-content-space-between">
            <p className="no-margin">
              <span>좋아요 10</span>∙<span>댓글 15</span>∙<span>조회 450</span>
            </p>
            <div>
              <Icon type="heart" className="card-icon card-icon-heart pr-10" />
              <Icon type="share-alt" className="card-icon card-icon-share" />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

// memo를 사용하면 이전이랑 같은 props가 Memoizing된 내용을 재사용함
export default memo(TeamCard);
