import React from 'react';
import styled from 'styled-components';

import CardImage from 'components/CardImage';

import { Row, Col, Tag } from 'antd';

const RowItem = styled.div`
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #efefef;
  overflow: hidden;
  padding: 20px 0;

  .image-wrap {
    border-radius: 10px;
    overflow: hidden;
  }

  .team-content {
    padding: 0 1rem;

    h2 {
      font-family: Noto Sans Medium;
      font-size: 1.125rem;
      margin-bottom: 10px;
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

const TeamRow = data => {
  return (
    <RowItem>
      <Row className="display-flex flex-direction-row">
        <Col span={6} className="team-image-wrap">
          <div className="image-wrap">
            <CardImage imageUrl={data.image} animation />
          </div>
        </Col>
        <Col span={18}>
          <div className="team-content">
            <div className="pt-10">
              <h2>
                {data.title} <Tag color="blue">승인 대기</Tag>
              </h2>
              <TeamMeta>
                <Description>{data.description}</Description>
              </TeamMeta>
              <p>
                신청일자: 2019-12-31 &nbsp;&nbsp; 마감일자: 2020-01-31 <br />
                좋아요 10 ∙ 댓글 30
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
