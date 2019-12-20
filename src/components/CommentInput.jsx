import React, { useState, useCallback, useEffect } from 'react';
import { Input, Button, message } from 'antd';

import * as PostAPI from 'lib/api/post';

import * as teamDetailActions from '../store/reducers/teamDetail';

const CommentInput = ({ team, id, handleSubmit, value = '' }) => {
  const [body, setBody] = useState(value);
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    const params = {};

    // 댓글을 아무것도 적지 않았을 때
    if (!body) {
      message.error('댓글은 한글자 이상 입력해주세요.');
    }

    // 대댓글일 경우 parent 추가
    if (id) {
      params.parent = id;
    }

    params.team = team;
    params.body = body;

    setLoading(true);

    console.log(params);

    const re = await handleSubmit(params);

    console.log(re);

    setLoading(false);
    setBody('');
  };

  return (
    <div className="comment-input-wrap pb-20">
      <Input.TextArea
        className="comment-input"
        value={body}
        onChange={e => setBody(e.target.value)}
      />
      <div className="comment-btn-wrap">
        <div className="comment-btn-list">
          <Button className="add-btn" onClick={onSubmit} loading={loading}>
            등록
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommentInput;
