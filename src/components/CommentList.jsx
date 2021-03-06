import React from 'react';
import Comment from 'components/Comment';

const CommentList = ({
  list,
  handleDelete,
  handleSubmit,
  handleUpdate,
  isLoggedIn,
  username,
}) => {
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
      profileImage,
    }) => (
      <Comment
        key={id}
        id={id}
        author={author}
        body={body}
        team_id={team}
        parent_id={parent}
        child_comments={child_comments}
        created_at={created_at}
        child_comments_count={child_comments_count}
        isChild={!!parent}
        handleDelete={handleDelete}
        handleSubmit={handleSubmit}
        handleUpdate={handleUpdate}
        isLoggedIn={isLoggedIn}
        username={username}
        profileImage={profileImage}
      />
    ),
  );
};

export default CommentList;
