import React from "react";
import Box from "@mui/material/Box";
import Education from "./Education/Education";
import Work from "./Work/Work";

const WorkEdu = ({ education, experience }) => {
  return (
    <Box className="resume-section">
      <Box className="row">
        <Work experience={experience} />
        <Education education={education} />
      </Box>
    </Box>
  );
};

export default WorkEdu;
