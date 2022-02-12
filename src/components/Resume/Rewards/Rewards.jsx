import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const Rewards = ({ certificate }) => {
  return (
    <Box className="widget card">
      <Box className="card-body">
        <Box className="widget-content">
          <Typography
            className="widget-title card-title"
            variant="h5"
            style={{ color: "slateblue" }}
            gutterBottom
          >
            Awards
          </Typography>
          {certificate.map((cer, i) => (
            <Typography key={i}>
              <EmojiEventsIcon style={{ color: "#daa520" }} /> {cer.name}
              <br /> {cer.desc}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Rewards;
