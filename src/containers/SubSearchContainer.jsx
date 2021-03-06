import React, { useState } from 'react';
import { Dropdown, Button, Icon, Menu, message } from 'antd';
import TagSearchInput from 'components/TagSearchInput';
import SearchButton from 'components/SearchButton';
import TagItem from 'components/TagItem';
import * as api from 'lib/api/post';

const SubSearchContainer = ({ tags }) => {
  const tagArrayCheck = typeof tags === 'object' && tags.length;
  const newTags = tagArrayCheck ? tags : [tags];
  const [searchTags, setSearchTags] = useState(newTags);
  const [input, setInput] = useState('');
  const [selectTags, setSelectTags] = useState([]);
  const [query, setQuery] = useState('');

  const handleQuery = tags => {
    let params = '';
    for (let i = 0; i < tags.length; i++) {
      tags.length - 1 === i
        ? (params += 'tag=' + tags[i])
        : (params += 'tag=' + tags[i] + '&');
    }
    setQuery(params);
  };

  const handleClose = removedTag => {
    setSearchTags(searchTags.filter(tag => tag !== removedTag));
    handleQuery(searchTags.filter(tag => tag !== removedTag));
  };

  const onSelect1 = selectedItems => {
    setSearchTags(
      [...searchTags, selectedItems].filter(
        (item, index) => [...searchTags, selectedItems].indexOf(item) === index,
      ),
    );
    handleQuery(
      [...searchTags, selectedItems].filter(
        (item, index) => [...searchTags, selectedItems].indexOf(item) === index,
      ),
    );
  };

  const handleSearchErrorMessage = () => {
    if (searchTags.length === 0) {
      message.error('태그를 한개 이상 입력하세요.', 1);
    }
  };

  const addItem = async () => {
    const params = {
      name: input,
    };
    await api.insertTag(params);

    if (searchTags.length < 6) {
      setSearchTags(
        [...searchTags, input].filter(
          (item, index) => [...searchTags, input].indexOf(item) === index,
        ),
      );

      setInput('');
    }
  };

  const handleTagSearch = async value => {
    setInput(value);
    try {
      if (value !== '') {
        const getTag = await api.getTagData(value);

        if (getTag.data.length === 0) {
          setSelectTags([]);
        } else {
          const selectTagList = [];
          for (let i = 0; i < getTag.data.length; i += 1) {
            selectTagList.push(getTag.data[i].name);
          }
          setSelectTags(selectTagList);
        }
      } else {
        setSelectTags([]);
      }
    } catch (err) {}
  };
  return (
    <>
      <Dropdown
        overlay={
          <Menu style={{ width: '300px', height: '200px' }}>
            <div className="container stack-choice-area display-flex flex-direction-column justify-content-center align-items-center">
              <TagSearchInput
                input={input}
                selectTags={selectTags}
                handleTagSearch={handleTagSearch}
                addItem={addItem}
                onSelect={onSelect1}
              />
              <SearchButton
                query={query}
                handleSearchErrorMessage={handleSearchErrorMessage}
              />
            </div>
          </Menu>
        }
      >
        <Button style={{ margin: '0 1%' }}>
          검색 <Icon type="down" />
        </Button>
      </Dropdown>
      {searchTags.map((tag, index) => {
        const tagElem = (
          <TagItem
            tag={tag}
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
          />
        );

        return tagElem;
      })}
    </>
  );
};

export default SubSearchContainer;
