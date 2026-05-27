import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { SpeedDial, SpeedDialAction, Box } from '@mui/material';
import { useState } from 'react';
import { NAV_SECTIONS } from './NavSection';

const FloatingNavSpeedDial = () => {
  const [open, setOpen] = useState(false);
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
    setOpen(false);
  };

  const renderActions = [...NAV_SECTIONS].reverse();

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: { xs: 16, sm: 24 },
        right: { xs: 16, sm: 24 },
        zIndex: 1100,
        pointerEvents: 'auto',
      }}
    >
      <SpeedDial
        ariaLabel="Matrix Navigation Terminal"
        icon={
          <MenuOpenIcon
            sx={{
              transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease',
            }}
          />
        }
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        direction="up"
        sx={{
          opacity: open ? 1.0 : 0.55,
          transition: 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s ease',

          '&:hover': {
            opacity: 1.0,
            transform: 'scale(1.05)',
          },

          '& .MuiSpeedDial-fab': {
            backgroundColor: 'rgba(7, 12, 20, 0.85)',
            color: '#f5f7f8ff',
            border: '1px solid rgba(234, 237, 237, 0.87)',
            borderRadius: 0,

            width: { xs: 48, sm: 56 },
            height: { xs: 48, sm: 56 },
            boxShadow: '0 0 10px rgba(74,144,226,0.3)',

            '&:hover': {
              backgroundColor: '#23193bff',
              color: '#f5f6f8ff',
              borderColor: '#383c3cff',
              boxShadow: '0 0 25px rgba(0, 242, 254, 0.5)',
            },
          },
        }}
      >
        {renderActions.map((action) => (
          <SpeedDialAction
            key={action.label}
            icon={action.icon}
            // tooltipTitle={action.label}
            // tooltipOpen={!isMobile}
            onClick={() => scrollToSection(action.target)}
            componentsProps={{
              tooltip: {
                sx: {
                  // Tooltip styling moved here so it inherits visibility states perfectly
                  backgroundColor: 'transparent !important',
                  color: '#ffffff',
                  fontFamily: 'monospace',
                  fontSize: '11px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: 0,
                  paddingX: 1.5,
                  paddingY: 0.5,
                  boxShadow: 'none',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.25s ease',
                },
              },
            }}
            sx={{
              backgroundColor: 'transparent',
              color: '#ffffff',
              borderRadius: 0,
              marginY: 0.5,
              transition: 'all 0.25s ease',
              border: '1px solid transparent',
              '&.MuiSpeedDialAction-staticTooltipVisible': {
                border: '1px solid rgba(255, 255, 255, 0.1)',
              },
              '&:hover': {
                backgroundColor: 'rgba(0, 242, 254, 0.1)',
                boxShadow: '0 0 12px rgba(0, 242, 254, 0.3)',
                transform: 'scale(1.05)',
              },
              '& .MuiSpeedDialAction-fab': {
                backgroundColor: 'transparent !important',
                color: 'inherit',
                boxShadow: 'none',
              },
            }}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default FloatingNavSpeedDial;
