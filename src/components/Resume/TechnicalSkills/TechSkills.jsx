import React from "react";
import Box from "@mui/material/Box";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const TechSkills = ({ skills, printTech }) => {
  return (
    <Box className="services-section">
      <Typography
        className="section-title"
        variant="h2"
        style={{ fontSize: 17 }}
      >
        Technical Skills
      </Typography>
      {printTech ? (
        <Box className="row myPrint">
          {skills.map((skill, i) => (
            <Box className={`media service-card col-lg-4 col-sm-4`} key={i}>
              <Box className="service-icon">
                <FontAwesomeIcon
                  icon={skill.icon}
                  style={{ color: skill.color }}
                  size="2x"
                />
              </Box>
              <Box className="media-body">
                <Typography className="service-title">{skill.name}</Typography>
                <Typography className="service-description">
                  <Rating
                    precision={0.5}
                    readOnly
                    value={skill.rating}
                    size="small"
                  />
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      ) : (
        <Box className="row myrealPrint">
          {skills.map((skill, i) => (
            <Box className={`media service-card col-4`} key={i}>
              <Box className="service-icon">
                <FontAwesomeIcon
                  icon={skill.icon}
                  style={{ color: skill.color }}
                  size="2x"
                />
              </Box>
              <Box className="media-body">
                <Typography className="service-title">{skill.name}</Typography>
                <Typography className="service-description">
                  <Rating
                    precision={0.5}
                    readOnly
                    value={skill.rating}
                    size="small"
                  />
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default TechSkills;
