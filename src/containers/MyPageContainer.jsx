import React from 'react';
import styled from 'styled-components';

import ListContainer from 'containers/ListContainer';
import MyTeamListContainer from 'containers/MyTeamListContainer';

import { Tabs, Icon } from 'antd';
import { useSelector } from 'react-redux';

const { TabPane } = Tabs;

const Container = styled.div`
  display: flex;
  padding: 60px 0 0;
`;

const ProfileImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 1px 2px 5px 0 rgba(0, 0, 0, 0.5);

  img {
    display: block;
    width: 100%;
  }
`;

const ProfileInfo = styled.div`
  padding-left: 20px;
  flex: 2;

  h2 {
    font-size: 1.5rem;
    font-family: Noto Sans Medium;
    color: #333;
    margin-bottom: 2px;
  }

  p {
    font-size: 0.825rem;
    color: #5f76f3;
    margin-bottom: 10px;
  }

  .introduce {
    border-top: 1px solid #efefef;
    padding-top: 10px;

    p {
      color: #999;
      font-size: 0.825rem;
    }
  }
`;

const MyPageContainer = () => {
  const { username, nickname, introduction, image } = useSelector(
    state => state.user,
  );

  return (
    <>
      <div className="container">
        <Container>
          <ProfileImage>
            <img
              src="https://avatars1.githubusercontent.com/u/23019698?s=460&v=4"
              alt="profile_img"
            />
          </ProfileImage>
          <ProfileInfo>
            <h2>{nickname}</h2>
            <p>@{username}</p>
            <div className="introduce">
              <p>한줄소개: {introduction}</p>
            </div>
          </ProfileInfo>
        </Container>
        <Container>
          <div className="mypage-tab pb-20" style={{ width: '100%' }}>
            <Tabs type="card">
              <TabPane
                tab={
                  <span>
                    <Icon type="team" />
                    내가 신청한 팀
                  </span>
                }
                key="1"
              >
                <MyTeamListContainer />
              </TabPane>
              <TabPane
                tab={
                  <span>
                    <Icon type="user-add" />
                    내가 만든 팀
                  </span>
                }
                key="2"
              >
                내가 만든 팀 리스트
              </TabPane>
              {/* <TabPane
                tab={
                  <span>
                    <Icon type="heart" />
                    좋아요한 팀
                  </span>
                }
                key="3"
              >
                즐겨찾기 리스트
              </TabPane> */}
            </Tabs>
          </div>
        </Container>
      </div>
    </>
  );
};

export default MyPageContainer;
