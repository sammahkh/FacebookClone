import React from "react";
import LeftHeader from "./LeftHeader";
import "./Header.css";
import MiddleHeader from "./MiddleHeader";
import RightHeader from "./RightHeader";
function Header() {
  return (
    <div className="header">
      <LeftHeader />
      <MiddleHeader />
      <RightHeader />
    </div>
  );
}

export default Header;
