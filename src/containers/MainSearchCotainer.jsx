import React, { useEffect, useState } from 'react';
import TagSearch from 'components/TagSearch';
import * as api from 'lib/api/post';
import SearchButton from 'components/SearchButton';

const MainSearchContainer = () => {
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

  const handleClose = removedTag => {
    setSearchTags(searchTags.filter(tag => tag !== removedTag));

    handleQuery(searchTags.filter(tag => tag !== removedTag));
  };

  const handleTagInput = tag => {
    setSearchTags(
      [...searchTags, tag].filter(
        (item, index) => [...searchTags, tag].indexOf(item) === index,
      ),
    );
    handleQuery(
      [...searchTags, tag].filter(
        (item, index) => [...searchTags, tag].indexOf(item) === index,
      ),
    );
  };

  const onSelect = selectedItems => {
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
      <SearchButton query={query} />
    </div>
  );
};

export default MainSearchContainer;
