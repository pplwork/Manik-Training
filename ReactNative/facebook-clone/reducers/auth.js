import { LOGIN_SUCCESS, LOG_OUT } from "../actions/actionTypes";

const initialAuthState = {
  user: {},
  isLoggedin: false,
};

export default function auth(state = initialAuthState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
        isLoggedin: true,
      };
    case LOG_OUT:
      return {
        ...state,
        user: {},
        isLoggedin: false,
      };
    default:
      return state;
  }
}
