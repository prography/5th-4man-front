import React, { memo, useState, useMemo } from 'react';
import { Comment as AntComment, Avatar } from 'antd';

import CommentInput from 'components/CommentInput';
import CommentContainer from 'containers/CommentContainer';

const Comment = ({ author, body, child_comments, parent, created_at }) => {
  const [openInput, setOpenInput] = useState(false);

  const handleInputToggle = () => {
    setOpenInput(!openInput);
  };

  const isChild = useMemo(() => {
    return !!parent;
  });

  const commentActionText = useMemo(() => {
    return openInput
      ? '숨기기'
      : child_comments.length
      ? `${child_comments.length}개의 답글`
      : '댓글 달기';
  });

  const actions = useMemo(() => {
    const actionBtn = (
      <button
        type="button"
        className="main-color-blue"
        onClick={handleInputToggle}
      >
        {commentActionText}
      </button>
    );

    return !isChild ? [actionBtn] : [];
  });

  return (
    <>
      <AntComment
        className="team-comment"
        actions={actions}
        author={<span className="comment-nickname">{author.nickname}</span>}
        datetime={created_at}
        avatar={
          <Avatar
            src="https://avatars1.githubusercontent.com/u/23019698?s=460&v=4"
            alt={author.username}
          />
        }
        content={
          <div>
            <p className="comment-content">{body}</p>
          </div>
        }
      >
        {!isChild && openInput && (
          <>
            {child_comments.length && (
              <CommentContainer commentList={child_comments} />
            )}
            <div className="pt-20">
              <CommentInput />
            </div>
          </>
        )}
      </AntComment>
    </>
  );
};

export default memo(Comment);
