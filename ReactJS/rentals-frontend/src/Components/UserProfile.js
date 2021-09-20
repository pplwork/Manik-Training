import React, { useState } from "react";
import UserCard from "./UserCard";
import "./UserProfile.scss";
function UserProfile(props) {
  console.log("props are", props);
  const [user, setUser] = useState(props);
  return (
    <div className="userProfile">
      <UserCard user={user} setUser={setUser} />
    </div>
  );
}

export default UserProfile;
