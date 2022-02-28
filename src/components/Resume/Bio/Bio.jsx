import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Bio = ({ bio }) => {
  return (
    <Grid className="intro-section">
      <Typography
        className="section-title"
        variant="h5"
        style={{ color: "#330072" }}
      >
        Resume<br/>
        <p style={{textTransform:"none", color:"#000"}}>{bio}</p>
      </Typography>
    </Grid>
  );
};

export default Bio;
