import React from "react";
import "./MiddleHeader.css";
import HomeIcon from "@mui/icons-material/Home";
import OutlinedFlagTwoToneIcon from "@mui/icons-material/OutlinedFlagTwoTone";
import OndemandVideoOutlinedIcon from "@mui/icons-material/OndemandVideoOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import IconButton from "@mui/material/IconButton";

function MiddleHeader() {
  const icons = [
    {
      id: 1,
      icon: <HomeIcon />,
    },
    {
      id: 2,
      icon: <OutlinedFlagTwoToneIcon />,
    },
    {
      id: 3,
      icon: <OndemandVideoOutlinedIcon />,
    },
    {
      id: 4,
      icon: <GroupsOutlinedIcon />,
    },
    {
      id: 5,
      icon: <AccountBalanceWalletOutlinedIcon />,
    },
  ];
  return (
    <div className="middleHeader">
      {icons.map((item) => (
        <a className="leftIcon" key={item.id}>
          <IconButton size="large">{item.icon}</IconButton>{" "}
        </a>
      ))}
    </div>
  );
}

export default MiddleHeader;
