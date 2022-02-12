import React, { Fragment } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CakeIcon from "@mui/icons-material/Cake";
import LanguageIcon from "@mui/icons-material/Language";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Rewards from "../Rewards/Rewards";

const Intro = ({ introData, certificate }) => {
  
  const RemaingDays = () => {
    let day1 = new Date()
    let day2 = introData.lastWorkingDay
    let difference = day2 - day1;
    let days = difference / (1000 * 3600 * 24);
    return <Fragment>{Math.abs(parseInt(days, 10))}</Fragment> ;
  };

  return (
    <Fragment>
      <Box className="myLeftSide">
        <Box className="profile-img-wrapper">
          <img src={introData.avatar} alt="profile" />
        </Box>
        <Typography
          className="profile-name"
          variant="h1"
          style={{ color: "#330072" }}
        >
          {introData.name}
        </Typography>
        <Box className="text-center">
          <span style={{ color: "#330072" }} className="profile-designation">
            {introData.profession}
          </span>
        </Box>
        <Box
          style={{ color: "#330072", fontSize: 15 }}
          className="text-center profile-designation"
        >
          {introData.company}
        </Box>
        <br />
        {!introData.servingNotice ? (
          <Box
            style={{ color: "#330072" }}
            className="text-center profile-designation"
          >
            Notice Period {introData.notice}
          </Box>
        ) : (
          <Box
            style={{ color: "#330072" }}
            className="text-center profile-designation"
          >
            Serving Notice <br />
            Remaining Days : <RemaingDays/>{" "}
            <br />
            From Date : {new Date().toDateString()}
            <br />
            Last Working Day : {introData.lastWorkingDay.toDateString()}
          </Box>
        )}
        <br />

        <Grid className="social-links">
          {introData.social.map((soc, i) => (
            <a
              href={soc.url}
              target="_blank"
              rel="noreferrer"
              className="social-link"
              key={i}
            >
              {soc.icon}
            </a>
          ))}
        </Grid>
        <Box className="widget">
          <Typography variant="h5" className="widget-title" gutterBottom>
            personal information
          </Typography>
          <Box className="widget-content">
            <Typography variant="body1" gutterBottom>
              <CakeIcon fontSize="small" sx={{ mb: 1, color: "slateblue" }} /> :{" "}
              {introData.dob.toDateString()}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <PhoneIcon fontSize="small" sx={{ color: "slateblue" }} /> :{" "}
              {introData.phone}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <AlternateEmailIcon
                fontSize="small"
                sx={{ color: "slateblue" }}
              />{" "}
              : {introData.email}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <LanguageIcon fontSize="small" sx={{ color: "slateblue" }} /> :{" "}
              <a
                href={introData.website.link}
                alt="#"
                style={{ color: "tomato", fontSize: "13px" }}
              >
                {introData.website.name}
              </a>
            </Typography>
            <Typography variant="body1" gutterBottom>
              <LocationOnIcon fontSize="small" sx={{ color: "slateblue" }} /> :{" "}
              {introData.address}
            </Typography>
          </Box>
        </Box>
        <Box className="widget card">
          <Box className="card-body">
            <Box className="widget-content">
              <Typography
                className="widget-title card-title"
                variant="h5"
                style={{ color: "slateblue" }}
                gutterBottom
              >
                LANGUAGES
              </Typography>
              {introData.languages.map((lan, i) => (
                <Typography key={i}>
                  {lan.name} : {lan.profeciency}
                  <br />{" "}
                  <Rating
                    precision={0.5}
                    readOnly
                    value={lan.rate}
                    size="small"
                  />
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
        <Box className="widget card">
          <Box className="card-body">
            <Box className="widget-content">
              <Typography
                className="widget-title card-title"
                variant="h5"
                style={{ color: "slateblue" }}
                gutterBottom
              >
                INTERESTS
              </Typography>
              {introData.intrests.map((intr, i) => (
                <Typography key={i}>{intr}</Typography>
              ))}
            </Box>
          </Box>
        </Box>
        <Rewards certificate={certificate} />
      </Box>
    </Fragment>
  );
};

export default Intro;
