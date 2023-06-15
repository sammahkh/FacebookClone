import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import IconButton from "@mui/material/IconButton";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import "./Posted.css";
function Posted() {
  const icons = [
    {
      id: 1,
      icon: <ThumbUpOffAltIcon />,
      title: "Like",
    },
    {
      id: 2,
      icon: <ChatBubbleOutlineIcon />,
      title: "Comment",
    },
    {
      id: 3,
      icon: <ShareIcon />,
      title: "Share",
    },
  ];
  return (
    <div className="Posted">
      <div className="top">
        <div className="postinfo">
          <img
            src="https://scontent.fjrs10-1.fna.fbcdn.net/v/t39.30808-6/266077622_1860475650807998_781679198800628585_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=89zOJ6LoLmcAX-PlI9I&_nc_ht=scontent.fjrs10-1.fna&oh=00_AfA6EyPqhcYbzd7WUjqzBUGzwZbGfo8SWiX1IdudLq0_XA&oe=648FCD08"
            alt="Img"
            style={{ height: "50px", width: "50px", borderRadius: "50%" }}
          />
          <p>Emma</p>
          <div className="update">updated her cover image.</div>
        </div>
        <div className="edit">
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </div>
      </div>
      <div className="caption">
        Please Like, Comment and Subscribe to our YouTube Channel.
      </div>
      <br></br>
      <div className="FacebookImg">
        <img
          src="https://i.pinimg.com/originals/64/1e/34/641e34a438b3950236f1b1f4ec1a5b4d.jpg"
          alt="dp"
          style={{ height: "auto", width: "100%" }}
        />
      </div>
      <div className="reaction">
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

export default Posted;
