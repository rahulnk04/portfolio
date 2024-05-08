import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Education = ({ education }) => {
  return (
    <Box className="col-lg-6">
      <Typography
        className="section-title"
        variant="h2"
        style={{ fontSize: 17 }}
      >
        EDUCATION
      </Typography>
      <ul className="time-line">
        {education.map((edu, i) => (
          <li
            className={`time-line-item ${
              edu.highest && "time-line-item-active"
            }`}
            key={i}
          >
            <Box className="row">
              <Box className="col-lg-9">
                <Typography className="time-line-item-title">
                  {edu.degree}
                </Typography>
                <Typography className="time-line-item-subtitle">
                  {edu.institution} <br />
                  <span style={{ color: "#330072" }}>
                    {"("}
                    {edu.startDate.toDateString()} -{" "}
                    {edu.endDate.toDateString()}
                    {")"}
                  </span>
                </Typography>
              </Box>
              <Box className="col-lg-3">
                <img
                  src={edu.logo}
                  alt={edu.institution}
                  style={{ height: "50px" }}
                />
              </Box>
            </Box>

            <Typography className="time-line-item-content">
              {edu.description}
            </Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default Education;
