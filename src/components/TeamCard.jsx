import React from 'react';
import { Card } from 'antd';

const TeamCard = props => {
  const { item, key } = props;

  return (
    <Card
      className="no-padding-card"
      style={{ borderRadius: 8, marginBottom: 15 }}
      hoverable
      key={key}
      cover={<img height="200" alt="example" src={item.img} />}
    >
      <div className="team-card-meta">
        <h3 className="text-bold">{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </Card>
  );
};

export default TeamCard;
