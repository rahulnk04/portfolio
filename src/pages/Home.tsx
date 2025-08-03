import React from "react";
import { Box } from "@mui/material";
import PortfolioWrapper from "@/Components/Portfolio/PortfolioWrapper";

const Home: React.FC = () => {
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
