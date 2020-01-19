import React from 'react';
import { Tag } from 'antd';
import TagSearchInput from './TagSearchInput';

const TagSearch = props => {
  const {
    handleClose,
    handleTagInput,
    handleTagSearch,
    onSelect,
    searchTags,
    input,
    addItem,
    selectTags,
    tags,
  } = props;

  return (
    <div>
      {searchTags.map((tag, index) => {
        const tagElem = (
          <Tag
            key={index}
            color="white"
            closable
            onClose={e => {
              e.preventDefault();
              handleClose(tag);
            }}
            style={{
              fontFamily: 'Noto Sans Light',
              borderRadius: '25px',
              color: 'white',
              backgroundImage: 'linear-gradient(133deg, #5f76f3, #845ef7)',
            }}
          >
            {tag}
          </Tag>
        );

        return tagElem;
      })}
      <TagSearchInput
        input={input}
        selectTags={selectTags}
        handleTagSearch={handleTagSearch}
        addItem={addItem}
        onSelect={onSelect}
      />
      {tags.map((o, idx) => (
        <Tag
          key={idx}
          onClick={() => handleTagInput(o)}
          style={{ borderRadius: '30px' }}
        >
          {o}
        </Tag>
      ))}
    </div>
  );
};

export default TagSearch;
