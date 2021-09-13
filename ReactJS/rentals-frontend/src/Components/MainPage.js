import React from "react";
import Home from "./Home";
import HomeMainPage from "./HomeMainPage";
function MainPage() {
  return (
    <div style={{ display: "flex" }}>
      <Home />
      <HomeMainPage />
    </div>
  );
}

export default MainPage;
