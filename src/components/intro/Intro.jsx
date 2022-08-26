import React from "react";
import "./intro.scss";

function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <i class="fa-solid fa-code"></i>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Yusuf Karaaslan</h1>
          <h3>CS Student <span></span></h3>
        </div>
            <a href="#pf">
            <i class="fa-solid fa-angle-down"></i>
            </a>


      </div>
    </div>
  );
}

export default Intro;
