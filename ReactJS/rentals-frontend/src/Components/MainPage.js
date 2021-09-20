import React, { useEffect, useState } from "react";
import Home from "./Home";
import HomeMainPage from "./HomeMainPage";
import RightDrawer from "./RightDrawer";
import TemporaryDrawer from "./test";
function MainPage() {
  const [right, setRight] = useState(false);
  const [left, setLeft] = useState(false);

  useEffect(() => {
    const setUI = () => {
      if (
        document.documentElement.clientWidth < 1300 &&
        document.documentElement.clientWidth < 820
      ) {
        setLeft(true);
        setRight(true);
      } else if (
        document.documentElement.clientWidth < 1300 &&
        document.documentElement.clientWidth > 820
      ) {
        setLeft(true);
        setRight(false);
      } else {
        setLeft(false);
        setRight(false);
      }
    };
    setUI();

    window.addEventListener("resize", setUI);
    return () => {
      window.removeEventListener("resize", setUI);
    };
  }, []);
  return (
    <div style={{ display: "flex" }}>
      {left ? <TemporaryDrawer /> : <Home />}
      {right ? <RightDrawer /> : null}
      <HomeMainPage right={right} />
    </div>
  );
}

export default MainPage;
