import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Grid,
  Chip,
  Stack,
} from '@mui/material';
import { motion } from 'motion/react';
import TextHeader from 'src/components/TextHeader';
import Data, { portfolioConfig, Project } from 'src/data/Data';

const ProjectSection = () => {
  const { keyProjects } = Data;
  const enhancedProjects = keyProjects;
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const colorGetter = (status: string) => {
    const statusColorMap: Record<string, string> = {
      Active: '#4ade80', // Bright green
      Completed: '#22c55e', // Success green
      Archived: '#f87171', // Red tone
      'In Progress': '#f59e0b', // Amber
    };
    return statusColorMap[status] || portfolioConfig.theme.accent;
  };

  const handleLinkClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div>
      <motion.section
        id="projects"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          paddingTop: '6rem', // py-24 = 96px
          paddingBottom: '6rem',
          paddingLeft: '1rem', // px-4 = 16px
          paddingRight: '1rem',
          position: 'relative', // relative
        }}
      >
        <TextHeader title="Projects" />

        <Grid container spacing={4} justifyContent="center" sx={{ mt: 6 }}>
          {enhancedProjects.map((project: Project, index: number) => (
            <Grid size={{ xs: 12, md: 4, sm: 6 }} key={index}>
              <motion.div
                variants={childVariants}
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  sx={{
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
                  }}
                >
                  <CardMedia
                    component="img"
                    height="100"
                    image={project.img}
                    alt={project.name}
                    sx={{
                      objectFit: 'fill',
                      width: '100%',
                      height: 200,
                      filter: 'brightness(0.9)',
                    }}
                    loading="lazy"
                  />

                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <Stack spacing={1} sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" fontWeight={700} component="h3" gutterBottom>
                        {project.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        paragraph
                        sx={{ opacity: 0.9, flexGrow: 1, minHeight: 64 }}
                      >
                        {project.description.length > 110
                          ? project.description.slice(0, 107) + '...'
                          : project.description}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {project.technologies.map((tech: string, i: number) => (
                          <Chip
                            key={i}
                            label={tech}
                            size="small"
                            sx={{
                              bgcolor: 'rgba(255,255,255,0.1)',
                              color: 'white',
                              fontWeight: 500,
                              borderRadius: 1.5,
                            }}
                            aria-label={`Tech: ${tech}`}
                          />
                        ))}
                      </Box>
                    </Stack>
                    <Chip
                      label={`Team Size: ${project.teamSize}`}
                      size="small"
                      sx={{
                        bgcolor: 'rgba(255,255,255,0.1)',
                        color: 'white',
                        fontWeight: 500,
                        borderRadius: 1.5,
                        mt: 2,
                      }}
                    />
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                      {project.tools.map((tech: string, i: number) => (
                        <Chip
                          key={i}
                          label={tech}
                          size="small"
                          sx={{
                            bgcolor: 'rgba(255,255,255,0.1)',
                            color: 'white',
                            fontWeight: 500,
                            borderRadius: 1.5,
                          }}
                          aria-label={`Tech: ${tech}`}
                        />
                      ))}
                    </Box>
                    <Box
                      sx={{
                        mt: 2,
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: 1,
                      }}
                    >
                      <Button
                        variant="outlined"
                        aria-label={`View ${project.name}`}
                        sx={{
                          textTransform: 'none',
                          fontWeight: 600,
                          borderRadius: 2,
                          borderColor: portfolioConfig.theme.accent,
                          color: portfolioConfig.theme.accent,
                          px: 2,
                          py: 1,
                          '&:hover': {
                            bgcolor: portfolioConfig.theme.accent,
                            color: '#0f172a',
                            borderColor: portfolioConfig.theme.accent,
                          },
                        }}
                        onClick={() => {
                          handleLinkClick(project.link);
                        }}
                      >
                        View Project
                      </Button>
                      <Chip
                        label={project.role}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: 'rgba(255,255,255,0.4)',
                          color: 'white',
                          py: 0.5,
                          px: 1.25,
                        }}
                      />
                      <Chip
                        label={project.status}
                        size="small"
                        sx={{
                          fontWeight: 600,
                          backgroundColor: colorGetter(project.status),
                          color: '#0f172a',
                          py: 0.5,
                          px: 1.25,
                        }}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.section>
    </div>
  );
};

export default ProjectSection;
