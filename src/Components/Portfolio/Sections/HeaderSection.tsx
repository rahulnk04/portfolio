import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Stack,
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  useMediaQuery,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import React, { createElement, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Data, { portfolioConfig, SocialLink } from 'src/data/Data';

const NAV_SECTIONS = [
  { label: 'Home', target: 'hero' },
  { label: 'About', target: 'about' },
  { label: 'Projects', target: 'projects' },
  { label: 'Skills', target: 'skills' },
  { label: 'Experience', target: 'experience' },
  //   { label: "Education", target: "education" },
  { label: 'Contact', target: 'contact' },
];

const HeaderSection = () => {
  const location = useLocation(); // Use useNavigate for programmatic navigation
  const navigate = useNavigate();

  const scrollToSection = (id: string, path: string) => {
    if (path !== '/home') {
      navigate('/home'); // Navigate to the correct path first
    }

    const el = document.getElementById(id);
    if (!el) return;
    const yOffset = -80; // adjust if header height differs
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };
  const { social, name } = Data;
  const [open, setOpen] = useState(false);
  const isMd = useMediaQuery('(min-width:900px)');
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      // naive intersection fallback: determine closest section in viewport center
      let current = '';
      NAV_SECTIONS.forEach((s) => {
        const el = document.getElementById(s.target);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4) current = s.target;
        }
      });
      setActive(current || 'hero');
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ y: -22, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 120,
            damping: 20,
            duration: 0.5,
          }}
          style={{ position: 'fixed', top: 0, zIndex: 1400, width: '100%' }}
        >
          <AppBar
            position="static"
            elevation={0}
            sx={{
              backdropFilter: 'saturate(180%) blur(18px)',
              background: 'rgba(15, 15, 15, 0.65)', // darker, blackish tone
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 16px 50px -10px rgba(0,0,0,0.55)', // deeper shadow
            }}
          >
            <Toolbar
              disableGutters
              sx={{
                px: { xs: 3, md: 8 },
                minHeight: 72,
                gap: 2,
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              {/* Left: Name / Logo */}
              <Box sx={{ flex: '0 0 auto', display: 'flex', alignItems: 'center' }}>
                <motion.div whileTap={{ scale: 0.95 }} style={{ cursor: 'pointer' }}>
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    sx={{
                      letterSpacing: 1,
                      color: '#fff',
                      userSelect: 'none',
                    }}
                    onClick={() => scrollToSection('hero', location.pathname)}
                  >
                    {name}
                  </Typography>
                </motion.div>
              </Box>

              {/* Center nav */}
              {isMd && (
                <Box
                  sx={{
                    flex: '1 1 auto',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Stack direction="row" spacing={3} component="nav" aria-label="Main navigation">
                    {NAV_SECTIONS.map((s) => (
                      <Box key={s.target} sx={{ position: 'relative' }}>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          transition={{
                            type: 'spring',
                            stiffness: 200,
                            damping: 18,
                          }}
                        >
                          <Button
                            onClick={() => {
                              scrollToSection(s.target, location.pathname);
                            }}
                            disableRipple
                            sx={{
                              color: '#fff',
                              textTransform: 'none',
                              fontWeight: 600,
                              px: 1.5,
                              position: 'relative',
                              background: 'transparent',
                              minWidth: 70,
                            }}
                            aria-label={`Go to ${s.label}`}
                          >
                            {s.label}
                          </Button>
                        </motion.div>
                        {/* Animated underline if active */}
                        {active === s.target && (
                          <motion.div
                            layoutId="nav-underline"
                            transition={{
                              type: 'spring',
                              stiffness: 260,
                              damping: 30,
                            }}
                            style={{
                              position: 'absolute',
                              left: 0,
                              right: 0,
                              height: 3,
                              borderRadius: 2,
                              background: portfolioConfig.theme.accent,
                              bottom: -2,
                            }}
                          />
                        )}
                      </Box>
                    ))}
                  </Stack>
                </Box>
              )}

              {/* Right: socials + mobile menu */}
              <Box
                sx={{
                  flex: '0 0 auto',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                }}
              >
                {isMd && (
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
                            width: 44,
                            height: 44,
                            transition: 'box-shadow .2s ease',
                            '&:hover': {
                              boxShadow: `0 10px 30px -5px ${portfolioConfig.theme.accent}88`,
                              bgcolor: 'rgba(255,255,255,0.12)',
                            },
                          }}
                        >
                          {createElement(link.icon, { fontSize: 'small' })}
                        </IconButton>
                      </motion.div>
                    ))}
                  </Stack>
                )}
                {!isMd && (
                  <IconButton
                    aria-label="Open menu"
                    onClick={() => setOpen(true)}
                    sx={{
                      ml: 1,
                      color: '#fff',
                      bgcolor: 'rgba(255,255,255,0.08)',
                      '&:hover': { bgcolor: 'rgba(255,255,255,0.15)' },
                    }}
                  >
                    <MenuIcon />
                  </IconButton>
                )}
              </Box>
            </Toolbar>
          </AppBar>
        </motion.div>
      </AnimatePresence>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={open}
        sx={{ zIndex: 99999 }}
        onClose={() => setOpen(false)}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            width: 300,
            bgcolor: 'transparent',
            color: '#E8E8FF',
            backdropFilter: 'blur(12px)',
            borderLeft: '1px solid rgba(255,255,255,0.08)',
          },
        }}
      >
        <Box sx={{ height: '100' }}>
          <Box
            sx={{
              p: 3,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography variant="h6" fontWeight={700}>
              Menu
            </Typography>
            <IconButton
              onClick={() => setOpen(false)}
              sx={{ color: '#fff' }}
              aria-label="Close menu"
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />
          <List>
            {NAV_SECTIONS.map((s) => (
              <ListItemButton
                key={s.target}
                onClick={() => {
                  scrollToSection(s.target, location.pathname);
                  setOpen(false);
                }}
                sx={{ py: 1.5 }}
              >
                <ListItemText
                  primary={s.label}
                  primaryTypographyProps={{
                    fontWeight: 600,
                    sx: { color: '#fff' },
                  }}
                />
              </ListItemButton>
            ))}
          </List>
          <Divider sx={{ my: 1, borderColor: 'rgba(255,255,255,0.1)' }} />
          <Box sx={{ px: 3, mt: 1, position: 'fixed', bottom: '30px' }}>
            <Typography variant="subtitle2" gutterBottom>
              Connect
            </Typography>
            <Stack direction="row" spacing={1}>
              {social.map((link: SocialLink, i: number) => (
                <motion.div key={i} whileHover={{ scale: 1.1 }}>
                  <IconButton
                    component="a"
                    href={link.url || '#'}
                    target="_blank"
                    rel="noopener"
                    aria-label={link.name}
                    sx={{
                      bgcolor: 'transparent',
                      color: '#fff',
                      borderRadius: 2,
                      width: 40,
                      height: 40,
                    }}
                  >
                    {createElement(link.icon, { fontSize: 'small' })}
                  </IconButton>
                </motion.div>
              ))}
            </Stack>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default HeaderSection;
