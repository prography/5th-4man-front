import React from 'react';
import { Link } from 'react-router-dom';

const CardImage = ({ imageUrl, toUrl, animation }) => {
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
