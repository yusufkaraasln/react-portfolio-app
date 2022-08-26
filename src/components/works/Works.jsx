import React from "react";

import { featuredData } from "../../dummyData";

import "./works.scss";

function Works() {
  const [currentSlide, setSlideNumber] = React.useState(0);

  const handleClick = (direction) => {
    direction === "left"
      ? setSlideNumber(currentSlide > 0 ? currentSlide - 1 : featuredData.length-1)
      : setSlideNumber(
          currentSlide < featuredData.length - 1 ? currentSlide + 1 : 0
        );
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {featuredData.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="left-container">
                  <div className="img-container">
                    <i class="fa-solid fa-mobile-screen-button"></i>
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <i
        className="fa-solid fa-angle-left arrow left"
        onClick={() => handleClick("left")}
      ></i>
      <i
        className="fa-solid fa-angle-right arrow right"
        onClick={() => handleClick()}
      ></i>
    </div>
  );
}

export default Works;
