/* eslint-disable import/no-unresolved */
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
  Tooltip,
} from '@mui/material';
import { motion } from 'motion/react';
import TextHeader from 'src/components/TextHeader';
import Data, { portfolioConfig, Project } from 'src/data/Data';

const ProjectSection = () => {
  const { keyProjects, coverPicture } = Data;
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
          paddingTop: '6rem', // py-24 = 96px
          paddingBottom: '6rem',
          paddingLeft: '1rem', // px-4 = 16px
          paddingRight: '1rem',
          position: 'relative', // Context for absolute child
          overflow: 'hidden', // Clips the blurred image overflow artifacts
        }}
      >
        {/* Isolated Background Image Layer */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            // backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${Me})`,
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${coverPicture})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            filter: 'blur(3px)', // Blurs only this layer
            transform: 'scale(1.05)',
          }}
        />

        {/* Foreground Content Stack */}
        <Box sx={{ position: 'relative', zIndex: 1 }}>
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
                    <Box sx={{ padding: 2 }}>
                      <CardMedia
                        component="img"
                        height="100"
                        image={project.img}
                        alt={project.name}
                        sx={{
                          objectFit: 'fill',
                          height: 200,
                          filter: 'brightness(0.9)',
                        }}
                        loading="lazy"
                      />
                    </Box>

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

                        {project.description.length > 107 ? (
                          <Tooltip
                            title={
                              <Typography
                                sx={{
                                  fontSize: '1rem',
                                  fontWeight: 500,
                                  color: '#fff',
                                  p: 0.5,
                                  letterSpacing: 0.1,
                                }}
                              >
                                {project.description}
                              </Typography>
                            }
                            placement="top"
                            arrow
                            componentsProps={{
                              tooltip: {
                                sx: {
                                  bgcolor: 'rgba(30,41,59,0.95)',
                                  color: '#fff',
                                  boxShadow: 4,
                                  borderRadius: 2,
                                  px: 2,
                                  py: 1,
                                  maxWidth: 320,
                                },
                                className: 'custom-tooltip',
                              },
                              arrow: {
                                sx: {
                                  color: 'rgba(30,41,59,0.95)',
                                },
                              },
                            }}
                          >
                            <Typography
                              variant="body2"
                              paragraph
                              sx={{ opacity: 0.9, flexGrow: 1, minHeight: 64 }}
                            >
                              {project.description.slice(0, 107) + '...'}
                            </Typography>
                          </Tooltip>
                        ) : (
                          <Typography
                            variant="body2"
                            paragraph
                            sx={{ opacity: 0.9, flexGrow: 1, minHeight: 64 }}
                          >
                            {project.description}
                          </Typography>
                        )}

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
                          size="small"
                          aria-label={`View ${project.name}`}
                          sx={{
                            textTransform: 'none',
                            fontWeight: 500,
                            borderRadius: '40px',
                            borderColor: portfolioConfig.theme.accent,
                            color: portfolioConfig.theme.accent,
                            p: 0,
                            px: 2,
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
                        <Chip
                          label={`${project.currentOrg}`}
                          size="medium"
                          variant="outlined"
                          sx={{
                            borderColor: 'rgba(255,255,255,0.4)',
                            color: 'white',
                            py: 0.5,
                            px: 1.25,
                            width: '100%',
                          }}
                        />
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </motion.section>
    </div>
  );
};

export default ProjectSection;
