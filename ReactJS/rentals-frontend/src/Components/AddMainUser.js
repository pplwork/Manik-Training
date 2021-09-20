import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import AddUser from "./AddUser";
import Home from "./Home";
import TemporaryDrawer from "./test";
import { useHistory } from "react-router-dom";
import { APIUrls } from "../helpers/urls";
import { getAuthTokenFromLocalStorage } from "../helpers/utils";
import { logoutUser } from "../actions/auth";
function AddMainUser() {
  const [left, setLeft] = useState(false);
  useEffect(() => {
    const setUI = () => {
      if (document.documentElement.clientWidth < 820) {
        setLeft(true);
      } else {
        setLeft(false);
      }
    };
    setUI();
    window.addEventListener("resize", setUI);
    return () => {
      window.removeEventListener("resize", setUI);
    };
  });
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    const url = APIUrls.fetchApartments();
    fetch(url, {
      headers: {
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // eslint-disable-next-line
        if (data.statusCode == "401") {
          dispatch(logoutUser());
          history.replace("/login");
        }
      });
  }, [dispatch, history]);
  return (
    <div style={{ display: "flex" }}>
      {left ? <TemporaryDrawer /> : <Home />}
      <AddUser />
    </div>
  );
}

export default AddMainUser;
