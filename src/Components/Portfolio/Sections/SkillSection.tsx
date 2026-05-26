import { Box, Grid, Typography, Avatar, LinearProgress, Stack, Divider } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'motion/react';
import TextHeader from 'src/components/TextHeader';
import Data, { Skill } from 'src/data/Data';

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring' as const, stiffness: 100 },
  },
};

const SkillCard = styled(Box)(() => ({
  background: 'rgba(255,255,255,0.04)',
  borderRadius: 16,
  padding: '1.25rem 1rem',
  position: 'relative',
  overflow: 'hidden',
  border: `1px solid rgba(255,255,255,0.08)`,
  boxShadow: '0 24px 60px -10px rgba(0,0,0,0.4)',
  display: 'flex',
  flexDirection: 'column',
  minHeight: 360,
  height: '100%',
}));

const SkillItem = ({ skill }: { skill: Skill }) => {
  const percentNum = parseInt(skill.percentage.replace('%', ''), 10);
  return (
    <motion.div whileHover={{ scale: 1.03 }} style={{ marginBottom: 12 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
          mb: 0.5,
        }}
      >
        {skill.icon && (
          <Avatar
            sx={{
              width: 32,
              height: 32,
              bgcolor: 'rgba(255,255,255,0.08)',
              color: '#fff',
            }}
          >
            {/* {React.createElement(skill.icon, { fontSize: "small" })} */}
          </Avatar>
        )}
        <Box sx={{ flexGrow: 1, minWidth: 0 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={1}>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 600,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {skill.name}
            </Typography>
            <Typography variant="caption" sx={{ ml: 1, minWidth: 40, textAlign: 'right' }}>
              {skill.percentage}
            </Typography>
          </Stack>
          <LinearProgress
            variant="determinate"
            value={percentNum}
            sx={{
              height: 6,
              borderRadius: 3,
              mt: 0.5,
              backgroundColor: 'rgba(255,255,255,0.1)',
              '& .MuiLinearProgress-bar': {
                background: `linear-gradient(135deg, #fff, #7f8cff)`,
              },
            }}
            aria-label={`${skill.name} proficiency ${skill.percentage}`}
          />
        </Box>
      </Box>
    </motion.div>
  );
};

/**
 * Helper to split an array into two roughly equal halves
 */
const splitArray = <T,>(arr: T[]): [T[], T[]] => {
  const mid = Math.ceil(arr.length / 2);
  return [arr.slice(0, mid), arr.slice(mid)];
};

const SkillSection = () => {
  const { skills } = Data;

  return (
    <Box
      component="section"
      id="skills"
      sx={{
        position: 'relative',
        background: 'linear-gradient(135deg, #0A0A2A 0%, #1A1A44 70%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#E0E0FF',
        // Removed overflow: "hidden" to allow interaction
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle, rgba(74,144,226,0.1) 0%, transparent 60%)',
          zIndex: 0,
          pointerEvents: 'none', // Prevent blocking clicks
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background:
            'repeating-linear-gradient(-45deg, rgba(255,255,255,0.02) 0, rgba(255,255,255,0.02) 1px, transparent 2px, transparent 5px)',
          zIndex: 1,
          opacity: 0.5,
          pointerEvents: 'none', // Prevent blocking clicks
        },
      }}
    >
      <motion.section
        id="skills"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        style={{ width: '100%', paddingTop: 40, paddingBottom: 40 }}
      >
        <Box sx={{ maxWidth: 1120, mx: 'auto', px: { xs: 4, md: 2 } }}>
          <TextHeader title="Skills" />
          <Typography
            variant="body1"
            align="center"
            sx={{
              mb: 8,
              maxWidth: 840,
              mx: 'auto',
              color: 'rgba(255,255,255,0.85)',
              fontSize: '1rem',
              lineHeight: 1.5,
            }}
          >
            Core competencies categorized so you can quickly scan what powers the experience and
            systems I build. Proficiency is shown with both a percentage and a visual bar.
          </Typography>

          <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }}>
            {Object.entries(skills).map(([category, skillList]: [string, Skill[]], idx: number) => {
              const [firstCol, secondCol] = splitArray(skillList);
              return (
                <Grid
                  size={{ xs: 4, sm: 8, md: 6 }}
                  key={idx}
                  // sx={{ display: "flex" }}
                >
                  <motion.div variants={cardVariants} style={{ flex: 1 }}>
                    <SkillCard>
                      <Typography
                        variant="h6"
                        fontWeight={700}
                        sx={{
                          mb: 1,
                          display: 'inline-block',
                          position: 'relative',
                          color: '#fff',
                          textAlign: 'center',
                        }}
                      >
                        {category}
                      </Typography>
                      <Divider
                        sx={{
                          mb: 2,
                          borderColor: 'rgba(255,255,255,0.15)',
                        }}
                      />
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: { xs: 'column', lg: 'row' },
                          gap: { xs: 0, lg: 3 },
                          flexGrow: { xs: 0, lg: 1 },
                          overflow: 'hidden',
                        }}
                      >
                        {/* Two columns to balance height */}
                        <Box sx={{ flex: 1, minWidth: 0 }}>
                          {firstCol.map((skill: Skill, i: number) => (
                            <SkillItem skill={skill} key={i} />
                          ))}
                        </Box>
                        <Box sx={{ flex: 1, minWidth: 0 }}>
                          {secondCol.map((skill: Skill, i: number) => (
                            <SkillItem skill={skill} key={i + firstCol.length} />
                          ))}
                        </Box>
                      </Box>
                    </SkillCard>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </motion.section>
    </Box>
  );
};

export default SkillSection;
