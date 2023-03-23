import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { dateDifference } from "../../../../Global/DateDifference";

const Work = ({ experience }) => {
  return (
    <Box className="col-lg-6">
      <Typography
        className="section-title"
        variant="h2"
        style={{ fontSize: 17 }}
      >
        Work Experience
      </Typography>
      <ul className="time-line">
        {experience.map((exp, i) => (
          <li className="time-line-item" key={i}>
            <Box className="row">
              <Box className="col-lg-9">
                <Typography className="time-line-item-title">
                  {exp.jobTitle}
                </Typography>
                <Typography className="time-line-item-subtitle">
                  {exp.company} <br />
                  {exp.upcoming && (
                    <span style={{ color: "#330072" }}>
                      {"("}
                      Joining Date - {exp.startDate.toDateString()}
                      {")"}
                    </span>
                  )}
                  {!exp.upcoming && (
                    <span style={{ color: "#330072" }}>
                      {"("}
                      {exp.startDate.toDateString()} -{" "}
                      {exp.present ? "Present" : exp.endDate.toDateString()}
                      {")"}
                    </span>
                  )}
                  <br />
                  {!exp.upcoming && (
                    <span style={{ color: "#000" }}>
                      Service Period :{" "}
                      {dateDifference(
                        exp.startDate,
                        exp.endDate > new Date() ? new Date() : exp.endDate
                      )}
                    </span>
                  )}
                </Typography>
              </Box>
              <Box className="col-lg-3">
                <img
                  src={exp.logo}
                  alt={exp.company}
                  style={{ height: "50px" }}
                />
              </Box>
            </Box>

            <Typography className="time-line-item-content">
              {exp.jobDescription}
            </Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default Work;
