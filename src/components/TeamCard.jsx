import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon } from 'antd';
import * as moment from 'moment';

import CardImage from 'components/CardImage';
import Progress from 'components/Progress';

const TeamCard = props => {
  const { item } = props;

  // 팀 카드 이미지
  const CardImageWrap = (
    <div className="card-image-content posr">
      <CardImage animation toUrl={`/team/${item.id}`} imageUrl={item.image} />
      <Progress max={10} current={7} />
    </div>
  );

  return (
    <Card
      className="no-padding-card team-card mb-15"
      hoverable
      cover={CardImageWrap}
    >
      <div className="team-card-meta">
        <div className="content-header">
          <Link
            to="#"
            className="leader-name display-inline-block main-color-blue"
          >
            By. {item.leader.nickname}
          </Link>
          <h3 className="text-bold">{item.title}</h3>

          <p className="description">{item.description}</p>
        </div>
        <p className="end-date">
          마감일: {moment(item.end_date).format('YYYY-MM-DD')}{' '}
          {/* <span className="text-bold main-color-blue pl-10">D-{10}</span> */}
        </p>
        <div className="card-counts">
          <div className="display-flex justify-content-space-between">
            <p className="no-margin">
              <span>좋아요 {item.like_count}</span>∙<span>댓글 15</span>
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
