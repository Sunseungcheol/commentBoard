import React from "react";
import styled from "styled-components";

const FormWrap = styled.div`
  & > form {
    margin-top: 30px;
    margin-bottom: 20px;
    padding: 0 10px;
  }

  & > form > textarea {
    width: 100%;
    height: 50px;
    margin-bottom: 7px;
    padding: 5px;
    box-sizing: border-box;
    border: 1px solid #9ec7e5;
    border-radius: 2px;
    resize: none;
  }

  & > form > input[type="text"] {
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #9ec7e5;
    border-radius: 2px;
    box-sizing: border-box;
  }

  & > form > button {
    width: 100%;
    padding: 5px;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;
function Form({ onSubmit, onChange, formRef, today, values }) {
  return (
    <FormWrap>
      <form ref={formRef}>
        <input
          type="text"
          name="author"
          onChange={onChange}
          defaultValue={values.author}
          placeholder="작성자"
        />
        <textarea
          name="content"
          onChange={onChange}
          defaultValue={values.content}
          placeholder="내용"
        ></textarea>
        <input
          type="text"
          name="createDate"
          onChange={onChange}
          defaultValue={values.createdDate}
          readOnly
          value={today}
        />
        <input
          type="text"
          name="password"
          onChange={onChange}
          placeholder="비밀번호"
        />
        <button type="button" onClick={() => onSubmit()}>
          등록
        </button>
      </form>
    </FormWrap>
  );
}

export default Form;
