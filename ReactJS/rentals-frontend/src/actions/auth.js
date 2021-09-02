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
} from './actionTypes';
import { APIUrls } from '../helpers/urls';
import axios from 'axios';
export function startLogin(){
    return {
        type: LOGIN_START
    };
}

export function loginFailed(errorMessage){
    return{
        type: LOGIN_FAILED,
        error: errorMessage
    };
}

export function loginSuccess(user){
    return {
        type: LOGIN_SUCCESS,
        user,
    }
}

export function login(email,password){
    return (dispatch)=>{
        dispatch(startLogin());
        const url = APIUrls.login();
        // axios.post(url ,{
        //   email,
        //   password
        // }).then((res)=>{
        //   console.log(res.data);
        // })
        fetch(url,{
            method:"POST",
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email,password}),            
        })
        .then((response)=>response.json())
        .then((data)=>{
            if(data.access_token){
            localStorage.setItem('token', data.access_token);
            dispatch(loginSuccess(data.user));
            return;
            }
            dispatch(loginFailed(data.message))
        })
    }
}

export function authenticateUser(user) {
  return {
    type: AUTHENTICATE_USER,
    user,
  };
}

export function logoutUser() {
  return {
    type: LOG_OUT,
  };
}

export function signup(name ,email, password){
    return (dispatch)=>{
        const url = APIUrls.signup();
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({name,email,password})
        }).then((response)=>response.json())
        .then((data)=>{
          console.log('signup data',data);
            if(data.name){
                dispatch(signupSuccessful(data));
                return ;
            }
            dispatch(signupFailed(data.message));
        });

    }
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
