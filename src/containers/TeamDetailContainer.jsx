import React, { useEffect, useCallback, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Col, Row, Icon, Tabs, Tag } from 'antd';
import swal from 'sweetalert';

import CardImage from 'components/CardImage';
import CommentContainer from 'containers/CommentContainer';

import * as teamDetailActions from '../store/reducers/teamDetail';

const TeamDetailContainer = ({ teamId }) => {
  const { team, loading } = useSelector(state => state.teamDetail);
  const {
    id,
    title,
    description,
    image,
    like_count,
    tags,
    leader,
    parent_comments,
    comments_count,
  } = team;

  const dispatch = useDispatch();
  const getData = useCallback(() => {
    dispatch(teamDetailActions.getTeamDetailAction(teamId));
  }, []);

  const { TabPane } = Tabs;

  useEffect(() => {
    getData();
  }, []);

  return !loading ? (
    <div id="team-detail">
      <div className="container">
        <Row gutter={16}>
          <Col md={24} xl={16} className="left-content pb-10">
            <CardImage imageUrl={image} />
            <div className="tab-wrap">
              <Tabs defaultActiveKey="1">
                <TabPane tab={<span>소개</span>} key="1">
                  <div className="tab-1-content">
                    <div className="team-info-wrap">
                      <h2 className="text-bold">{title}</h2>
                      {description}
                    </div>
                  </div>
                  <CommentContainer teamId={teamId} />
                </TabPane>
              </Tabs>
            </div>
          </Col>
          <Col md={24} xl={8} className="right-content pb-10">
            <div className="fix-menu-wrap">
              <div className="fix-menu">
                <Link
                  to="#"
                  className="leader-name display-inline-block main-color-blue"
                >
                  By. {leader.nickname}
                </Link>
                <h2 className="text-bold">{title}</h2>
                <div className="tag-wrap mb-10 pb-20">
                  {tags.map((o, idx) => (
                    <Tag key={idx} color="geekblue">
                      {o}
                    </Tag>
                  ))}
                </div>
                <Row gutter={10} className="mb-10">
                  <Col span={12}>
                    <button type="button" className="display-block sub-btn">
                      <Icon
                        type="heart"
                        className="heart-icon pr-10"
                        // theme="filled"
                      />
                      {like_count}
                    </button>
                  </Col>
                  <Col span={12}>
                    <button type="button" className="display-block sub-btn">
                      <Icon type="share-alt" className="pr-10" />
                      공유하기
                    </button>
                  </Col>
                </Row>
                <div>
                  <button
                    type="button"
                    className="apply-btn display-block"
                    onClick={() =>
                      swal(
                        '신청 완료!',
                        '축하드립니다! 팀 신청이 완료 되었습니다. (사실 안됨)',
                        'success',
                      )
                    }
                  >
                    신청하기
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  ) : (
    <div className="display-flex align-item-center justify-content-center p-20">
      <Icon type="loading" style={{ color: '#5f76f3' }} />
    </div>
  );
};

export default memo(TeamDetailContainer);
