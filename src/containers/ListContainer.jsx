import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row, Icon } from 'antd';

import SkeletonCard from 'components/SkeletonCard';
import TeamCard from 'components/TeamCard';

import * as teamActions from '../store/reducers/team';

const ListContainer = ({ type = 'recent' }) => {
  const actions = {
    popular: teamActions.getPopularListAction,
    recent: teamActions.getRecentListAction,
  };

  const team = useSelector(state => state.team);
  const currentData = team[type];

  const dispatch = useDispatch();
  const getList = useCallback(() => {
    dispatch(actions[type]());
  }, [dispatch]);

  useEffect(() => {
    getList();
  }, []);

  return (
    <div>
      <Row gutter={16}>
        {currentData.list.map(item => (
          <Col xs={24} md={12} lg={8} xl={6} key={item.id}>
            <TeamCard item={item} />
          </Col>
        ))}
      </Row>
      {currentData.loading ? (
        <LoadingComponent />
      ) : (
        <div className="display-flex justify-content-center more-loading-team">
          <button type="button" onClick={getList}>
            <span className="pr-10">팀 더보기</span>
            <Icon type="arrow-down" />
          </button>
        </div>
      )}
    </div>
  );
};

// 로딩 컴포넌트
const LoadingComponent = () => {
  // skeleton 4개만 보여줌
  const showCount = 4;

  return (
    <>
      <Row gutter={16}>
        {[...Array(showCount)].map((val, key) => (
          <Col key={key} xs={24} md={12} lg={8} xl={6}>
            <SkeletonCard />
          </Col>
        ))}
      </Row>
      <div className="display-flex justify-content-center more-loading-team">
        <Icon type="loading" className="loading-icon" />
      </div>
    </>
  );
};

export default ListContainer;
