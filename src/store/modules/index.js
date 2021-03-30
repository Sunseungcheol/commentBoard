import { combineReducers } from "redux";
import comments from "./comments";
import states from "./states";
export default combineReducers({
  comments,
  states,
});
