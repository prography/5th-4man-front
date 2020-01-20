import React from 'react';
import TagSearchInput from './TagSearchInput';
import TagItem from './TagItem';

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
          <TagItem
            tag={tag}
            key={index}
            color="white"
            closable
            searchTags={searchTags}
            onClose={e => {
              e.preventDefault();
              handleClose(tag);
            }}
            style={{
              fontFamily: 'Noto Sans Light',
              borderRadius: '25px',
              color: '#FFFFFF',
              backgroundImage: 'linear-gradient(133deg, #5f76f3, #845ef7)',
            }}
          />
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
      {tags.map((tag, idx) => (
        <TagItem
          tag={tag}
          key={idx}
          handleTagInput={handleTagInput}
          style={{
            fontFamily: 'Noto Sans Light',
            borderRadius: '25px',
          }}
        />
      ))}
    </div>
  );
};

export default TagSearch;
