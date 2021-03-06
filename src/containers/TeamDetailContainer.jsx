import React, { useEffect, useCallback, useMemo, memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Col, Row, Icon, Tabs, Modal } from 'antd';
import TagItem from 'components/TagItem';
import CardImage from 'components/CardImage';
import CommentContainer from 'containers/CommentContainer';
import { OPEN_MODAL } from '../store/reducers/modal';
import * as teamDetailActions from '../store/reducers/teamDetail';
import QRCode from 'qrcode.react';

const TeamDetailContainer = ({ team_id }) => {
  const { team, loading } = useSelector(state => state.teamDetail);
  const { isLoggedIn } = useSelector(state => state.user);
  const [visible, setVisible] = useState(false);
  const {
    title,
    description,
    image,
    like_count,
    tags,
    leader,
    application_status,
    chat_url,
  } = team;

  const dispatch = useDispatch();
  const getData = useCallback(() => {
    dispatch(teamDetailActions.getTeamDetailAction(team_id));
  }, [dispatch, team_id]);

  const applyBtnMsg = useMemo(() => {
    return isLoggedIn ? '신청하기' : '로그인 후 신청해주세요';
  }, [isLoggedIn]);

  const applyBtnType = useMemo(() => {
    return isLoggedIn ? 'application' : 'login';
  }, [isLoggedIn]);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = e => {
    setVisible(false);
  };

  const handleCancel = e => {
    setVisible(false);
  };

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
                  {tags.map((tag, idx) => (
                    <TagItem
                      key={idx}
                      tag={tag}
                      style={{
                        fontFamily: 'Noto Sans Light',
                        borderRadius: '25px',
                        color: 'white',
                        backgroundImage:
                          'linear-gradient(133deg, #5f76f3, #845ef7)',
                      }}
                    />
                  ))}
                </div>
                <Row gutter={10} className="mb-10">
                  <Col span={12}>
                    <button type="button" className="display-block sub-btn">
                      <Icon type="heart" className="heart-icon pr-10" />
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
                  {application_status === '' ? (
                    <button
                      type="button"
                      className="apply-btn display-block"
                      onClick={() =>
                        dispatch({
                          type: OPEN_MODAL,
                          payload: { type: applyBtnType },
                        })
                      }
                    >
                      {applyBtnMsg}
                    </button>
                  ) : application_status === '승인완료' ? (
                    <button
                      type="button"
                      className="apply-btn display-block"
                      onClick={showModal}
                    >
                      오픈채팅 링크 확인
                    </button>
                  ) : application_status === '승인거절' ? (
                    <button type="button" className="apply-btn display-block">
                      승인거절
                    </button>
                  ) : (
                    <button type="button" className="apply-btn display-block">
                      승인대기
                    </button>
                  )}
                  <Modal
                    title="오픈채팅 링크"
                    visible={visible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    okText="확인"
                    cancelText="닫기"
                  >
                    {chat_url === '' ? (
                      <></>
                    ) : (
                      <>
                        <QRCode value={chat_url} />
                        <br />
                        <a href={chat_url}>{chat_url}</a>
                      </>
                    )}
                  </Modal>
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
