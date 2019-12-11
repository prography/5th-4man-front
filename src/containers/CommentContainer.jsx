import React from 'react';
import Comment from 'components/Comment';

const CommentContainer = ({ commentList }) => {
  return commentList.map(
    ({ id, author, body, child_comments, parent, created_at }) => (
      <Comment
        key={id}
        author={author}
        body={body}
        parent={parent}
        child_comments={child_comments}
        created_at={created_at}
      />
    ),
  );
};

export default CommentContainer;
