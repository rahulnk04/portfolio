import React from "react";
import Box from "@mui/material/Box";
import Education from "./Education/Education";
import Work from "./Work/Work";

const WorkEdu = ({ education, experience }) => {
  return (
    <Box className="resume-section">
      <Box className="row">
        <Education education={education}/>
        <Work experience={experience} />
      </Box>
    </Box>
  );
};

export default WorkEdu;
