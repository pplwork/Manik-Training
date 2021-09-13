import React from "react";
import Home from "./Home";
import UserSearch from "./UserSearch";
function MainUser() {
  return (
    <div style={{ display: "flex" }}>
      <Home />
      <UserSearch />
    </div>
  );
}

export default MainUser;
