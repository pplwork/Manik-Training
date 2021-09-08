import React, { useState } from "react";
import "./UserSearch.scss";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import SearchIcon from "@material-ui/icons/Search";
import UserCard from "./UserCard";
import { APIUrls } from "../helpers/urls";
import { getAuthTokenFromLocalStorage } from "../helpers/utils";
import Geocode from "react-geocode";
import nothing from "../assets/empty.svg";
function UserSearch() {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  Geocode.setApiKey("AIzaSyAywJ46VQknaZbBSC5aZKgkQHffaoqEDII");
  Geocode.setLanguage("en");
  Geocode.setRegion("in");
  const handleSubmit = () => {
    const url = APIUrls.fetchUser(email);
    fetch(url, {
      headers: {
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.status) {
          setUser(data);
        } else {
          setUser("");
        }
      });
  };
  return (
    <div className="search">
      <div>
        <InputLabel
          htmlFor="input-with-icon-adornment"
          className="search__inputLabel"
        >
          USER
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle style={{ fontSize: "3rem" }} />
            </InputAdornment>
          }
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          className="search__input"
          style={{ fontSize: "3rem" }}
          placeholder="Enter Mail"
        />
        <SearchIcon style={{ fontSize: "3rem" }} onClick={handleSubmit} />
      </div>
      <div>
        {user ? (
          <UserCard user={user} setUser={setUser} />
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              margin: "5rem 0",
            }}
          >
            <img src={nothing} style={{ height: "25rem", width: "30rem" }} />
            <div
              style={{
                fontSize: "2rem",
                color: "black",
                alignSelf: "center",
                fontWeight: "600",
              }}
            >
              No Results Found
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserSearch;
