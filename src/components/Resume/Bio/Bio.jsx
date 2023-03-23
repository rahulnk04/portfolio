import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Bio = ({ bio, bioKeyPoints }) => {
  return (
    <Grid className="intro-section">
      <Typography
        className="section-title"
        variant="h5"
        style={{ color: "#330072" }}
      >
        Resume
        <br />
      </Typography>
      <p
        style={{
          textTransform: "none",
          color: "#000",
          fontSize: "16px",
        }}
      >
        {bio}
      </p>
      <ul style={{}}>
        {bioKeyPoints.map((biokey, i) => (
          <li
            style={{
              textTransform: "none",
              color: "#000",
              fontSize: "14px",
              listStyleType: "square",
            }}
            key={i}
          >
            {biokey}
          </li>
        ))}
      </ul>
    </Grid>
  );
};

export default Bio;
