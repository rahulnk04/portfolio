import React from "react";
import { Typography, Card, CardContent, Grid } from "@mui/material";
import { motion } from "framer-motion";
import resumeData from "@/Data/Data";
import MotionWaveWrapper from "@/Components/MotionWave/MotionWaveWrapper";
import TextHeader from "@/Components/TextHeader";

const AboutSection: React.FC = () => {
  const { careerSnapshot, bioKeyPoints } = resumeData;
  // Animation for individual words in careerSnapshot
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Split careerSnapshot into words for animation
  const words = careerSnapshot.split(" ").map((word, index) => (
    <motion.span
      key={index}
      variants={textVariants}
      style={{ display: "inline-block", marginRight: "0.25em" }}
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
      transition: { duration: 0.8, type: "spring" as const, stiffness: 100 },
    },
  };

  // Enhanced list item animation with bounce
  const listItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, type: "spring", bounce: 0.4 } as const,
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
              ease: "easeOut",
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
        <Grid container justifyContent="center" className="z-10 relative">
          <Grid size={{ xs: 12, md: 8 }}>
            <motion.div variants={cardVariants}>
              <Card
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  color: "white",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                }}
                className="bg-black rounded-2xl shadow-2xl transition-all duration-300 hover:scale-[1.015] hover:-translate-y-2 backdrop-blur-lg border border-white/10 "
              >
                <CardContent className="p-6 md:p-10">
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
                      className="text-white/90 leading-relaxed text-lg"
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
                      className="text-white font-bold mt-8 text-xl pt-3.5"
                    >
                      Key Strengths
                    </Typography>
                  </motion.div>

                  <ul className="list-disc pl-6 mt-3 space-y-2">
                    {bioKeyPoints.slice(0, 5).map((point, index) => (
                      <motion.div
                        key={index}
                        variants={listItemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        <Typography variant="body2" className="text-white/80">
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
