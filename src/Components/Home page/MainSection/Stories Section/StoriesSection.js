import React from "react";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import { Stories } from "./Storiesdata.js";
import Story from "./Story";
import "./StoriesSection.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import IconButton from "@mui/material/IconButton";

function StoriesSection() {
  const icons = [
    {
      id: 1,
      icon: <ImportContactsIcon />,
      title: "Stories",
    },
    {
      id: 2,
      icon: <LiveTvIcon />,
      title: "Reels",
    },
  ];
  return (
    <div className="StorySection">
      <div className="top">
        {icons.map((item) => (
          <div className="icon">
            <a href="#">
              <IconButton>{item.icon}</IconButton>
            </a>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      <div className="stories">
        {Stories.map((item) => (
          <div>
            <Story storyimg={item.storyimg} name={item.name} />
          </div>
        ))}
      </div>
      <div className="more">
        <NavigateNextIcon />
      </div>
    </div>
  );
}

export default StoriesSection;
