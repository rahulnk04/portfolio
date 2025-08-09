import Data from 'src/data/Data';
import { Box, Typography } from '@mui/material';

const { name } = Data;
const FooterSection = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        paddingTop: '1.5rem', // py-6 = 24px
        paddingBottom: '1.5rem',
        textAlign: 'center', // text-center
        background: 'linear-gradient(to top, #111827, #1f2937)', // bg-gradient-to-t from-gray-900 to-gray-800
        color: 'white', // text-white
        zIndex: 3,
      }}
    >
      <Typography variant="body2" sx={{ opacity: 0.9 }}>
        © {new Date().getFullYear()} {name}. All rights reserved.
      </Typography>
    </Box>
  );
};

export default FooterSection;
