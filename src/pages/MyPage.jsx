import React from 'react';
import ProfileBox from 'components/ProfileBox';
import UserTeamListContainer from 'containers/UserTeamListContainer';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { Menu, Icon, Row, Col } from 'antd';

const { SubMenu } = Menu;

const MyPageWrapper = styled.div`
  padding: 60px 0;
`;

const MyPage = ({ match }) => {
  return (
    <div className="mypage-wrap">
      <MyPageWrapper>
        <div className="container">
          <Row>
            <Col md={24} xl={6} className="left-content pb-10">
              <ProfileBox />
              <Menu
                mode="inline"
                selectedKeys={[match.params.sortby || 'all']}
                defaultOpenKeys={['application', 'made']}
              >
                <SubMenu
                  key="application"
                  title={
                    <span>
                      <Icon type="user" />
                      <span>신청한 팀</span>
                    </span>
                  }
                >
                  <Menu.Item key="all">
                    <Link to="/mypage">전체</Link>
                  </Menu.Item>
                  {/* <Menu.Item key="wait">
                    <Link to="/mypage/application/wait">승인 대기</Link>
                  </Menu.Item>
                  <Menu.Item key="success">
                    <Link to="/mypage/application/success">승인 완료</Link>
                  </Menu.Item>
                  <Menu.Item key="failed">
                    <Link to="/mypage/application/failed">승인 거절</Link>
                  </Menu.Item> */}
                </SubMenu>
                <SubMenu
                  key="made"
                  title={
                    <span>
                      <Icon type="user" />
                      <span>생성한 팀</span>
                    </span>
                  }
                >
                  <Menu.Item key="3">전체</Menu.Item>
                  {/* <Menu.Item key="4">모집 중</Menu.Item>
                  <Menu.Item key="5">마감 완료</Menu.Item> */}
                </SubMenu>
              </Menu>
            </Col>
            <Col md={24} xl={18} className="left-content">
              <UserTeamListContainer />
            </Col>
          </Row>
        </div>
      </MyPageWrapper>
    </div>
  );
};

export default MyPage;
