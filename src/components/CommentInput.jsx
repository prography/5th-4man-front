import React, { useState } from 'react';
import { Input, Button, message } from 'antd';

const CommentInput = ({ isChange, team, id, handleSubmit, value = '' }) => {
  const [body, setBody] = useState(value);
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    const params = {};

    // 댓글을 아무것도 적지 않았을 때
    if (!body) {
      message.error('댓글은 한글자 이상 입력해주세요.');
    }

    if (id) {
      params.id = id;
    }

    params.team = team;
    params.body = body;

    

    try {
      setLoading(true);

      const re = await handleSubmit(params);

      setLoading(false);
      setBody('');
    } catch (err) {
      throw Error();
    }
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
            {isChange ? '수정' : '등록'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommentInput;
