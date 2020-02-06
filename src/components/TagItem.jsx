import React, { memo } from 'react';
import { Tag } from 'antd';

const TagItem = ({ tag, handleTagInput, closable, onClose, style, color }) => {
  return closable ? (
    <Tag
      className="ant-tag-has-color"
      style={{
        fontFamily: 'Noto Sans Light',
        borderRadius: '25px',
        color: '#FFFFFF',
        backgroundImage: 'linear-gradient(133deg, #5f76f3, #845ef7)',
      }}
      closable={closable}
      onClose={onClose}
    >
      {tag}
    </Tag>
  ) : handleTagInput ? (
    <Tag onClick={() => handleTagInput(tag)} style={style} closable={closable}>
      {tag}
    </Tag>
  ) : (
    <Tag style={style} color={color} closable={closable}>
      {tag}
    </Tag>
  );
};

export default memo(TagItem);
