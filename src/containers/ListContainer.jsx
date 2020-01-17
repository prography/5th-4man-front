import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row, Icon, Dropdown, Menu } from 'antd';

import SkeletonCard from 'components/SkeletonCard';
import TeamCard from 'components/TeamCard';

import * as teamActions from '../store/reducers/team';

const ListContainer = ({ type = 'recent', tags }) => {
  const actions = {
    popular: teamActions.getPopularListAction,
    recent: teamActions.getRecentListAction,
    search: teamActions.getSearchTeamListAction,
  };
  const team = useSelector(state => state.team);
  const currentData = team[type];
  const dispatch = useDispatch();

  const getList = () => {
    dispatch(actions[type](tags));
  };

  useEffect(() => {
    getList();

    return getList();
  }, [tags]);

  const menu = (
    <Menu>
      <Menu.Item>인기 순</Menu.Item>
      <Menu.Item>최신 순</Menu.Item>
    </Menu>
  );

  return (
    <div>
      {type === 'search' ? (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ margin: '2% 0', justifyContent: 'space-between' }}>
            <span style={{ color: '#5f76f3' }}>{currentData.list.length}</span>
            개 프로젝트가 있습니다.
          </div>
          <div style={{ margin: '2% 0', justifyContent: 'space-between' }}>
            <Dropdown overlay={menu}>
              <div>
                인기 순 <Icon type="down" />
              </div>
            </Dropdown>
          </div>
        </div>
      ) : (
        ''
      )}
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
