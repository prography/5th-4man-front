import React from 'react';
import { Col, Row, Icon } from 'antd';

import MyTeamItem from 'components/MyTeamItem';

const MyTeamListContainer = () => {
  return (
    <Row gutter={16}>
      <Col xs={24}>
        <MyTeamItem />
        <MyTeamItem />
        <MyTeamItem />
        <MyTeamItem />
        <MyTeamItem />
        <MyTeamItem />
        <MyTeamItem />
      </Col>
    </Row>
  );
};

export default MyTeamListContainer;
