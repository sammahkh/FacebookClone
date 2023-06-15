import React from "react";
import Header from "./Header/Header";
import LeftSidebar from "./LeftSidebar/LeftSidebar";
import RightSidebar from "./RightSidebar/RightSidebar";
import Main from "./MainSection/Main";

function Homepage() {
  return (
    <div>
      <Header />
      <LeftSidebar />
      <Main />
      <RightSidebar />
    </div>
  );
}

export default Homepage;
