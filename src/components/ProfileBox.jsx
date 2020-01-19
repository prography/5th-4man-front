import React from 'react';
import styled from 'styled-components';

import ProfileImage from 'components/ProfileImage';
import { Tag } from 'antd';

const ProfileWrap = styled.div`
  .profile-image-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .profile-image {
      border-radius: 50%;
      width: 200px;
      height: 200px;
      border: 1px solid #efefef;
      overflow: hidden;
      margin-bottom: 20px;

      img {
        width: 198px;
      }
    }

    h3 {
      font-size: 1.5rem;
      span {
        font-size: 0.8rem;
        color: #aaa;
      }
    }

    p {
      font-size: 0.8rem;
    }
  }

  .menu-title {
    font-size: 1.25rem;
    font-weight: bold;
    border-bottom: 1px solid #efefef;
    padding: 50px 20px 15px;
  }
`;

const ProfileBox = ({ username, introduction, nickname, image }) => {
  return (
    <ProfileWrap>
      <div className="profile-image-box">
        <div className="profile-image">
          <ProfileImage size="large" url={image} />
        </div>
        <h3>
          {nickname} <span>@{username}</span>
        </h3>
        <p>{introduction}</p>
      </div>

      <div className="menu-title">나의 개같하</div>
    </ProfileWrap>
  );
};

export default ProfileBox;
