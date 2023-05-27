import React from "react";
import "./LeftHeader.css";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
function LeftHeader() {
  return (
    <div className="leftHeader">
      <Link to="/">
        <img
          src="https://i.ibb.co/72dN4JJ/Facebook-icon-2019-1.png"
          class="homeHeader__logo"
        />
      </Link>
      <div className="Search">
        <SearchIcon />
        <input placeholder="Search Facebook" type="Search"></input>
      </div>
    </div>
  );
}

export default LeftHeader;
