import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const imageSize = {
  small: 48,
  large: 198,
};

const defaultImageUrl =
  'https://recap-project.eu/wp-content/uploads/2017/02/default-user.jpg';

const Image = styled.div`
  border-radius: 100%;
  background: url(${props => props.url}) center no-repeat;
  background-size: cover;
  width: ${props => imageSize[props.size]}px;
  height: ${props => imageSize[props.size]}px;
`;

const ProfileImage = ({ size, url }) => {
  return <Image size={size} url={url} />;
};

ProfileImage.propTypes = {
  size: PropTypes.oneOf(Object.keys(imageSize)),
  url: PropTypes.string,
};

ProfileImage.defaultProps = {
  size: 'small',
  url: defaultImageUrl,
};

export default ProfileImage;
