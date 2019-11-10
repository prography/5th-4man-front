import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row } from 'antd';

import SkeletonCard from 'components/SkeletonCard';
import TeamCard from 'components/TeamCard';

import * as teamActions from '../store/reducers/team';

const ListContainer = () => {
  const { isLoading, list } = useSelector(state => state.team);
  const dispatch = useDispatch();
  const getList = useCallback(() => {
    dispatch(teamActions.getTeamListAction());
  }, [dispatch]);

  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      <div>
        <Row gutter={16}>
          {isLoading && (
            <>
              <Col xs={24} md={12} lg={8} xl={6}>
                <SkeletonCard />
              </Col>
              <Col xs={24} md={12} lg={8} xl={6}>
                <SkeletonCard />
              </Col>
              <Col xs={24} md={12} lg={8} xl={6}>
                <SkeletonCard />
              </Col>
              <Col xs={24} md={12} lg={8} xl={6}>
                <SkeletonCard />
              </Col>
            </>
          )}
          {list.map((item, key) => (
            <Col xs={24} md={12} lg={8} xl={6}>
              <TeamCard item={item} key={key} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};
export default ListContainer;
