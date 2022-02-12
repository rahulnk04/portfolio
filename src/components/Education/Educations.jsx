import React from "react";
import "./Educations.css";
import { educationData } from "../../Data/ProjectData";
import Education from "./Education";
import Grid from "@mui/material/Grid";

const Educations = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Qualifications</h1>
        <p className="pl-desc">
          These all are my education history, It facilitates quality learning
          all through the life among people of any age group, cast, creed,
          religion and region. It is the process of achieving knowledge, values,
          skills, beliefs, and moral habits. I'm glad to be Educated.
        </p>
      </div>
      <div className="pl-list">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {educationData.map((item, i) => (
            <Grid item xs={12} sm={12} md={4} key={i}>
              <Education desc={item} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Educations;
