import React, { useEffect, useState } from "react";
import Home from "./Home";
import HomeMainPage from "./HomeMainPage";
import RightDrawer from "./RightDrawer";
import TemporaryDrawer from "./test";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { APIUrls } from "../helpers/urls";
import { getAuthTokenFromLocalStorage } from "../helpers/utils";
import { logoutUser } from "../actions/auth";
function MainPage() {
  const [right, setRight] = useState(false);
  const [left, setLeft] = useState(false);

  useEffect(() => {
    const setUI = () => {
      if (
        document.documentElement.clientWidth < 1300 &&
        document.documentElement.clientWidth < 820
      ) {
        setLeft(true);
        setRight(true);
      } else if (
        document.documentElement.clientWidth < 1300 &&
        document.documentElement.clientWidth > 820
      ) {
        setLeft(true);
        setRight(false);
      } else {
        setLeft(false);
        setRight(false);
      }
    };
    setUI();

    window.addEventListener("resize", setUI);
    return () => {
      window.removeEventListener("resize", setUI);
    };
  }, []);
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
      {right ? <RightDrawer /> : null}
      <HomeMainPage right={right} />
    </div>
  );
}

export default MainPage;
