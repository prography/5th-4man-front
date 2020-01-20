import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as teamActions from '../store/reducers/team';
import ApplyUserTeamList from '../components/ApplyUserTeamList';
import ApplyUserTeamDetail from '../components/ApplyUserTeamDetail';
import { Row, Col } from 'antd';

const ApplyTeamUserListContainer = ({ data }) => {
  const { applyUser } = useSelector(state => state.team);
  const [rowIndex, setRowIndex] = useState(-1);
  const dispatch = useDispatch();

  const getApplyTeamUserList = useCallback(() => {
    dispatch(teamActions.getRecentApplyTeamUserList({ id: data.id }));
  }, [dispatch]);

  const handleUserDetail = index => {
    setRowIndex(index);
  };

  useEffect(() => {
    getApplyTeamUserList();
  }, []);

  return !applyUser.loading ? (
    <Row gutter={5} className="p-20">
      <Col md={24} xl={12}>
        <ApplyUserTeamList {...applyUser} handleUserDetail={handleUserDetail} />
      </Col>
      <Col md={24} xl={12}>
        <ApplyUserTeamDetail {...applyUser} rowIndex={rowIndex} />
      </Col>
    </Row>
  ) : (
    <div></div>
  );
};

export default ApplyTeamUserListContainer;
