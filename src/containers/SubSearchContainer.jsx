import React from 'react';
import { Dropdown, Button, Icon, Menu, Tag } from 'antd';
import TagSearch from 'containers/MainSearchCotainer';

const SubSearchContainer = ({ tags }) => {
  return (
    <>
      <Dropdown overlay={<Menu>{/*<TagSearch />*/}</Menu>}>
        <Button style={{ margin: '0 1%' }}>
          검색 <Icon type="down" />
        </Button>
      </Dropdown>
      {tags.map((tag, index) => {
        const tagElem = (
          <Tag
            key={index}
            color="white"
            closable
            onClose={e => {
              e.preventDefault();
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
    </>
  );
};

export default SubSearchContainer;
