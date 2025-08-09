import React from 'react';
import { Typography, Card, CardContent, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import TextHeader from 'src/components/TextHeader';
import MotionWaveWrapper from 'src/components/motionwave/MotionWaveWrapper';
import Data from 'src/data/Data';

const AboutSection: React.FC = () => {
  const { careerSnapshot, bioKeyPoints } = Data;
  // Animation for individual words in careerSnapshot
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Split careerSnapshot into words for animation
  const words = careerSnapshot.split(' ').map((word, index) => (
    <motion.span
      key={index}
      variants={textVariants}
      style={{ display: 'inline-block', marginRight: '0.25em' }}
    >
      {word}
    </motion.span>
  ));

  // Enhanced card animation with scale and rotate
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.92, rotate: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      y: 0,
      transition: { duration: 0.8, type: 'spring' as const, stiffness: 100 },
    },
  };

  // Enhanced list item animation with bounce
  const listItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, type: 'spring', bounce: 0.4 } as const,
    },
  };

  return (
    <MotionWaveWrapper>
      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.7,
              ease: 'easeOut',
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {/* Heading */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          <TextHeader title="About Me" />
        </motion.div>

        {/* Content */}
        <Grid
          container
          justifyContent="center"
          sx={{
            zIndex: 10,
            position: 'relative',
          }}
        >
          <Grid size={{ xs: 12, md: 8 }}>
            <motion.div variants={cardVariants}>
              <Card
                sx={{
                  bgcolor: 'rgba(255, 255, 255, 0.1)', // glassmorphism background
                  color: 'white',
                  borderRadius: '1rem', // rounded-2xl
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', // shadow-2xl
                  transition: 'all 0.3s ease', // transition-all duration-300
                  backdropFilter: 'blur(16px)', // backdrop-blur-lg overrides old blur(8px)
                  border: '1px solid rgba(255, 255, 255, 0.1)', // border border-white/10
                  '&:hover': {
                    transform: 'scale(1.015) translateY(-0.5rem)', // hover effects
                  },
                }}
              >
                <CardContent
                  sx={{
                    p: { xs: 6, md: 10 }, // Tailwind spacing scale: p-6 → theme.spacing(6), p-10 → theme.spacing(10)
                  }}
                >
                  <motion.div
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.1 },
                      },
                    }}
                    initial="hidden"
                    animate="visible"
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.9)', // text-white/90
                        lineHeight: 1.625, // leading-relaxed in Tailwind = ~1.625
                        fontSize: '1.125rem', // text-lg = 18px
                      }}
                    >
                      {words}
                    </Typography>
                  </motion.div>

                  <motion.div
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.2 },
                      },
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: 'white', // text-white
                        fontWeight: 'bold', // font-bold
                        mt: '2rem', // mt-8 = 32px = 2rem
                        fontSize: '1.25rem', // text-xl = 20px
                        pt: '0.875rem', // pt-3.5 = 14px
                      }}
                    >
                      Key Strengths
                    </Typography>
                  </motion.div>

                  <ul
                    style={{
                      listStyleType: 'disc', // list-disc
                      paddingLeft: '1.5rem', // pl-6 = 24px
                      marginTop: '0.75rem', // mt-3 = 12px
                    }}
                  >
                    {bioKeyPoints.slice(0, 5).map((point, index) => (
                      <motion.div
                        key={index}
                        variants={listItemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            color: 'rgba(255, 255, 255, 0.8)',
                          }}
                        >
                          {point}
                        </Typography>
                      </motion.div>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </motion.section>
    </MotionWaveWrapper>
  );
};

export default AboutSection;
