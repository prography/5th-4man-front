import React, { useMemo } from 'react'
import { Popconfirm } from 'antd';

// 댓글 달기/숨기기 토글 버튼
export const ToggleBtn = ({ setToggleInput, openInput, child_comments_count }) => {
  const commentActionText = useMemo(() => {
    return openInput
      ? '숨기기'
      : child_comments_count
      ? `${child_comments_count}개의 답글`
      : '댓글 달기';
  });

  return (
    <button
      type="button"
      className="main-color-blue"
      onClick={() => setToggleInput(!openInput)}
    >
      {commentActionText}
    </button>
  )
};


// 댓글 삭제 버튼
export const DeleteBtn = ({ id, handleDelete }) => (
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

// 댓글 수정 버튼
export const UpdateBtn = ({ setIsChange, isChange }) => (
  <button type="button" onClick={() => setIsChange(!isChange)}>
    {isChange ? '수정취소' : '수정'}
  </button>
);
