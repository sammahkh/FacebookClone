import React from "react";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import IconButton from "@mui/material/IconButton";
import "./AddPost.css";
function AddPost() {
  const icons = [
    {
      id: 1,
      icon: <VideoCallIcon />,
      title: "LiveVideo",
    },
    {
      id: 2,
      icon: <PhotoLibraryIcon />,
      title: "Photo/Video",
    },
    {
      id: 3,
      icon: <SentimentVerySatisfiedIcon />,
      title: "Felling/activity",
    },
  ];
  return (
    <div className="postsection">
      <div className="addpost">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXMKvjoFY41ypWrRdVnut-cXUZPCAXcY18PA&usqp=CAU"
          alt="PIC"
        />
        <input type="Mind" placeholder="What's on your mind, Samah?" />
      </div>
      <div className="iconssectoin">
        {icons.map((item) => (
          <div className="icon">
            <IconButton>{item.icon}</IconButton>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddPost;
