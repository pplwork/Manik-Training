import { toast } from "react-toastify";
import {
  UPDATE_APARTMENT,
  ADD_APARTMENT,
  DELETE_APARTMENT,
  CHANGE_APARTMENT,
} from "../actions/actionTypes";

import { APIUrls } from "../helpers/urls";
import { getAuthTokenFromLocalStorage } from "../helpers/utils";

export function fetchApartments(offset) {
  return (dispatch) => {
    const url = APIUrls.fetchApartments(offset);
    console.log(url);
    fetch(url, {
      headers: {
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.statusCode && !data.status && !data.error) {
          dispatch(updateApartments(data));
        }
      });
  };
}

export function fetchFilterApartments(Price, Rooms, size, offset) {
  return (dispatch) => {
    const url = APIUrls.fetchFilterApartments(Price, Rooms, size, offset);
    fetch(url, {
      headers: {
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.statusCode && !data.status && !data.error) {
          dispatch(updateApartments(data));
        } else {
          toast.error(data.message);
        }
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

export function createApartment(content, handleClose) {
  return (dispatch) => {
    let promise = new Promise((resolve, reject) => {
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
            resolve("Apartment added Sucessfuly!");
            handleClose();
          } else {
            reject(`${data.message}`);
          }
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

export function changeUpdate(apartment) {
  return {
    type: CHANGE_APARTMENT,
    apartment,
  };
}

export function changeApartment(content, id, handleClose) {
  return (dispatch) => {
    let promise = new Promise((resolve, reject) => {
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
          if (!data.statusCode && !data.error && !data.status) {
            dispatch(changeUpdate(data));
            resolve("Apartment Edited Sucessfuly!");
            handleClose();
          } else {
            reject(`${data.message}`);
          }
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

export function deleteUpdate(id) {
  return {
    type: DELETE_APARTMENT,
    id,
  };
}
export function deleteApartment(id) {
  return (dispatch) => {
    let promise = new Promise((resolve, reject) => {
      const url = APIUrls.deleteApartment(id);
      fetch(url, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (!data.status && !data.statusCode && !data.error) {
            dispatch(deleteUpdate(id));
            resolve("Apartment Deleted Successfuly!");
          } else {
            reject(`${data.message}`);
          }
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
