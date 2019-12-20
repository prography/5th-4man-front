import React, { memo, useState, useMemo } from 'react';
import { Comment as AntComment, Avatar, Popconfirm } from 'antd';

import CommentInput from 'components/CommentInput';
import CommentList from 'components/CommentList';

const Comment = ({
  author,
  id,
  body,
  child_comments,
  team,
  created_at,
  child_comments_count,
  isChild,
  handleDelete,
  handleSubmit,
  handleUpdate,
}) => {
  const [openInput, setOpenInput] = useState(false);
  const [isChange, setIsChange] = useState(false);

  const commentActionText = useMemo(() => {
    return openInput
      ? '숨기기'
      : child_comments_count
      ? `${child_comments_count}개의 답글`
      : '댓글 달기';
  });

  const actions = useMemo(() => {
    const ToggleBtn = (
      <button
        type="button"
        className="main-color-blue"
        onClick={() => setOpenInput(!openInput)}
      >
        {commentActionText}
      </button>
    );

    const DeleteBtn = (
      <Popconfirm
        placement="bottomRight"
        title="정말 댓글을 삭제하시겠습니까?"
        onConfirm={() => handleDelete(id)}
        okText="삭제"
        cancelText="취소"
      >
        <button type="button">삭제</button>
      </Popconfirm>
    );

    const UpdateBtn = (
      <button type="button" onClick={() => setIsChange(!isChange)}>
        {isChange ? '수정취소' : '수정'}
      </button>
    );

    return !isChild
      ? [ToggleBtn, DeleteBtn, UpdateBtn]
      : [DeleteBtn, UpdateBtn];
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
          !isChange ? (
            <div>
              <p className="comment-content">{body}</p>
            </div>
          ) : (
            <div className="pt-20">
              <CommentInput
                team={team}
                id={id}
                handleSubmit={handleUpdate}
                value={body}
              />
            </div>
          )
        }
      >
        {!isChild && openInput && (
          <>
            {child_comments.length ? (
              <CommentList
                list={child_comments}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
              />
            ) : (
              ''
            )}
            <div className="pt-20">
              <CommentInput team={team} id={id} handleSubmit={handleSubmit} />
            </div>
          </>
        )}
      </AntComment>
    </>
  );
};

export default memo(Comment);
