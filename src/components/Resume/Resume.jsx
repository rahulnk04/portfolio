import React, { Fragment, useRef, useState } from "react";
// import React, { Fragment } from "react";
import { myData } from "../../Data/MyData";
import Intro from "./Intro/Intro";
import Bio from "./Bio/Bio";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "./Resume.css";
import WorkEdu from "./WorkAndEdu/WorkEdu";
import TechSkills from "./TechnicalSkills/TechSkills";
import MyProjects from "./Myprojects/MyProjects";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import Snackbar from "@mui/material/Snackbar";
import { useReactToPrint } from "react-to-print";

const Resume = () => {
  const [snackOpen, setSnackOpen] = React.useState(false);
  const componentRef = useRef();
  const [printTech, setPrintTech] = useState(true);

  const handleSnackClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackOpen(false);
  };

  const introData = {
    avatar: myData.avatar,
    name: myData.name,
    profession: myData.profession,
    company: myData.company,
    social: myData.social,
    dob: myData.dateOfBirth,
    website: myData.website,
    phone: myData.phone,
    email: myData.email,
    address: myData.address,
    languages: myData.languages,
    intrests: myData.intrests,
    notice: myData.noticePeriod,
    servingNotice: myData.servingNotice,
    lastWorkingDay: myData.lastWorkingDay,
    companyStartDate: myData.companyStartDate,
  };
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `Rahul_Ranjan_Nayak_Resume_${new Date()
      .toLocaleDateString("en-US", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
      .replaceAll("/", "_")}_${myData.company.replaceAll(" ", "_")}`,
  });
  return (
    <Fragment>
      <Box sx={{ padding: "3%" }}>
        <Button
          size="small"
          variant = "contained"
          startIcon={<DownloadIcon />}
          onClick={() => {
            setPrintTech(false);
            setSnackOpen(true);
            setTimeout(() => {
              handlePrint();
              setSnackOpen(true);
              setPrintTech(true);
            }, 2000);
          }}
        >
          Print this out!
        </Button>
        <Paper elevation={2}>
          <Box className="content-wrapper" ref={componentRef}>
            {/* <Box className="content-wrapper"> */}
            <Intro introData={introData} certificate={myData.certificate} />
            <Box className="mainTag">
              <Bio bio={myData.bio} />
              <WorkEdu
                education={myData.education}
                experience={myData.experience}
              />
              <TechSkills skills={myData.skills} printTech={printTech} />
              <MyProjects
                projects={myData.projects}
                printTech={printTech}
                className="myProjects"
              />
            </Box>
          </Box>
        </Paper>
      </Box>
      <Snackbar
        open={snackOpen}
        autoHideDuration={2000}
        onClose={handleSnackClose}
        message="Your Download will start in 3sec"
      />
    </Fragment>
  );
};

export default Resume;
