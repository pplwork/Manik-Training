import { combineReducers } from "redux";
import auth from "./auth";
import apartments from "./apartments";
export default combineReducers({
  auth,
  apartments,
});
