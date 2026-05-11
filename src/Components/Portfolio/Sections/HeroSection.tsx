import { Box, Typography, Button, Avatar, Link } from '@mui/material';
import Lenis from '@studio-freight/lenis';
import { motion, useTransform, useScroll } from 'motion/react';
import React, { useEffect, useState } from 'react';
import Data, { SocialLink } from 'src/data/Data';

const HeroSection = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      lenis.destroy();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const { name, jobTitle, social, profilePicture, professionalJourney, specialCompany } = Data;

  const childVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const heroParallax = useTransform(scrollY, [0, 500], [0, 100]);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <div>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          minHeight: '100vh', // min-h-screen
          position: 'relative', // relative
          overflow: 'hidden', // overflow-hidden
          display: 'flex', // flex
          alignItems: 'center', // items-center
          justifyContent: 'center', // justify-center
        }}
        id="hero"
      >
        <motion.div
          style={{
            y: heroParallax,
            position: 'absolute', // absolute
            top: 0, // inset-0
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 0, // z-0
          }}
        />
        <motion.div
          style={{
            position: 'absolute', // absolute
            width: '10rem', // w-40 = 160px
            height: '10rem', // h-40 = 160px
            background: 'linear-gradient(to right, #60a5fa, #a855f7)', // from-blue-400 to-purple-500
            borderRadius: '9999px', // rounded-full
            opacity: 0.2, // opacity-20
            pointerEvents: 'none', // pointer-events-none
          }}
          animate={{
            x: cursorPosition.x - 80,
            y: cursorPosition.y - 80,
            transition: { type: 'spring', stiffness: 100, damping: 20 },
          }}
        />
        <Box
          sx={{
            textAlign: 'center', // text-center
            paddingLeft: '1rem', // px-4 = 16px
            paddingRight: '1rem',
            zIndex: 10, // z-10
            padding: {
              xs: '87px 5px', // p-8 = 32px
            },
          }}
        >
          <motion.div variants={childVariants}>
            <Avatar
              src={profilePicture}
              alt={name}
              sx={{
                width: 180,
                height: 180,
                mx: 'auto',
                mb: 3,
                border: '3px solid rgba(255,255,255,0.1)',
                boxShadow: '0 0 10px rgba(74,144,226,0.3)',
              }}
            />
          </motion.div>
          <motion.div variants={childVariants}>
            <Typography
              variant="h2"
              fontWeight="bold"
              color="white"
              gutterBottom
              sx={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
            >
              {name}
            </Typography>
          </motion.div>
          <motion.div variants={childVariants}>
            <Typography variant="h5" color="white" gutterBottom sx={{ opacity: 0.9 }}>
              {jobTitle}
            </Typography>
            <Typography variant="h6" color="white" gutterBottom sx={{ opacity: 0.9 }}>
              {specialCompany} <br />
              {Array.from(new Set(professionalJourney.map((d) => d.company))).join(' || ')}
            </Typography>
          </motion.div>
          <motion.div
            variants={childVariants}
            style={{
              display: 'flex', // flex
              justifyContent: 'center', // justify-center
              gap: '1rem', // gap-4 = 16px
              marginTop: '1.5rem', // mt-6 = 24px
            }}
          >
            {social.map((link: SocialLink, index: number) => (
              <Link
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener"
                aria-label={link.name}
              >
                {/* {link.icon} */}
              </Link>
            ))}
          </motion.div>
          <motion.div variants={childVariants}>
            <Button
              variant="contained"
              href="#projects"
              sx={{
                mt: 6,
                px: 4,
                py: 1.5,
                textTransform: 'none',
                // bgcolor: portfolioConfig.theme.accent,
                // background: `linear-gradient(45deg, ${portfolioConfig.theme.accent}, #357ABD)`,
                '&:hover': {
                  transform: 'scale(1.2)',
                  boxShadow: '0 0 10px rgba(74,144,226,0.3)',
                },
                fontWeight: 600,
                borderRadius: 8,
                // boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                border: '3px solid rgba(255,255,255,0.1)',
                boxShadow: '0 0 10px rgba(74,144,226,0.3)',
                background: 'transparent',
                transition: 'transform 0.3s, boxShadow 0.3s',
              }}
              aria-label="View my projects"
              onClick={scrollToContact}
            >
              {(() => {
                const istTimeString = new Date().toLocaleString('en-US', {
                  timeZone: 'Asia/Kolkata',
                });
                const istTime = new Date(istTimeString);
                const hours = istTime.getHours();
                return hours < 12 ? 'Good Morning' : hours < 18 ? 'Good Afternoon' : 'Good Evening';
              })()}
              {' ! Thanks for visiting! Lets Connect to discuss how I can contribute to your team.'}
            </Button>
            <br />
            <Button
              variant="contained"
              href="#projects"
              sx={{
                mt: 6,
                px: 4,
                py: 1.5,
                textTransform: 'none',
                // bgcolor: portfolioConfig.theme.accent,
                // background: `linear-gradient(45deg, ${portfolioConfig.theme.accent}, #357ABD)`,
                '&:hover': {
                  transform: 'scale(1.2)',
                  boxShadow: '0 0 10px rgba(74,144,226,0.3)',
                },
                fontWeight: 600,
                borderRadius: 8,
                // boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                border: '3px solid rgba(255,255,255,0.1)',
                boxShadow: '0 0 10px rgba(74,144,226,0.3)',
                background: 'transparent',
                transition: 'transform 0.3s, boxShadow 0.3s',
              }}
              aria-label="View my projects"
              onClick={scrollToContact}
            >
              {'Click to Connect!'}
            </Button>
          </motion.div>
        </Box>
      </motion.section>
    </div>
  );
};

export default HeroSection;
