import React, { useState, useCallback, useEffect } from 'react';
import { Input, Button, message } from 'antd';

const CommentInput = () => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  const inputRef = React.createRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = useCallback(() => {
    if (!content) {
      return false;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      message.success('댓글 등록에 성공했습니다.');

      setContent('');
    }, 1000);
  }, [content]);

  return (
    <div className="comment-input-wrap pb-20">
      <Input.TextArea
        className="comment-input"
        value={content}
        onChange={e => setContent(e.target.value)}
        ref={inputRef}
      />
      <div className="comment-btn-wrap">
        <div className="comment-btn-list">
          <Button className="add-btn" onClick={handleSubmit} loading={loading}>
            등록
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CommentInput;
