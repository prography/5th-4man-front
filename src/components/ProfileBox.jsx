import React from 'react';
import styled from 'styled-components';

import ProfileImage from 'components/ProfileImage';

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

const ProfileBox = ({ name, url }) => {
  return (
    <ProfileWrap>
      <div className="profile-image-box">
        <div className="profile-image">
          <ProfileImage size="large" url={url} />
        </div>
        <h3>{name}</h3>
      </div>

      <div className="menu-title">나의 개같하</div>
    </ProfileWrap>
  );
};

export default ProfileBox;
