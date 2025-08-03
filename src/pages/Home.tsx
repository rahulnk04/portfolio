import React from "react";
import { Box } from "@mui/material";
import PortfolioWrapper from "src/components/portfolio/PortfolioWrapper";



const Home = () => {
  return (
    <Box
      sx={{
        bgcolor: "transparent",
        minHeight: "100vh",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <PortfolioWrapper />
    </Box>
  );
};

export default Home;
