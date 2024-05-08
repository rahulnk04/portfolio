import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Project = ({ desc }) => {
  return (
    <Card sx={{ minHeight: 250 }}>
      <CardMedia
        component="img"
        height="140"
        image={desc["img"]}
        alt="green iguana"
      />
      <Accordion elevation={0}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ mt: 2 }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ fontSize: 19 }}
          >
            {desc["name"]}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: 13 }}
          >
            {desc["description"]}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Card>
  );
};

export default Project;
