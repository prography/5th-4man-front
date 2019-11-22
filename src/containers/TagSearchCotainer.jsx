import React from 'react';
import { Input, Icon } from 'antd';
import { Chip, ChipSet } from '@rmwc/chip';

import '@material/chips/dist/mdc.chips.css';

import * as api from 'lib/api/post';

const TagSearch = () => {
  // test api
  const tagList = api.getTags();

  return (
    <div>
      <ChipSet>
        {tagList.map(item => (
          <Chip
            className="chip-custom"
            key={`chip-${item.name}`}
            label={item.name}
            onRemove={evt => console.log('onRemove', evt.detail)}
            trailingIcon={<Icon type="close" />}
          />
        ))}
      </ChipSet>
      <Input
        placeholder="태크를 검색해주세요"
        prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
      />
    </div>
  );
};

export default TagSearch;
