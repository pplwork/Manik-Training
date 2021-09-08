import {
  UPDATE_APARTMENT,
  ADD_APARTMENT,
  DELETE_APARTMENT,
  CHANGE_APARTMENT,
} from "../actions/actionTypes";

import { APIUrls } from "../helpers/urls";
import { getAuthTokenFromLocalStorage, getFormBody } from "../helpers/utils";

export function fetchApartments() {
  return (dispatch) => {
    const url = APIUrls.fetchApartments();
    fetch(url, {
      headers: {
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(updateApartments(data));
      });
  };
}

export function fetchFilterApartments(Price, Rooms, size) {
  return (dispatch) => {
    const url = APIUrls.fetchFilterApartments(Price, Rooms, size);
    fetch(url, {
      headers: {
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(updateApartments(data));
      });
  };
}

export function updateApartments(apartments) {
  return {
    type: UPDATE_APARTMENT,
    apartments,
  };
}

export function addApartment(apartment) {
  return {
    type: ADD_APARTMENT,
    apartment,
  };
}

export function createApartment(content) {
  return (dispatch) => {
    const url = APIUrls.createApartment();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
      body: JSON.stringify({ ...content }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (!data.statusCode && !data.error && !data.status) {
          dispatch(addApartment(data));
        }
      });
  };
}
export function changeUpdate(apartment) {
  return {
    type: CHANGE_APARTMENT,
    apartment,
  };
}

export function changeApartment(content, id) {
  return (dispatch) => {
    const url = APIUrls.changeApartment(id);
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
      body: JSON.stringify({ ...content }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(changeUpdate(data));
      });
  };
}

export function deleteUpdate(id) {
  return {
    type: DELETE_APARTMENT,
    id,
  };
}
export function deleteApartment(id) {
  return (dispatch) => {
    const url = APIUrls.deleteApartment(id);
    fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.status) {
          dispatch(deleteUpdate(id));
        }
      });
  };
}
