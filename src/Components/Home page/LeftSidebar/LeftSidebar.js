import React from "react";
import "./LeftSidebar.css";
import { Dataicons } from "./Dataicons";
import Icons from "./Icons";
function LeftSidebar() {
  return (
    <div className="Lside">
      <div className="Profile">
        <img
          src="https://i.ibb.co/1zmBtwr/84241059-189132118950875-4138507100605120512-n.jpg"
          alt="dp"
        />
        Samah Bani Odeh
      </div>
      {Dataicons.map((item) => (
        <Icons icon={item.icon} title={item.title} />
      ))}
    </div>
  );
}

export default LeftSidebar;
