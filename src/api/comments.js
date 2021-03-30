import axios from "axios";

export const getComments = async () => {
  const response = await axios.get(
    `https://comment-board-sun-default-rtdb.firebaseio.com/comments.json`
  );
  const data = [];
  for (let id in response.data) {
    response.data[id].id = id;
    data.push(response.data[id]);
  }
  //console.log(data);
  return data;
};

export const getComment = async (id) => {
  const response = await axios.get(
    `https://comment-board-sun-default-rtdb.firebaseio.com/comments/${id}.json`
  );
  //console.log(response.data);
  return response.data;
};

export const getCommentPw = async (id) => {
  const response = await axios.get(
    `https://comment-board-sun-default-rtdb.firebaseio.com/comments/${id}.json`
  );
  //console.log(response.data);
  return response.data.password;
};

export const addComments = async (state) => {
  const response = await axios.post(
    `https://comment-board-sun-default-rtdb.firebaseio.com/comments.json`,
    state
  );
};

export const removeComments = async (id) => {
  const response = await axios.delete(
    `https://comment-board-sun-default-rtdb.firebaseio.com/comments/${id}.json/`
  );
};

export const editComments = async (id, state) => {
  const respones = await axios.put(
    `https://comment-board-sun-default-rtdb.firebaseio.com/comments/${id}.json/`,
    state
  );
};
