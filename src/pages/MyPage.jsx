import React from 'react';
import UserDetailContainer from 'containers/UserDetailContainer';
import UserTeamListContainer from 'containers/UserTeamListContainer';
import styled from 'styled-components';

import { Link, Route } from 'react-router-dom';

import { Menu, Icon, Row, Col, PageHeader } from 'antd';

const { SubMenu } = Menu;

const MyPageWrapper = styled.div`
  padding: 60px 0;
`;

const RightContent = styled.div`
  min-height: 700px;
`;

const MenuTitle = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  border-bottom: 1px solid #efefef;
  padding: 50px 20px 15px;
`;

const MyPage = ({ match }) => {
  const [, , menuType] = match.path.split('/');

  return (
    <div className="mypage-wrap">
      <MyPageWrapper>
        <div className="container">
          <Row gutter={60}>
            <Col md={24} xl={6} className="left-content pb-10">
              <UserDetailContainer />
              <MenuTitle>나의 개같하</MenuTitle>
              <Menu
                mode="inline"
                selectedKeys={[
                  `${menuType || 'application'}_${match.params.sortby ||
                    'all'}`,
                ]}
                defaultOpenKeys={['application', 'own']}
                className="mb-20"
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
                  <Menu.Item key="application_all">
                    <Link to="/mypage/application/all">전체</Link>
                  </Menu.Item>
                </SubMenu>
                <SubMenu
                  key="own"
                  title={
                    <span>
                      <Icon type="user" />
                      <span>생성한 팀</span>
                    </span>
                  }
                >
                  <Menu.Item key="own_all">
                    <Link to="/mypage/own">전체</Link>
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Col>
            <Col md={24} xl={18}>
              <RightContent>
                <PageHeader
                  className="no-padding pb-20"
                  title="팀 리스트"
                  subTitle="너 내 동료가 돼라"
                />
                <Route
                  exact
                  path="/mypage"
                  render={() => (
                    <UserTeamListContainer teamType="application" />
                  )}
                />
                <Route
                  path="/mypage/application/:sortby"
                  render={() => (
                    <UserTeamListContainer teamType="application" />
                  )}
                />
                <Route
                  path="/mypage/own"
                  render={() => <UserTeamListContainer teamType="own" />}
                />
              </RightContent>
            </Col>
          </Row>
        </div>
      </MyPageWrapper>
    </div>
  );
};

export default MyPage;
