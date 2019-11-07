import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Avatar, Col } from 'antd';

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
    <div>
      {isLoading && <h1>로딩중</h1>}

      <div>
        {list.map((item, key) => (
          <Col span={4}>
            <Card
              style={{ width: 240 }}
              hoverable
              key={key}
              cover={
                <img width="200" height="180" alt="example" src={item.img} />
              }
            >
              <Card.Meta
                avatar={<Avatar>{item.objective}</Avatar>}
                title={item.title}
                description={item.description}
              />
            </Card>
          </Col>
        ))}
      </div>
    </div>
  );
};
export default ListContainer;
