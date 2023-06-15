import React from "react";
import "./Story.css";
function Story({ storyimg, name }) {
  return (
    <div className="story">
      <img src={storyimg}></img>
      <br></br>
      <br></br>
      <br></br>

      <p>{name}</p>
    </div>
  );
}

export default Story;
