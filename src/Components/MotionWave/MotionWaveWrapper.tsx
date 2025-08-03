import React from "react";
import { Box } from "@mui/material";

type Props = {
  children?: React.ReactNode;
};
const MotionWaveWrapper: React.FC<Props> = (props: Props) => {
  const { children } = props;
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#4973ff",
        boxShadow: "inset 0 0 50px rgba(0, 0, 0, 0.5)",
      }}
    >
      {/* Animated Waves */}
      <Box
        className="wave"
        sx={{
          position: "absolute",
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        {[1, 2, 3].map((i) => (
          <Box
            key={i}
            component="span"
            sx={{
              content: '""',
              position: "absolute",
              width: "325vh",
              height: "325vh",
              top: 0,
              left: "50%",
              transform: "translate(-50%, -75%)",
              borderRadius: i === 1 ? "45%" : i === 2 ? "40%" : "42.5%",
              background:
                i === 1 ? "rgba(20, 20, 20, 1)" : "rgba(20, 20, 20, 0.5)",
              animation: `rotateAnim ${i * 5}s linear infinite`,
              zIndex: 0,
            }}
          />
        ))}
      </Box>

      {/* Foreground Content */}
      <Box
        className="content"
        sx={{
          position: "relative",
          zIndex: 1,
          color: "#fff",
          textAlign: "center",
        }}
      >
        {children}
      </Box>

      <style>
        {`
          @keyframes rotateAnim {
            0% {
              transform: translate(-50%, -75%) rotate(0deg);
            }
            100% {
              transform: translate(-50%, -75%) rotate(360deg);
            }
          }
        `}
      </style>
    </Box>
  );
};

export default MotionWaveWrapper;
