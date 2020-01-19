import React from 'react';
import styled from 'styled-components';
import * as moment from 'moment';
import { Link } from 'react-router-dom';

import CardImage from 'components/CardImage';

import { Row, Col, Tag, Button } from 'antd';

const RowItem = styled.div`
  width: 100%;
  background-color: #fff;
  &:not(:last-child) {
    border-bottom: 1px solid #efefef;
  }
  overflow: hidden;
  padding: 20px 0;

  .image-wrap {
    border-radius: 10px;
    overflow: hidden;
  }

  .team-content {
    padding: 0 1rem;

    h2 > a {
      color: #333;
      font-family: Noto Sans Medium;
      font-size: 1.125rem;
      margin-bottom: 10px;
      margin-right: 5px;

      &:hover {
        text-decoration: underline;
      }
    }

    p {
      color: #888;
      font-size: 0.825rem;
      margin: 0;
    }
  }
`;

const TeamMeta = styled.div`
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #efefef;
`;

const Description = styled.p`
  font-size: 0.825rem;
  line-height: 20px;
  letter-spacing: -0.2px;
  height: 40px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow-wrap: break-word;
  color: #4c657d;
  margin: 0px 0px 0px;
  overflow: hidden;
`;

const statusLabel = {
  승인대기: 'blue',
  승인거절: 'red',
  승인완료: 'green',
  만료: 'orange',
};

const TeamRow = data => {
  return (
    <RowItem>
      <Row className="display-flex flex-direction-row">
        <Col span={6} className="team-image-wrap">
          <div className="image-wrap">
            <CardImage
              imageUrl={data.image}
              toUrl={`/team/${data.id}`}
              animation
            />
          </div>
        </Col>
        <Col span={18}>
          <div className="team-content">
            <div className="pt-10">
              <h2>
                <Link to={`/team/${data.id}`}>{data.title}</Link>
                {data.teamType === 'application' && (
                  <Tag color={statusLabel[data.application_status]}>
                    {data.application_status}
                  </Tag>
                )}
                {data.teamType === 'own' && (
                  <Button
                    type="link"
                    icon="team"
                    onClick={() => data.handleModal(data.id)}
                  >
                    신청자 관리
                  </Button>
                )}
              </h2>
              <TeamMeta>
                <Description>{data.description}</Description>
              </TeamMeta>
              <p>
                신청일자: {moment(data.created_at).format('YYYY-MM-DD')}{' '}
                &nbsp;&nbsp; 마감일자:{' '}
                {moment(data.end_date).format('YYYY-MM-DD')} <br />
                좋아요 {data.like_count} ∙ 댓글 {data.comments_count}
              </p>
              <p className="no-margin" />
            </div>
          </div>
        </Col>
      </Row>
    </RowItem>
  );
};

export default TeamRow;
