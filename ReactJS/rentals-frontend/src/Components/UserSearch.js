import React, { useEffect, useRef, useState } from "react";
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
import { toast } from "react-toastify";
function UserSearch() {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const EmailInput = useRef(null);
  Geocode.setApiKey("AIzaSyAywJ46VQknaZbBSC5aZKgkQHffaoqEDII");
  Geocode.setLanguage("en");
  Geocode.setRegion("in");
  console.log("user search se aaya", user);
  // eslint-disable-next-line
  const handleSubmit = () => {
    let promise = new Promise((resolve, reject) => {
      if (!email) {
        reject("Please Enter Email");
      }
      const url = APIUrls.fetchUser(email);
      fetch(url, {
        headers: {
          Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.id) {
            setUser(data);
            resolve("User Found!");
          } else {
            setUser("");
            reject(data.message);
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
  useEffect(() => {
    let Email = EmailInput.current;
    const fun = (e) => {
      if (e.keyCode === 13) {
        handleSubmit();
      }
    };
    Email.addEventListener("keypress", fun);
    return () => {
      Email.removeEventListener("keypress", fun);
    };
  }, [handleSubmit]);
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
          ref={EmailInput}
          onChange={(e) => {
            console.log("email change hui", e.target.value);
            setEmail(e.target.value);
          }}
          type="email"
          className="search__input"
          // style={{ fontSize: "3rem" }}
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
            <img
              src={nothing}
              alt=""
              style={{ height: "25rem", width: "30rem" }}
            />
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
