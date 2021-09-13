import React from "react";
import UserCard from "./UserCard";
import "./UserProfile.scss";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
function UserProfile(props) {
  console.log("props are", props);
  return (
    <div className="userProfile">
      <UserCard user={props} />
    </div>
  );
}

export default UserProfile;
