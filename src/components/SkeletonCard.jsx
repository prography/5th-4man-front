import React from 'react';
import { Skeleton, Card } from 'antd';

const SkeletonCard = () => {
  return (
    <Card
      style={{ borderRadius: 8, marginBottom: 15 }}
      hoverable
      key="1"
      cover={<div className="skeleton-card" />}
    >
      <Skeleton active />
    </Card>
  );
};

export default SkeletonCard;
