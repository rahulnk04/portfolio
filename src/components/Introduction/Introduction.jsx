import React from "react";
import "./Introduction.css";
import Me from "../../images/Me.PNG";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import { myData } from "../../Data/MyData";

const Introduction = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h3 className="i-name">Rahul Ranjan Nayak</h3>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">MERN Stack Developer</div>
              <div className="i-title-item">Node JS Developer</div>
              <div className="i-title-item">React JS Developer</div>
              <div className="i-title-item">Angular Developer</div>
              <div className="i-title-item">Python Developer</div>
            </div>
          </div>
          <h3>
            {"< "}
            {myData.company}
            {" >"}
          </h3>
          <p className="i-desc">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
        </div>
        <ArrowCircleDownIcon className="i-scroll" />
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Introduction;
