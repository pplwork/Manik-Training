import React from "react";
import "./ApartmentCard.scss";
import Button from "@material-ui/core/Button";
import AddApartmentModal from "./AddApartmentModal";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import { deleteApartment } from "../actions/apartments";

function ApartmentCard(props) {
  const { app } = props;
  const [open, setOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const auth = useSelector((state) => state.auth);
  const openPoper = Boolean(anchorEl);
  const dispatch = useDispatch();
  const id = openPoper ? "simple-popover" : undefined;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePoper = () => {
    setAnchorEl(null);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleDelete = () => {
    dispatch(deleteApartment(app.id));
  };
  return (
    <div className="apartment">
      <div className="apartment__upper">
        <div className="apartment__left">
          <img src={app.photoLink} alt="" className="apartment__image" />
        </div>
        <div className="apartment__right">
          <div className="apartment__heading">{app.name}</div>
          <div className="apartment__details">
            <div className="apartment__price">
              <span className="apartment__bold">Rs.{app.price}</span>
              <span className="apartment__light">/month</span>
            </div>
            <div className="apartment__size">
              <span className="apartment__bold">{app.floorSize}</span>
              <span className="apartment__light">sq.ft.</span>
            </div>
            <div className="apartment__rooms">
              <span className="apartment__bold">{app.Rooms - 1} BHK</span>
            </div>
          </div>
          <div className="apartment__description">{app.description}</div>
        </div>
      </div>
      <div className="apartment__divider"></div>
      <div className="apartment__lower">
        <div className="apartment__realtor">
          Posted by Realtor
          <h2>{app.realtor.name}</h2>
        </div>
        {auth.user.role === "user" ? (
          <Button
            className="apartment__btn"
            style={{ marginLeft: "auto" }}
            variant="contained"
            color="primary"
          >
            Contact Realtor
          </Button>
        ) : (
          <>
            <Button
              variant="outlined"
              onClick={handleClickOpen}
              style={{ marginLeft: "auto", marginRight: "1rem" }}
            >
              Edit
            </Button>
            <AddApartmentModal app={app} open={open} setOpen={setOpen} />
            <Button variant="outlined" color="secondary" onClick={handleClick}>
              Delete
            </Button>
          </>
        )}
        {/* <Button
          className="apartment__btn"
          style={{ marginLeft: "auto" }}
          variant="contained"
          color="primary"
        >
          Contact Realtor
        </Button>
        <Button variant="outlined" onClick={handleClickOpen}>
          Edit
        </Button>
        <AddApartmentModal app={app} open={open} handleClose={handleClose} />
        <Button variant="outlined" color="secondary" onClick={handleClick}>
          Delete
        </Button> */}
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

export default ApartmentCard;
