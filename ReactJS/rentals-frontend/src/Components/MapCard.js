import React, { useEffect } from "react";
import "./MapCard.scss";
import Button from "@material-ui/core/Button";
import AddApartmentModal from "./AddApartmentModal";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
function MapCard(props) {
  const { app } = props;

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

        <Button
          className="apartment__btn"
          style={{ marginLeft: "auto" }}
          variant="contained"
          color="primary"
        >
          Contact Realtor
        </Button>
      </div>
    </div>
  );
}

export default MapCard;
