import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import TagSearch from '../components/TagSearch';
import * as api from 'lib/api/post';

import { withRouter, Link } from 'react-router-dom';

const TagSearchContainer = () => {
  // test api
  const [tags, setTags] = useState([]);
  const [selectTags, setSelectTags] = useState([]);
  const [searchTags, setSearchTags] = useState([]);
  const [input, setInput] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    async function fetchData() {
      const tagList = await api.getTags();
      let tagDataList = [];
      for (let i = 0; i < tagList.data.length; i += 1) {
        tagDataList = [...tagDataList, tagList.data[i].name];
      }
      setTags([...tags, ...tagDataList]);
    }
    fetchData();
  }, []);

  const handleClose = removedTag => {
    setSearchTags(searchTags.filter(tag => tag !== removedTag));
    handleQuery(searchTags);
  };

  const handleTagInput = tag => {
    setSearchTags(
      [...searchTags, tag].filter(
        (item, index) => [...searchTags, tag].indexOf(item) === index,
      ),
    );
    handleQuery(searchTags);
  };
  const handleQuery = tags => {
    let params = '';
    for (let i = 0; i < tags.length; i++) {
      if (tags.length - 1 === i) {
        params += 'tag=' + tags[i];
      } else {
        params += 'tag=' + tags[i] + '&';
      }
    }
    setQuery(params);
  };
  const onSelect = selectedItems => {
    setSearchTags(
      [...searchTags, selectedItems].filter(
        (item, index) => [...searchTags, selectedItems].indexOf(item) === index,
      ),
    );
    handleQuery(searchTags);
  };
  const handleTagSearch = async value => {
    setInput(value);
    try {
      if (value !== '') {
        const getTag = await api.getTagData(value);

        if (getTag.data.length === 0) {
          setSelectTags([]);
        } else {
          let selectTagList = [];
          for (let i = 0; i < getTag.data.length; i += 1) {
            selectTagList = [...selectTags, getTag.data[i].name].filter(
              (item, index) =>
                [...selectTags, getTag.data[i].name].indexOf(item) === index,
            );
          }

          setSelectTags(selectTagList);
        }
      }
    } catch (err) {}
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

  const onSearch = async () => {
    let params = '';
    for (let i = 0; i < searchTags.length; i++) {
      if (searchTags.length - 1 === i) {
        params += 'tag=' + searchTags[i];
      } else {
        params += 'tag=' + searchTags[i] + '&';
      }
    }
    // const test = { params, searchTags };
    // await dispatch(searchTeamActions.getSearchTeamListAction(test));
    // window.location.href = '/teamList';
  };

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-around',
      }}
    >
      <TagSearch
        handleTagInput={handleTagInput}
        handleClose={handleClose}
        handleTagSearch={handleTagSearch}
        onSelect={onSelect}
        addItem={addItem}
        searchTags={searchTags}
        input={input}
        selectTags={selectTags}
        tags={tags}
      />
      <div>
        <Button
          block
          style={{
            width: '17%',
            marginLeft: '3%',
            backgroundImage: 'linear-gradient(133deg, #5f76f3, #845ef7)',
            color: 'white',
          }}
        >
          <Link to={'/teamList?' + query}>검색</Link>
        </Button>
      </div>
    </div>
  );
};

export default withRouter(TagSearchContainer);
