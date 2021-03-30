import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComments, editComments } from "../api/comments";
import Form from "../components/Form";
import { getComments } from "../store/modules/comments";
import useInputs from "../useInput";

function getDateStr() {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  month = month > 9 ? month : "0" + month;
  day = day > 9 ? day : "0" + day;
  return `${year}-${month}-${day}`;
}

function FormContainer() {
  const formRef = useRef();
  const { data } = useSelector((state) => state.comments.comment);
  const today = getDateStr();
  const { onEdit, id } = useSelector((state) => state.states);

  const [inputs, setInputs, onChange] = useInputs({
    author: "",
    content: "",
    createDate: "",
    password: "",
  });

  const dispatch = useDispatch();
  const { pw } = useSelector((state) => state.states);

  const onSubmit = async (e) => {
    //e.preventDefault();

    if (inputs.author.length === 0) {
      alert("작성자를 확인해주세요");
      return;
    } else if (inputs.content.length === 0) {
      alert("내용을 확인해주세요");
      return;
    } else if (inputs.password.length === 0) {
      alert("비밀번호를 확인해주세요");
      return;
    }

    if (!onEdit) {
      await addComments({
        author: inputs.author,
        content: inputs.content,
        createDate: getDateStr(),
        password: inputs.password,
      });

      setInputs({
        author: "",
        content: "",
        createDate: "",
        password: "",
      });
    } else {
      //console.log(pw + ":" + inputs.password);
      if (pw === inputs.password) {
        await editComments(id, {
          author: inputs.author,
          content: inputs.content,
          createDate: inputs.createDate,
          password: inputs.password,
        });

        setInputs({
          author: "",
          content: "",
          createDate: "",
          password: "",
        });
      } else {
        alert("비밀번호를 확인해주세요");
      }
    }
    formRef.current.reset();
    dispatch(getComments());
  };

  useEffect(() => {
    if (data != null) {
      setInputs(data);
    }
  }, [data]);

  return (
    <Form
      onSubmit={onSubmit}
      onChange={onChange}
      formRef={formRef}
      today={today}
      values={inputs}
    />
  );
}

export default FormContainer;
