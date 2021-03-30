import React from "react";
import styled from "styled-components";
import Button from "../Button";
import Dialog from "../Dialog";

const Comment = styled.div`
  padding: 5px 10px 0;
  text-align: center;
  border-bottom: 1px dashed #1376be;
`;
const Author = styled.div`
  float: left;

  color: #96a1a9;
  text-align: left;
`;
const Content = styled.div`
  margin: 30px 0 10px;
  word-break: break-all;
`;
const CreatedDate = styled.div`
  float: right;
  color: #96a1a9;
`;
const ButtonWrap = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-end;
`;

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 5px;
  border: 1px solid #eab7b7;
`;
function CommentList({
  comments,
  onRemove,
  onEdit,
  onChange,
  dialog,
  onRemoveConfirm,
  onRemoveCancle,
}) {
  return comments.map((comment, key) => (
    <Comment key={key}>
      <Author>{comment.author}</Author>
      <CreatedDate>{comment.createDate}</CreatedDate>
      <Content>{comment.content}</Content>
      <ButtonWrap>
        <Button
          color="blue"
          type="button"
          size="small"
          onClick={() => onEdit(comment.id)}
        >
          수정
        </Button>
        <Button
          color="gray"
          type="button"
          size="small"
          onClick={() => onRemove(comment.id)}
        >
          삭제
        </Button>
      </ButtonWrap>
      <Dialog
        title="정말로 삭제하시겠습니까?"
        confirmText="삭제"
        cancelText="취소"
        visible={dialog}
        onConfirm={() => onRemoveConfirm(comment.id)}
        onCancle={onRemoveCancle}
      >
        <Input
          type="text"
          name="pw"
          onChange={onChange}
          placeholder="비밀번호를 입력하세요"
        />
      </Dialog>
    </Comment>
  ));
}

export default CommentList;
