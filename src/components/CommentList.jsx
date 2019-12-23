import React from 'react';
import Comment from 'components/Comment';

const CommentList = ({ list, handleDelete, handleSubmit, handleUpdate }) => {
  return list.map(
    ({
      id,
      author,
      body,
      child_comments,
      team,
      parent,
      created_at,
      child_comments_count,
    }) => (
      <Comment
        key={id}
        id={id}
        author={author}
        body={body}
        team={team}
        parent={parent}
        child_comments={child_comments}
        created_at={created_at}
        child_comments_count={child_comments_count}
        isChild={!!parent}
        handleDelete={handleDelete}
        handleSubmit={handleSubmit}
        handleUpdate={handleUpdate}
      />
    ),
  );
};

export default CommentList;
