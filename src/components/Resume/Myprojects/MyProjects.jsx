import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const MyProjects = ({ projects, printTech }) => {
  return (
    <Fragment>
      <Typography
        className="section-title"
        variant="h2"
        style={{ fontSize: 17 }}
      >
        Projects
      </Typography>
      <ul className="time-line">
        {projects.map((pro, i) => (
          <li className="time-line-item" key={i}>
            <Box className="row">
              <Box className="col-lg-9">
                <Typography className="time-line-item-title">
                  {pro.name}
                </Typography>
                <Typography className="time-line-item-subtitle">
                  {pro.status} <br />
                  <span style={{ color: "#330072" }}>
                    {"("}
                    {pro.startDate.toDateString()} -{" "}
                    {pro.endDate.toDateString()}
                    {")"}
                  </span>
                </Typography>
              </Box>
              <Box className="col-lg-3">
                <Typography
                  component="div"
                  variant="caption"
                  color="text.secondary"
                  style={{ fontSize: 12 }}
                >
                  Role : {pro.role}
                </Typography>
                <Typography
                  component="div"
                  variant="caption"
                  color="text.secondary"
                  style={{ fontSize: 12 }}
                >
                  Team Size : {pro.teamSize}
                </Typography>
              </Box>
            </Box>

            <Typography className="time-line-item-content">
              {pro.description}
            </Typography>

            <Stack
              direction={{
                xs: !printTech ? "row" : "column",
                sm: "row",
                md: "row",
              }}
              spacing={{ xs: 0, sm: 1, md: 1 }}
            >
              <Typography
                component="div"
                variant="caption"
                color="text.secondary"
                style={{ color: "#330072", fontSize: 12 }}
              >
                Technology :{" "}
              </Typography>
              {pro.technologies.map((tech, index) => (
                <Typography
                  key={index}
                  component="div"
                  variant="caption"
                  color="text.secondary"
                  style={{ fontSize: 12 }}
                >
                  {tech}
                </Typography>
              ))}
            </Stack>
            <Stack
              direction={{
                xs: !printTech ? "row" : "column",
                sm: "row",
                md: "row",
              }}
              spacing={{ xs: 0, sm: 1, md: 1 }}
            >
              <Typography
                component="div"
                variant="caption"
                color="text.secondary"
                style={{ color: "#330072", fontSize: 12 }}
              >
                {"Tools & IDE"} :{" "}
              </Typography>
              {pro.tools.map((tool, index) => (
                <Typography
                  key={index}
                  component="div"
                  variant="caption"
                  color="text.secondary"
                  style={{ fontSize: 12 }}
                >
                  {tool}
                </Typography>
              ))}
            </Stack>
            <Stack
              direction={{
                xs: !printTech ? "row" : "column",
                sm: "row",
                md: "row",
              }}
              spacing={{ xs: 0, sm: 1, md: 1 }}
            >
              <Typography
                component="div"
                variant="caption"
                color="text.secondary"
                style={{ color: "#330072", fontSize: 12 }}
              >
                {"Environment"} :{" "}
              </Typography>
              {pro.environment.map((env, index) => (
                <Typography
                  key={index}
                  component="div"
                  variant="caption"
                  color="text.secondary"
                  style={{ fontSize: 12 }}
                >
                  {env}
                </Typography>
              ))}
            </Stack>
            <Stack
              direction={{
                xs: !printTech ? "row" : "column",
                sm: "row",
                md: "row",
              }}
              spacing={{ xs: 0, sm: 1, md: 1 }}
            >
              <Typography
                component="div"
                variant="caption"
                color="text.secondary"
                style={{ color: "#330072", fontSize: 12 }}
              >
                {"Database"} :{" "}
              </Typography>
              {pro.database.map((db, index) => (
                <Typography
                  key={index}
                  component="div"
                  variant="caption"
                  color="text.secondary"
                  style={{ fontSize: 12 }}
                >
                  {db}
                </Typography>
              ))}
            </Stack>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default MyProjects;
