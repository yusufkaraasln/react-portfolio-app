import React from "react";
import "./menu.scss";
function Menu({open}) {
  return (
    <div className={"menu "+(open && "active")}>
      <ul>
        <li>
          <a href="#intro">Home</a>
        </li>
        <li>
          <a href="#pf">Portfolio</a>
        </li>
        <li>
          <a href="#works">Works</a>
        </li>
        <li>
          <a href="#ref">References</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
