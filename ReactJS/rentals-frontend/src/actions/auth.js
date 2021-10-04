import {
  LOGIN_START,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  AUTHENTICATE_USER,
  LOG_OUT,
  SIGNUP_START,
  SIGNUP_FAILED,
  SIGNUP_SUCCESS,
  CLEAR_AUTH_STATE,
} from "./actionTypes";
import { APIUrls } from "../helpers/urls";
import { toast } from "react-toastify";
import { getAuthTokenFromLocalStorage } from "../helpers/utils";
export function startLogin() {
  return {
    type: LOGIN_START,
  };
}

export function loginFailed(errorMessage) {
  return {
    type: LOGIN_FAILED,
    error: errorMessage,
  };
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}

export function login(email, password) {
  return (dispatch) => {
    let promise = new Promise((resolve, reject) => {
      dispatch(startLogin());
      const url = APIUrls.login();
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.access_token) {
            localStorage.setItem("token", data.access_token);
            console.log(data.user);
            dispatch(loginSuccess(data.user));
            resolve("Login Sucessful!");
            return;
          }
          reject(data.message);
          dispatch(loginFailed(data.message));
        });
    });
    toast.promise(promise, {
      pending: "Please Wait!",
      success: {
        render({ data }) {
          return data;
        },
      },
      error: {
        render({ data }) {
          return data;
        },
      },
    });
  };
}

export function authenticateUser(user) {
  return (dispatch) => {
    console.log(user);
    const url = APIUrls.fetchUser(user.email);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (!data.error && !data.statusCode && data.status) {
          dispatch(setAuthenticatedUser(data));
        }
      });
  };
}

export function setAuthenticatedUser(user) {
  return {
    type: AUTHENTICATE_USER,
    user,
  };
}

export function logoutUser() {
  return (dispatch) => {
    const url = APIUrls.logout();
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
    })
      .then((response) => response.json)
      .then((data) => {
        if (!data.statusCode && !data.status && !data.error) {
          localStorage.removeItem("token");
          console.log(data);
          dispatch(logout());
        }
      });
  };
}
export function logout() {
  return {
    type: LOG_OUT,
  };
}
export function adduser(name, email, password, clearState) {
  return (dispatch) => {
    let promise = new Promise((resolve, reject) => {
      const url = APIUrls.signup();
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            resolve("User Added Successfuly");
            clearState();
            return;
          }
          reject(data.message);
        });
    });
    toast.promise(promise, {
      pending: "Please Wait!",
      success: {
        render({ data }) {
          return data;
        },
      },
      error: {
        render({ data }) {
          return data;
        },
      },
    });
  };
}
export function signup(name, email, password) {
  return (dispatch) => {
    let promise = new Promise((resolve, reject) => {
      const url = APIUrls.signup();
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("signup data", data);
          if (data.name) {
            dispatch(signupSuccessful(data));
            resolve("Sign up Successful");
            return;
          }
          reject(data.message);
          dispatch(signupFailed(data.message));
        });
    });
    toast.promise(promise, {
      pending: "Please Wait!",
      success: {
        render({ data }) {
          return data;
        },
      },
      error: {
        render({ data }) {
          return data;
        },
      },
    });
  };
}
export function startSignup() {
  return {
    type: SIGNUP_START,
  };
}

export function signupFailed(error) {
  return {
    type: SIGNUP_FAILED,
    error,
  };
}

export function signupSuccessful(user) {
  return {
    type: SIGNUP_SUCCESS,
    user,
  };
}
export function clearAuthState() {
  return {
    type: CLEAR_AUTH_STATE,
  };
}
