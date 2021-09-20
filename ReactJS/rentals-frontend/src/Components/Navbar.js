import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import "./Navbar.scss";
import icon from "../assets/icon-white.png";
import { Link } from "react-router-dom";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AddApartmentModal from "./AddApartmentModal";
import { useDispatch, useSelector } from "react-redux";
import MenuItem from "@material-ui/core/MenuItem";
import { logoutUser } from "../actions/auth";
import { useHistory } from "react-router";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    zIndex: "10",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 101,
    position: "relative",
  },
  menuButton: {
    marginRight: theme.spacing(-2),
  },
  title: {
    flexGrow: 1,
    fontSize: "2rem",
    textTransform: "uppercase",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const history = useHistory();
  const auth = useSelector((state) => state.auth);
  const [open, setOpen] = React.useState(false);
  const disatch = useDispatch();
  // const openProfile = Boolean(anchorEl);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleLogout = () => {
    disatch(logoutUser());
    history.push("/");
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className="navbar">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Link className="navbar__links" to="/">
            <img
              src={icon}
              style={{ height: "2.5rem", marginRight: "1rem" }}
              alt=""
            />
            <Typography variant="h6" className={classes.title}>
              rentals
            </Typography>
          </Link>
          {(auth.user.role === "realtor" || auth.user.role === "admin") &&
          auth.user ? (
            <Button
              style={{
                color: "white",
                fontSize: "1.3rem",
                textTransform: "capitalize",
              }}
              onClick={handleClickOpen}
            >
              Post Property
            </Button>
          ) : (
            ""
          )}
          <AddApartmentModal open={open} setOpen={setOpen} />
          {!auth.isLoggedin ? (
            <>
              <Link to="/signup" className="navbar__link">
                <Button className="navbar__btn" color="inherit">
                  Sign Up
                </Button>
              </Link>
              <Link to="/login" className="navbar__link">
                <Button className="navbar__btn" color="inherit">
                  Log In
                </Button>
              </Link>
            </>
          ) : (
            <>
              <div className="nav__wrapper">
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                  style={{ position: "relative" }}
                >
                  <AccountCircle style={{ fontSize: "2.5rem" }} />
                  <div className="nav__list">
                    <Link className="sidebar__links" to="/user/profile">
                      <MenuItem style={{ fontSize: "1.5rem" }}>
                        Profile
                      </MenuItem>
                    </Link>
                    <MenuItem
                      onClick={handleLogout}
                      style={{ fontSize: "1.5rem" }}
                    >
                      Sign out
                    </MenuItem>
                  </div>
                </IconButton>
                <div
                  style={{ fontSize: "1.5rem", textTransform: "capitalize" }}
                >
                  {auth.user.name}
                </div>
              </div>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
