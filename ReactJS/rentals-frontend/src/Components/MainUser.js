import React, { useEffect, useState } from "react";
import Home from "./Home";
import TemporaryDrawer from "./test";
import UserSearch from "./UserSearch";
function MainUser() {
  const [left, setLeft] = useState(false);
  useEffect(() => {
    const setUI = () => {
      if (document.documentElement.clientWidth < 820) {
        setLeft(true);
      } else {
        setLeft(false);
      }
    };
    setUI();
    window.addEventListener("resize", setUI);
    return () => {
      window.removeEventListener("resize", setUI);
    };
  });
  return (
    <div style={{ display: "flex" }}>
      {left ? <TemporaryDrawer /> : <Home />}

      <UserSearch />
    </div>
  );
}

export default MainUser;
