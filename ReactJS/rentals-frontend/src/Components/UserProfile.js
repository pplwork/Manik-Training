import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import "./UserProfile.scss";
import { useHistory } from "react-router-dom";
import { APIUrls } from "../helpers/urls";
import { getAuthTokenFromLocalStorage } from "../helpers/utils";
import { logoutUser } from "../actions/auth";
import { useDispatch } from "react-redux";
function UserProfile(props) {
  const [user, setUser] = useState(props);
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
    <div className="userProfile">
      <UserCard user={user} setUser={setUser} />
    </div>
  );
}

export default UserProfile;
