import React, { useEffect } from "react";
import "./UserCard.scss";
import user from "../assets/user2.png";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import EditUserModal from "./EditUserModal";
import { APIUrls } from "../helpers/urls";
import { getAuthTokenFromLocalStorage } from "../helpers/utils";
function UserCard(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openPoper = Boolean(anchorEl);
  const [open, setOpen] = React.useState(false);

  const id = openPoper ? "simple-popover" : undefined;
  const handleClosePoper = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = () => {
    const url = APIUrls.deleteUser(props.user.id);
    fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.status) {
          handleClosePoper();
          props.setUser("");
          props.setOpen(true);
          props.setError({ value: null, message: "User deleted sucessfuly!" });
        } else {
          props.setOpen(true);
          props.setError({ value: true, message: "User not deleted!" });
        }
      });
  };
  return (
    <div className="userCard">
      <div className="userCard__left">
        <img src={user} alt="" className="userCard__img" />
        <div className="userCard__name">{props.user.name}</div>
      </div>
      <div className="userCard__details">
        <div className="userCard__email" style={{ fontSize: "1.5rem" }}>
          <b>Email: </b> {props.user.email}
        </div>
        <div className="userCard__role" style={{ fontSize: "1.5rem" }}>
          <b>Role: </b>
          <span style={{ textTransform: "capitalize" }}>{props.user.role}</span>
        </div>
      </div>
      <div className="userCard__btnWrapper">
        <Button className="userCard__btn" onClick={handleClickOpen}>
          Edit
        </Button>
        <EditUserModal
          user={props.user}
          open={open}
          handleClose={handleClose}
          setUser={props.setUser}
          setError={props.setError}
          setOpen={props.setOpen}
        />
        <Button
          color="secondary"
          className="userCard__btn"
          onClick={handleClick}
        >
          Delete
        </Button>
        <Popover
          id={id}
          open={openPoper}
          anchorEl={anchorEl}
          className="popper"
          onClose={handleClosePoper}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Typography
            style={{
              fontSize: "1.2rem",
              padding: "0.7rem",
            }}
          >
            Are you sure you want to delete?
          </Typography>
          <div className="helper__btn">
            <Button
              style={{ height: "3rem" }}
              variant="outlined"
              onClick={handleClosePoper}
            >
              Cancel
            </Button>
            <Button
              style={{ height: "3rem" }}
              variant="outlined"
              color="secondary"
              onClick={handleDelete}
            >
              Delete
            </Button>
          </div>
        </Popover>
      </div>
    </div>
  );
}

export default UserCard;
