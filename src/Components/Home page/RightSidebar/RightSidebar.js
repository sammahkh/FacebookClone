import React from "react";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./RightSidebar.css";
import IconButton from "@mui/material/IconButton";
import { Friends } from "./Friendsdata.js";
import Friend from "./Friends";
function RightSidebar() {
  const icons = [
    {
      id: 1,
      icon: <VideoCameraFrontIcon />,
    },
    {
      id: 2,
      icon: <SearchIcon />,
    },
    {
      id: 3,
      icon: <MoreHorizIcon />,
    },
  ];
  return (
    <div className="Rsidebar">
      <div className="contacts">
        <p>Contacts</p>
        <div className="contactsicons">
          {icons.map((item) => (
            <a className="rightIcon" key={item.id}>
              {" "}
              <IconButton size="large">{item.icon}</IconButton>{" "}
            </a>
          ))}
        </div>
      </div>
      {Friends.map((item) => (
        <a className="friend" key={item.id}>
          {" "}
          <Friend profileimg={item.profileimg} name={item.name} />{" "}
        </a>
      ))}
    </div>
  );
}

export default RightSidebar;
