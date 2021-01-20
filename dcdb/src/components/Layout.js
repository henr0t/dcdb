import "./Layout.css";
import React from "react";

export const Layout = (props) => (
  <div className="center-position fadin-animation">
    <div className="center-container">{props.children}</div>
  </div>
);
