import React from "react";
import svg from "../assets/404.svg";
import Button from "@material-ui/core/Button";
import "./Page404.scss";
import { Link } from "react-router-dom";
function Page404() {
  return (
    <div className="notfound">
      <img className="notfound__img" src={svg} alt=""></img>
      <div className="notfound__text">404 . Page not found</div>
      <Link to="/">
        <Button className="notfound__btn" variant="contained">
          Return
        </Button>
      </Link>
    </div>
  );
}

export default Page404;
