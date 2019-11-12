import React from 'react';
import { Progress, Card } from 'antd';

const TeamCard = props => {
  const { item, key } = props;

  // 팀 카드 이미지
  const cardImage = (
    <span className="card-image-wrap">
      <img src={item.img} alt="team-img" />
    </span>
  );

  return (
    <Card
      className="no-padding-card"
      style={{ borderRadius: 8, marginBottom: 15 }}
      hoverable
      key={key}
      cover={cardImage}
    >
      <div className="team-card-meta">
        <h3 className="text-bold text-overflow-ellipsis">{item.title}</h3>
        <p className="description">{item.description}</p>
        <div className="current-member-wrap">
          <p className="current-member text-bold">
            총원 <span className="text-bold">10</span>명중{' '}
            <span className="text-bold">6</span>명이 함께했어요!
          </p>
          <Progress percent={60} showInfo={false} />
        </div>
        <div className="card-counts">
          <div>
            <span>좋아요 10</span>∙<span>댓글 15</span>∙<span>조회 450</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TeamCard;
