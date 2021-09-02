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
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
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
            variant="outlined"
            color="secondary"
            onClick={handleClickOpen}
          >
            Add Appartment
          </Button>
          <AddApartmentModal open={open} handleClose={handleClose} />
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
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
