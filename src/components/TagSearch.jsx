import React from 'react';
import { Input, Divider, Icon, Tag, AutoComplete } from 'antd';

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
      <AutoComplete
        value={input}
        dataSource={selectTags === [] ? [] : selectTags}
        style={{ width: '100%', padding: '10px 0' }}
        onChange={handleTagSearch}
        onSelect={onSelect}
        notFoundContent={[]}
        autoFocus={false}
        dropdownRender={
          input !== ''
            ? menu => (
                <div>
                  {menu}
                  <Divider style={{ margin: '4px 0' }} />
                  <div
                    style={{
                      backgroundColor: 'white',
                      padding: '4px 8px',
                      cursor: 'pointer',
                      color: 'linear-gradient(133deg, #5f76f3, #845ef7)',
                    }}
                    onMouseDown={e => e.preventDefault()}
                    onClick={addItem}
                  >
                    <Icon type="plus" /> {input} 태그 추가
                  </div>
                </div>
              )
            : menu => <div></div>
        }
      >
        <Input
          prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.45)' }} />}
          style={{ width: '100%' }}
          size="large"
          maxLength={10}
          placeholder="예 : 프론트엔드"
        />
      </AutoComplete>
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
