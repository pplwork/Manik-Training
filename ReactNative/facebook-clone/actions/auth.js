import { LOGIN_SUCCESS, LOG_OUT } from "./actionTypes";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
export function authChanged(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}
export function logout() {
  return {
    type: LOG_OUT,
  };
}
