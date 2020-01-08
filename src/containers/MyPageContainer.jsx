import React from 'react';
import styled from 'styled-components';

import { Menu, Icon, Row, Col, PageHeader } from 'antd';
import { useSelector } from 'react-redux';

const { SubMenu } = Menu;

const MyPageWrapper = styled.div`
  padding: 60px 0;
`;

const ProfileWrap = styled.div`
  .profile-image-box {
    padding: 0 40px;
    text-align: center;

    .profile-image {
      border-radius: 50%;
      width: 200px;
      height: 200px;
      border: 1px solid #efefef;
      overflow: hidden;
      margin-bottom: 20px;

      img {
        width: 100%;
      }
    }
  }

  .menu-title {
    font-size: 1.25rem;
    font-weight: bold;
    border-bottom: 1px solid #efefef;
    padding: 50px 20px 15px;
  }

  .username {
    color: blue;
    font-size: 1rem;
  }
`;

const MenuWrapper = styled.div``;

const MyPageTitle = styled.h2`
  border-bottom: 1px solid #ddd;
  padding-bottom: 30px;
`;

const MyPageContainer = () => {
  return (
    <MyPageWrapper>
      <div className="container">
        <Row gutter={16}>
          <Col md={24} xl={6} className="left-content pb-10">
            <ProfileWrap>
              <div className="profile-image-box">
                <div className="profile-image">
                  <img
                    src="https://avatars1.githubusercontent.com/u/23019698?s=460&v=4"
                    alt="profile-image"
                  />
                </div>
                <h3>정상협</h3>
              </div>

              <div className="menu-title">나의 개같하</div>
            </ProfileWrap>
            <MenuWrapper>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
              >
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="user" />
                      <span>신청한 팀</span>
                    </span>
                  }
                >
                  <Menu.Item key="0">전체</Menu.Item>
                  <Menu.Item key="1">승인 완료</Menu.Item>
                  <Menu.Item key="2">승인 대기</Menu.Item>
                  <Menu.Item key="3">승인 거절</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={
                    <span>
                      <Icon type="user" />
                      <span>생성한 팀</span>
                    </span>
                  }
                >
                  <Menu.Item key="4">모집 중</Menu.Item>
                  <Menu.Item key="5">마감 완료</Menu.Item>
                </SubMenu>
              </Menu>
            </MenuWrapper>
          </Col>
          <Col md={24} xl={18} className="left-content pb-10">
            <PageHeader
              style={{
                borderBottom: '1px solid #efefef',
                padding: 0,
                paddingBottom: 20,
              }}
              title="신청한 팀"
              subTitle="승인 완료"
            />
          </Col>
        </Row>
      </div>
    </MyPageWrapper>
  );
};

export default MyPageContainer;
