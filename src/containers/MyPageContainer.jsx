import React from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';

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

const MyPageContainer = () => {
  return (
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
  );
};

export default MyPageContainer;
