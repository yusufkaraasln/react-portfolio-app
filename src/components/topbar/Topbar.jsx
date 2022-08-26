import React from "react";
import "./topbar.scss";
function Topbar(props) {
  console.log(props.open);
  return (
    <div className={"topbar " + (props.open && "active")}>
      <div className="topbar-wrapper">
        <div className="topbar-wrapper-left">
          <a href="#intro" className="topbar-wrapper-left-logo">
            krs
          </a>

          <div className="item-container">
            <i class="fa-solid fa-user"></i>
            <span>+90 539 (201) 44 54</span>
          </div>
          <div className="item-container">
            <i class="fa-solid fa-envelope"></i>
            <span>yusufkaraasln@gmail.com</span>
          </div>
        </div>
        <div className="topbar-wrapper-right">
          <div onClick={() => props.setOpen(!props.open)} className="hamburger">
            <span
              style={!props.open ? { width: "32px" } : { width: "36px" }}
              className="line1"
            ></span>
            <span className="line2"></span>
            <span 
              style={!props.open ? { width: "32px" } : { width: "36px" }}
            
            className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
