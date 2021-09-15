import React from "react";
import "./MapCard.scss";
import Button from "@material-ui/core/Button";
function MapCard(props) {
  const { app } = props;

  return (
    <div className="mapapartment">
      <div className="mapapartment__upper">
        <div className="mapapartment__left">
          <img src={app.photoLink} alt="" className="mapapartment__image" />
        </div>
        <div className="mapapartment__right">
          <div className="mapapartment__heading">{app.name}</div>
          <div className="mapapartment__details">
            <div className="mapapartment__price">
              <span className="mapapartment__bold">Rs.{app.price}</span>
              <span className="mapapartment__light">/month</span>
            </div>
            <div className="mapapartment__size">
              <span className="mapapartment__bold">{app.floorSize}</span>
              <span className="mapapartment__light">sq.ft.</span>
            </div>
            <div className="mapapartment__rooms">
              <span className="mapapartment__bold">{app.Rooms - 1} BHK</span>
            </div>
          </div>
          <div className="mapapartment__description">{app.description}</div>
        </div>
      </div>
      <div className="mapapartment__divider"></div>
      <div className="mapapartment__lower">
        <div className="mapapartment__realtor">
          Posted by Realtor
          <h2>{app.realtor.name}</h2>
        </div>

        <Button
          className="mapapartment__btn"
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
