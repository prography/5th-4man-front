import React, { memo, useState, useMemo } from 'react';
import { Comment as AntComment, Avatar } from 'antd';

import CommentInput from 'components/CommentInput';
import CommentList from 'components/CommentList';

import * as CommentActions from 'components/CommentActions';

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
  const [openInput, setToggleInput] = useState(false);
  const [isChange, setIsChange] = useState(false);

  const commentUpdate = async params => {
    const re = await handleUpdate(params);

    setIsChange(!re);

    return re;
  };

  const actions = useMemo(() => {
    const actionArr = [
      <CommentActions.DeleteBtn id={id} handleDelete={handleDelete} />,
      <CommentActions.UpdateBtn
        setIsChange={setIsChange}
        isChange={isChange}
      />,
    ];

    if (!isChild) {
      actionArr.unshift(
        <CommentActions.ToggleBtn
          setToggleInput={setToggleInput}
          openInput={openInput}
          child_comments_count={child_comments_count}
        />,
      );
    }

    return actionArr;
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
                isChange={isChange}
                team={team}
                id={id}
                commentUpdate={commentUpdate}
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
                handleUpdate={commentUpdate}
                handleSubmit={handleSubmit}
              />
            ) : (
              ''
            )}
            <div className="pt-20">
              <CommentInput team={team} id={id} commentUpdate={handleSubmit} />
            </div>
          </>
        )}
      </AntComment>
    </>
  );
};

export default memo(Comment);
