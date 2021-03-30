import * as commentsApi from "../../api/comments";
import {
  createPromiseThunk,
  handleAsyncActions,
  reducerUtils,
} from "../../lib/asyncUtils";

//액션
const GET_COMMENTS = "comments/GET_COMMENTS";
const GET_COMMENTS_SUCCESS = "comments/GET_COMMENTS_SUCCESS";
const GET_COMMENTS_ERROR = "comments/GET_COMMENTS_ERROR";

const GET_COMMENT = "comments/GET_COMMENT";
const GET_COMMENT_SUCCESS = "comments/GET_COMMENT_SUCCESS";
const GET_COMMENT_ERROR = "comments/GET_COMMENT_ERROR";

//thunk 생성함수
export const getComments = createPromiseThunk(
  GET_COMMENTS,
  commentsApi.getComments
);
export const getComment = createPromiseThunk(
  GET_COMMENT,
  commentsApi.getComment
);

//기본상태
export const initialState = {
  comments: reducerUtils.initial(),
  comment: reducerUtils.initial(),
};

const getCommentsReducer = handleAsyncActions(GET_COMMENTS, "comments");
const getCommentReducer = handleAsyncActions(GET_COMMENT, "comment");

export default function comments(state = initialState, action) {
  switch (action.type) {
    case GET_COMMENTS:
    case GET_COMMENTS_SUCCESS:
    case GET_COMMENTS_ERROR:
      return getCommentsReducer(state, action);
    case GET_COMMENT:
    case GET_COMMENT_SUCCESS:
    case GET_COMMENT_ERROR:
      return getCommentReducer(state, action);
    default:
      return state;
  }
}
