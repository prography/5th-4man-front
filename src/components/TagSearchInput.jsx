import React from 'react';
import { AutoComplete, Divider, Icon, Input } from 'antd';

const TagSearchInput = props => {
  const { input, selectTags, handleTagSearch, addItem, onSelect } = props;

  return (
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
  );
};

export default TagSearchInput;
