import React, { useState } from "react";
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
import { useSelector } from "react-redux";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    zIndex: "10",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
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
  const auth = useSelector((state) => state.auth);
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openProfile = Boolean(anchorEl);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
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
          <AddApartmentModal open={open} handleClose={handleClose} />
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
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={handleMenu}
              >
                <AccountCircle style={{ fontSize: "2.5rem" }} />
              </IconButton>
              <div>{auth.user.name}</div>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "bottom",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "bottom",
                }}
                open={openProfile}
                onClose={handleClose}
              >
                <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
                <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
              </Menu>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
