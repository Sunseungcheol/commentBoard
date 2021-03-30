import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeComments, getCommentPw } from "../api/comments";
import CommentList from "../components/CommentList";
import { getComments, getComment } from "../store/modules/comments";
import { edit, savePw } from "../store/modules/states";

function CommentListContainer() {
  const { data, loading, error } = useSelector(
    (state) => state.comments.comments
  );
  const [dialog, setDialog] = useState(false);
  const [checkPw, setCheckPw] = useState("");

  const onChange = (e) => {
    setCheckPw(e.target.value);
    //console.log(e.target.value);
  };
  const dispatch = useDispatch();
  const { pw } = useSelector((state) => state.states);

  const onRemove = async (id) => {
    const response = await getCommentPw(id);
    //console.log("reponse = " + response);
    await dispatch(savePw(response));
    await setDialog(true);
  };

  const onRemoveConfirm = async (id) => {
    //console.log(pw + ":" + checkPw);
    if (pw === checkPw) {
      //console.log("일치");
      await removeComments(id);
      await dispatch(getComments());
      await setDialog(false);
    } else {
      alert("비밀번호를 확인해주세요");
    }
  };

  const onRemoveCancle = async () => {
    await dispatch(savePw(""));
    await setDialog(false);
  };

  const onEdit = async (id) => {
    const response = await getCommentPw(id);
    //console.log("reponse = " + response);
    await dispatch(edit(id, response));
    await dispatch(getComment(id));
  };

  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);

  if (loading) return <div>로딩중</div>;
  if (error) return <div>에러발생</div>;
  if (!data) return <div>데이터없음</div>;
  return (
    <CommentList
      comments={data}
      onRemove={onRemove}
      onEdit={onEdit}
      onChange={onChange}
      dialog={dialog}
      onRemoveConfirm={onRemoveConfirm}
      onRemoveCancle={onRemoveCancle}
    />
  );
}

export default CommentListContainer;
