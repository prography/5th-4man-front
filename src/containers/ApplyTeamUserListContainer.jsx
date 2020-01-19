import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as teamActions from '../store/reducers/team';
import ApplyUserTeamList from '../components/ApplyUserTeamList';
import { Row, Col } from 'antd';

const ApplyTeamUserListContainer = ({ data }) => {
  const { applyUser } = useSelector(state => state.team);
  const dispatch = useDispatch();

  const getApplyTeamUserList = useCallback(() => {
    dispatch(teamActions.getRecentApplyTeamUserList({ id: data.id }));
  }, [dispatch]);

  useEffect(() => {
    getApplyTeamUserList();
  }, []);

  return !applyUser.loading ? (
    <Row gutter={5}>
      <Col md={24} xl={12}>
        <ApplyUserTeamList {...applyUser} />
      </Col>
      <Col md={24} xl={12}></Col>
    </Row>
  ) : (
    <div></div>
  );
};

export default ApplyTeamUserListContainer;
