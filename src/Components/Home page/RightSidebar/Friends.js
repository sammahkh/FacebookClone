import React from "react";
import "./Friends.css";
function Friends({ profileimg, name }) {
  return (
    <div className="Frind">
      <img src={profileimg}></img>
      <p>{name}</p>
    </div>
  );
}

export default Friends;
