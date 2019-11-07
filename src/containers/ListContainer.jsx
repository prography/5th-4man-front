import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Avatar, Col, Row } from 'antd';

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
        <Row gutter={16}>
          {list.map((item, key) => (
            <Col span={6}>
              <Card
                style={{ width: 295, borderRadius: 8 }}
                hoverable
                key={key}
                cover={<img height="200" alt="example" src={item.img} />}
              >
                <Card.Meta
                  style={{ height: 255 }}
                  avatar={<Avatar>{item.objective}</Avatar>}
                  title={item.title}
                  description={item.description}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};
export default ListContainer;
