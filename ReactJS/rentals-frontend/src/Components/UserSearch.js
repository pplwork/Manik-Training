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
import axios from "axios";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
function UserSearch() {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [error, setError] = useState({ value: null, message: "" });
  const [open, setOpen] = useState(false);
  const EmailInput = useRef(null);
  Geocode.setApiKey("AIzaSyAywJ46VQknaZbBSC5aZKgkQHffaoqEDII");
  Geocode.setLanguage("en");
  Geocode.setRegion("in");
  const handleSubmit = () => {
    const url = APIUrls.fetchUser(email);
    // axios
    //   .get(url, {
    //     headers: {
    //       Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
    //     },
    //   })
    //   .then((response) => {
    //     console.log("yaha se aaya", response);
    //   })
    //   .catch((error) => {
    //     console.log("udhar error aaya", error.response);
    //   });
    fetch(url, {
      headers: {
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.id) {
          setUser(data);
          setOpen(true);
          setError({ value: false, message: "User Found!" });
        } else {
          setUser("");
          setOpen(true);
          setError({
            value: true,
            message: "User not found with given Email!",
          });
        }
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
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
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
          ref={EmailInput}
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
          <UserCard
            user={user}
            setUser={setUser}
            setOpen={setOpen}
            setError={setError}
          />
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
      {error.value ? (
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={open}
          autoHideDuration={1500}
          onClose={handleClose}
        >
          <Alert
            severity="error"
            onClose={handleClose}
            style={{ fontSize: "1.2rem" }}
          >
            {error.message}
          </Alert>
        </Snackbar>
      ) : (
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={open}
          autoHideDuration={1500}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            style={{ fontSize: "1.2rem" }}
          >
            {error.message}
          </Alert>
        </Snackbar>
      )}
    </div>
  );
}

export default UserSearch;
