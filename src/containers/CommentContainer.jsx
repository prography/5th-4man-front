import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { message } from 'antd';

import CommentList from 'components/CommentList';
import CommentInput from 'components/CommentInput';

import * as PostAPI from 'lib/api/post';
import * as commentActions from '../store/reducers/comment';

const CommentContainer = ({ team_id }) => {
  const { comment } = useSelector(state => state.comment);

  const dispatch = useDispatch();

  // 댓글 불러오기
  const getComment = useCallback(() => {
    dispatch(commentActions.getTeamCommentAction(team_id));
  }, [dispatch]);

  // 댓글 삭제
  const handleDelete = async id => {
    try {
      await PostAPI.deleteComment({ id });

      await getComment();

      message.success('댓글이 삭제되었습니다.');
    } catch (err) {
      message.error('댓글 삭제에 실패했습니다.');
    }
  };

  // 댓글 등록
  const handleSubmit = async data => {

    try {
      const params = {
        ...data,
        team: team_id,
      };

      await PostAPI.addComment(params);

      await getComment();

      message.success('댓글 등록에 성공했습니다.');
    } catch (err) {
      message.error('댓글 등록에 실패했습니다.');
    }
  };

  const handleUpdate = async data => {

    console.log('=====================');
    const params = {
      ...data,
      team: team_id,
    };

    try {
      await PostAPI.updateComment(params);

      await getComment();

      message.success('댓글 수정에 성공했습니다.');

      return true;
    } catch (err) {
      message.error('댓글 수정에 실패했습니다.');

      return false;
    }
  };

  useEffect(() => {
    getComment();
  }, []);

  return (
    <>
      <div id="#comment" className="team-comment-wrap">
        <h2 className="text-bold">{comment.comments_count}개의 댓글</h2>
        <div className="mb-20">
          <CommentInput commentUpdate={handleSubmit} />
        </div>
        {comment.parent_comments ? (
          <CommentList
            list={comment.parent_comments}
            handleDelete={handleDelete}
            handleSubmit={handleSubmit}
            handleUpdate={handleUpdate}
          />
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default CommentContainer;
