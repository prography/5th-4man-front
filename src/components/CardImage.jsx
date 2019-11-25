import React from 'react';
import { Link } from 'react-router-dom';

const CardImage = ({
  imageUrl = 'https://cdn.class101.net/images/1336a493-1dbb-433f-beab-071bfd9b7e3c/1024xauto',
  toUrl,
  animation,
}) => {
  return (
    <div>
      <span
        className={`display-block card-image-wrap ${animation && 'animation'}`}
      >
        {toUrl ? (
          <Link to={toUrl}>
            <img src={imageUrl} alt="team-img" />
          </Link>
        ) : (
          <img src={imageUrl} alt="team-img" />
        )}
      </span>
    </div>
  );
};

export default CardImage;
