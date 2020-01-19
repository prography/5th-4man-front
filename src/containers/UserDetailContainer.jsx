import React from 'react';
import { useSelector } from 'react-redux';
import ProfileBox from 'components/ProfileBox';

function UserDetailContainer() {
  const userData = useSelector(state => state.user);

  return <ProfileBox {...userData} />;
}

export default UserDetailContainer;
