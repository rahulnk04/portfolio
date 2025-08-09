import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import Data, { Experience } from 'src/data/Data';
import TextHeader from 'src/components/TextHeader';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.2 },
  },
};

const ExperienceSection: React.FC = () => {
  const { professionalJourney } = Data;
  const { scrollY } = useScroll();
  const backgroundParallax = useTransform(scrollY, [0, 500], [0, 30]);

  // Card animation with flip-in effect
  const cardVariants = {
    hidden: { opacity: 0, rotateY: 90, x: -100 },
    visible: {
      opacity: 1,
      rotateY: 0,
      x: 0,
      transition: {
        duration: 0.8,
        type: 'spring' as const,
        stiffness: 100,
        damping: 20,
      },
    },
  };

  // List item animation with scale-up
  const listItemVariants = {
    hidden: { opacity: 0, scale: 0.9, x: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.5, bounce: 0.3 },
    },
  };

  return (
    <motion.section
      id="experience"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundPositionY: backgroundParallax,
        paddingTop: '6rem', // py-24 = 96px
        paddingBottom: '6rem',
        paddingLeft: '1rem', // px-4 = 16px
        paddingRight: '1rem',
        position: 'relative', // relative
        overflow: 'hidden', // overflow-hidden
      }}
    >
      {/* Animated Gradient Overlay */}
      <Box
        sx={{
          position: 'absolute', // absolute
          top: 0, // inset-0
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: 0, // z-0
          background:
            'linear-gradient(45deg, rgba(33, 150, 243, 0.3), rgba(156, 39, 176, 0.3), rgba(255, 87, 34, 0.3))',
          backgroundSize: '200% 200%',
          animation: 'gradientFlow 12s ease infinite',
          '@keyframes gradientFlow': {
            '0%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
            '100%': { backgroundPosition: '0% 50%' },
          },
          '@media (prefers-reduced-motion: reduce)': {
            animation: 'none',
          },
        }}
      />

      <TextHeader title="Experience" />

      <Grid container justifyContent="center" sx={{ mt: 6 }}>
        <Grid size={{ xs: 12 }} sx={{ maxWidth: '64rem', mx: 'auto' }}>
          {professionalJourney.map((job: Experience, index: number) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
                y: -5,
                borderColor: 'rgba(33, 150, 243, 0.5)',
                boxShadow: '0 12px 40px rgba(0,0,0,0.3)',
                transition: { duration: 0.3 },
              }}
            >
              <Card
                sx={{
                  width: '100%',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                  borderRadius: 2,
                  position: 'relative',
                  zIndex: 1,
                  mb: 4,
                  '&:hover': {
                    borderColor: 'rgba(33, 150, 243, 0.5)',
                  },
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Grid container columns={12} sx={{ width: '100%' }} spacing={3}>
                    <Grid size={{ xs: 12, md: 12, lg: 2 }}>
                      <Box
                        component="img"
                        src={job.logo}
                        alt={job.title}
                        sx={{
                          width: '100%',
                          height: { md: 120, lg: 80 },
                          borderRadius: 2, // Square with slight rounding for a modern look
                          border: '2px solid rgba(255, 255, 255, 0.3)',
                          objectFit: 'fill',
                          '&:hover': {
                            transform: 'scale(1.1)',
                            boxShadow: '0 0 15px rgba(33, 150, 243, 0.5)',
                            transition: 'transform 0.3s, boxShadow 0.3s',
                          },
                        }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, md: 12, lg: 10 }}>
                      <Box>
                        <Typography
                          variant="h6"
                          fontWeight="bold"
                          sx={{
                            color: 'white',
                            textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                          }}
                        >
                          {job.title}
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.8, fontStyle: 'italic' }}>
                          {job.company} | {job.dates}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                  {/* <Box
                    sx={{
                      display: "flex", // flex
                      alignItems: "center", // items-center
                      gap: "1rem", // gap-4 = 16px
                    }}
                  >
                    <Box
                      component="img"
                      src={job.logo}
                      alt={job.title}
                      sx={{
                        width: 120,
                        height: 80,
                        borderRadius: 2, // Square with slight rounding for a modern look
                        border: "2px solid rgba(255, 255, 255, 0.3)",
                        objectFit: "fill",
                        "&:hover": {
                          transform: "scale(1.1)",
                          boxShadow: "0 0 15px rgba(33, 150, 243, 0.5)",
                          transition: "transform 0.3s, boxShadow 0.3s",
                        },
                      }}
                    />
                    <Box>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{
                          color: "white",
                          textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                        }}
                      >
                        {job.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ opacity: 0.8, fontStyle: "italic" }}
                      >
                        {job.company} | {job.dates}
                      </Typography>
                    </Box>
                  </Box> */}
                  <ul
                    style={{
                      listStyle: 'none', // from your style prop
                      paddingLeft: '1.5rem', // pl-6 = 24px
                      marginTop: '1rem', // mt-4 = 16px
                    }}
                  >
                    {job.responsibilities.map((resp: string, idx: number) => (
                      <Box
                        component={motion.li}
                        key={idx}
                        variants={listItemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover={{
                          scale: 1.05,
                          boxShadow: '0 0 10px rgba(33, 150, 243, 0.3)',
                          transition: { duration: 0.3 },
                        }}
                        sx={{
                          position: 'relative',
                          paddingLeft: '1.5rem',
                          '&:before': {
                            content: '""',
                            position: 'absolute',
                            left: 0,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '8px',
                            height: '8px',
                            background: 'linear-gradient(45deg, #2196F3, #9C27B0)',
                            borderRadius: '50%',
                            boxShadow: '0 0 4px rgba(33, 150, 243, 0.5)',
                          },
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            opacity: 0.85,
                            color: 'white',
                            fontFamily: "'Poppins', sans-serif",
                            textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                          }}
                        >
                          {resp}
                        </Typography>
                      </Box>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Grid>
      </Grid>
    </motion.section>
  );
};

export default ExperienceSection;
