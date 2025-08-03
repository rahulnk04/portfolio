import { Box, Typography } from "@mui/material";
import resumeData from "@/Data/Data";
const { name } = resumeData;
const FooterSection = () => {
  return (
    <Box sx={{position:"fixed", bottom :0, width:"100%"}} className="py-6 text-center bg-gradient-to-t from-gray-900 to-gray-800 text-white">
      <Typography variant="body2" sx={{ opacity: 0.9 }}>
        © {new Date().getFullYear()} {name}. All rights reserved.
      </Typography>
    </Box>
  );
};

export default FooterSection;
