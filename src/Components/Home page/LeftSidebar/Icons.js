import React from "react";
import IconButton from "@mui/material/IconButton";
import "./Icons.css";
function Icons({ icon, title }) {
  return (
    <div className="Icon">
      <IconButton size="large">{icon}</IconButton>
      <p>{title}</p>
    </div>
  );
}

export default Icons;
