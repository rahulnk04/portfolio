import React from "react";
import "./Projects.css";
import { projectData } from "../../Data/ProjectData";
import Project from "../Project/Project";
import Grid from "@mui/material/Grid";
import { myData } from "../../Data/MyData";

const Projects = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Projects & Applications</h1>
        <p className="pl-desc">
          These all client-side and server-side software application in which
          the client runs or request in a web browser.
        </p>
      </div>
      <div className="pl-list">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {myData.projects.map((item, i) => (
            <Grid item xs={12} sm={12} md={4} key={i}>
              <Project desc={item} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Projects;
