import { Box, IconButton, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { createElement } from 'react';

import Data, { portfolioConfig, SocialLink } from 'src/data/Data';

interface Props {
  width?: number | string;
  height?: number | string;
}

const HeaderSocial = (props: Props) => {
  // 1. Fallback constants default to 44 if not explicitly provided
  const { width = 44, height = 44 } = props;
  const { social } = Data;

  // 2. Derive font size for the internal SVG (approx. 50% of container size works perfectly)
  const numericHeight = typeof height === 'number' ? height : parseInt(height as string, 10) || 44;
  const iconFontSize = `${numericHeight * 0.5}px`;

  return (
    <Box
      sx={{
        flex: '0 0 auto',
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
      }}
    >hhh
      <Stack direction="row" spacing={1}>
        {social.map((link: SocialLink, i: number) => (
          <motion.div key={i} whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }}>
            <IconButton
              component="a"
              href={link.url || '#'}
              target="_blank"
              rel="noopener"
              aria-label={link.name}
              size="small"
              sx={{
                bgcolor: 'transparent',
                color: '#fff',
                borderRadius: 2,

                // Assign custom bounding parameters dynamically
                width: width,
                height: height,

                transition: 'box-shadow .2s ease',
                '&:hover': {
                  boxShadow: `0 10px 30px -5px ${portfolioConfig.theme.accent}88`,
                  bgcolor: 'rgba(255,255,255,0.12)',
                },

                // 3. TARGET INTERNALS: Force the dynamically rendered SVG path tag to match scaling rules
                '& svg': {
                  fontSize: iconFontSize,
                  width: iconFontSize,
                  height: iconFontSize,
                },
              }}
            >
              {/* Removed fontSize="small" from here so the explicit sx style rules can rule over layout defaults */}
              {createElement(link.icon)}
            </IconButton>
          </motion.div>
        ))}
      </Stack>
    </Box>
  );
};

export default HeaderSocial;
