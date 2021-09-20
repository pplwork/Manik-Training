import React, { useEffect, useState } from "react";
import AddUser from "./AddUser";
import Home from "./Home";
import TemporaryDrawer from "./test";
function AddMainUser() {
  const [left, setLeft] = useState(false);
  useEffect(() => {
    console.log("add main user aaya");
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
      <AddUser />
    </div>
  );
}

export default AddMainUser;
