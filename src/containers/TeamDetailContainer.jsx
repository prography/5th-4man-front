import React, { useEffect, useCallback, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Col, Row, Icon, Tabs, Tag } from 'antd';

import CardImage from 'components/CardImage';
import CommentContainer from 'containers/CommentContainer';

import { OPEN_MODAL } from '../store/reducers/modal';

import * as teamDetailActions from '../store/reducers/teamDetail';

const TeamDetailContainer = ({ team_id }) => {
  const { team, loading } = useSelector(state => state.teamDetail);
  const { title, description, image, like_count, tags, leader } = team;

  const dispatch = useDispatch();
  const getData = useCallback(() => {
    dispatch(teamDetailActions.getTeamDetailAction(team_id));
  }, [dispatch, team_id]);

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
                  <CommentContainer team_id={team_id} />
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
                      dispatch({
                        type: OPEN_MODAL,
                        payload: { type: 'application' },
                      })
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
