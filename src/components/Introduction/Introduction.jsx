import React from "react";
import "./Introduction.css";
import Me from "../../images/Me.PNG";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import { myData } from "../../Data/MyData";
import SapientImage from "../../images/sapient.jpeg";

const Introduction = () => {
  return (
    <>
      <div className="i">
        <div className="i-left">
          <div className="i-left-wrapper">
            <h2 className="i-intro">Hello, My name is</h2>
            <h3 className="i-name">Rahul Ranjan Nayak</h3>
            <div className="">
              <h4>Senior Experience Engineer 1</h4>
              <div>
                <img
                  src={SapientImage}
                  alt={myData.company}
                  width={120}
                  style={{ marginLeft: "-5px", textAlign: "center" }}
                />
                <img
                  src={
                    "data:image/png;base64,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"
                  }
                  alt={myData.company}
                  width={120}
                  style={{ marginLeft: "15px" }}
                />
              </div>

              <p className="i-desc"></p>
            </div>
            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">Next JS Engineer</div>
                <div className="i-title-item">React JS Engineer</div>
                <div className="i-title-item">Node JS Engineer</div>
                <div className="i-title-item">JavaScript Engineer</div>
                <div className="i-title-item">Full Stack Engineer</div>
              </div>
            </div>
          </div>

          <ArrowCircleDownIcon className="i-scroll" />
        </div>
        <div className="i-right">
          <div className="i-bg"></div>
          <img src={Me} alt="" className="i-img" />
        </div>
      </div>
    </>
  );
};

export default Introduction;
