import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row, Icon } from 'antd';

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
          {list.map(item => (
            <Col xs={24} md={12} lg={8} xl={6} key={item.id}>
              <TeamCard item={item} />
            </Col>
          ))}
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
        </Row>

        <div className="display-flex justify-content-center more-loading-team">
          {!isLoading ? (
            <button type="button" onClick={getList}>
              <span className="pr-10">팀 더보기</span>
              <Icon type="caret-down" />
            </button>
          ) : (
            <Icon type="loading" className="loading-icon" />
          )}
        </div>
      </div>
    </>
  );
};
export default ListContainer;
