import React from "react";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./RightHeader.css";
import IconButton from "@mui/material/IconButton";

function RightHeader() {
  const icons = [
    {
      id: 1,
      icon: <AddCircleOutlinedIcon />,
    },
    {
      id: 2,
      icon: <MapsUgcIcon />,
    },
    {
      id: 3,
      icon: <NotificationsIcon />,
    },
  ];
  return (
    <div className="rightHeader">
      {icons.map((item) => (
        <a className="rightIcon" key={item.id}>
          {" "}
          <IconButton size="large">{item.icon}</IconButton>{" "}
        </a>
      ))}
      <div className="profile">
        <img
          src="https://i.ibb.co/1zmBtwr/84241059-189132118950875-4138507100605120512-n.jpg"
          alt="profile image"
          style={{ height: "40px" }}
        />
      </div>
    </div>
  );
}

export default RightHeader;
