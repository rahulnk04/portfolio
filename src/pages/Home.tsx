import React from "react";
import { Box } from "@mui/material";
import PortfolioWrapper from "src/components/portfolio/PortfolioWrapper";
import BrowserTitle from "src/components/browserTitle/BrowserTitle";
import Data from "src/data/Data";

const Home = () => {
  const { name } = Data;
  return (
    <Box
      sx={{
        bgcolor: "transparent",
        minHeight: "100vh",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <BrowserTitle title={name + " Portfolio"} />
      <PortfolioWrapper />
    </Box>
  );
};

export default Home;
