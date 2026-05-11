import { Grid, Box, Typography, Card, Avatar, Link, Container, Button } from '@mui/material';
import Chip from '@mui/material/Chip';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useRef } from 'react';
import BrowserTitle from 'src/components/browserTitle/BrowserTitle';
import FooterSection from 'src/components/portfolio/sections/FooterSection';
import HeaderSection from 'src/components/portfolio/sections/HeaderSection';
import Data from 'src/data/Data';

const {
  name,
  jobTitle,
  address,
  phone,
  email,
  profilePicture,
  noticePeriod,
  careerSnapshot,
  keyAchievements,
  professionalJourney,
  keyProjects,
  skills,
  education,
  certificates,
  languages,
  companyStartDate,
  company,
} = Data;

const Resume = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const handlePrint = async () => {
    // setIsGenerating(true);
    try {
      const element = componentRef.current;
      if (!element) return;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
      });
      const imgData = canvas.toDataURL('image/png', 1.0);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'in',
        format: 'a4',
      });
      const imgWidth = 8.27;
      const pageHeight = 11.69;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position -= pageHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, undefined, 'FAST');
        heightLeft -= pageHeight;
      }

      const today = new Date();
      const fileName = `${name}_${today.getDate()}_${
        today.getMonth() + 1
      }_${today.getFullYear()}_Resume.pdf`;
      pdf.save(fileName);
    } catch (error) {
      console.error('PDF generation failed:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      //   setIsGenerating(false);
    }
  };
  return (
    <Box
      sx={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        py: { xs: 4, md: 8 },
      }}
    >
      <BrowserTitle title={name + ' Resume'} />
      <HeaderSection />
      <Container>
        <Button
          variant="outlined"
          fullWidth
          onClick={handlePrint}
          sx={{
            mt: 3,
            mb: 3,
            color: '#ffffff',
            px: 4,
            py: 1.5,
            zIndex: 1,
            '&:hover': {
              transform: 'scale(1.2)',
              boxShadow: '0 16px 50px -10px rgba(0,0,0,0.55)',
            },
            fontWeight: 600,
            borderRadius: 2,
            border: '3px solid rgba(255,255,255,0.1)',
            transition: 'transform 0.3s, boxShadow 0.3s',
            position: 'sticky',
            top: 70,
            backdropFilter: 'saturate(180%) blur(18px)',
            background: 'rgba(15, 15, 15, 0.65)',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            boxShadow: '0 16px 50px -10px rgba(0,0,0,0.55)',
          }}
          aria-label="Download resume as PDF"
        >
          {'Download Resume'}
        </Button>

        <Card
          ref={componentRef}
          sx={{
            boxShadow: 2,
            borderRadius: 2,
            overflow: 'hidden',
            backgroundColor: '#ffffff',
          }}
        >
          <Box
            sx={{
              backgroundColor: '#ffffff',
              color: '#000000',
              p: 2,
              textAlign: 'center',
            }}
          >
            {profilePicture && (
              <Avatar
                src={profilePicture}
                alt={name}
                sx={{
                  width: 80,
                  height: 80,
                  mx: 'auto',
                  mb: 1,
                  border: '2px solid #cccccc',
                  zIndex: 0,
                }}
              />
            )}
            <Typography
              variant="h5"
              sx={{ fontWeight: 'bold', fontFamily: 'Arial', color: '#000000' }}
            >
              {name}
            </Typography>
            <Typography variant="h6" sx={{ color: '#333333', fontFamily: 'Arial' }}>
              {jobTitle}
            </Typography>
            <Box sx={{ fontWeight: 'bold' }}>{company}</Box>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
                mt: 1,
                flexWrap: 'wrap',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography variant="body2">{address}</Typography>
              </Box>

              <br />
            </Box>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
                mt: 1,
                flexWrap: 'wrap',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 2,
                  justifyContent: 'center',
                  mt: 1,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    bgcolor: 'rgba(0,0,0,0.03)',
                    px: 1.5,
                    // py: 0.75,
                    borderRadius: 1.5,
                    border: '1px solid rgba(0,0,0,0.08)',
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 700,
                      mr: 0.5,
                      textTransform: 'uppercase',
                    }}
                  >
                    Email:
                  </Typography>
                  <Link
                    href={`mailto:${email}`}
                    underline="hover"
                    sx={{
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      color: '#1a237e',
                      ml: 0.5,
                      wordBreak: 'break-all',
                    }}
                    aria-label={`Email: ${email}`}
                  >
                    {email}
                  </Link>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    bgcolor: 'rgba(0,0,0,0.03)',
                    px: 1.5,
                    // py: 0.75,
                    borderRadius: 1.5,
                    border: '1px solid rgba(0,0,0,0.08)',
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 700,
                      mr: 0.5,
                      textTransform: 'uppercase',
                    }}
                  >
                    Phone:
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 600, fontSize: '0.95rem' }}
                    aria-label={`Phone: ${phone}`}
                  >
                    {phone}
                  </Typography>
                </Box>
              </Box>

              <br />
            </Box>
          </Box>

          <Grid container columns={12}>
            <Grid size={{ xs: 12, md: 3 }} sx={{ backgroundColor: '#ffffff', p: 3 }}>
              <Box sx={{ mb: 3 }}>
                <Chip
                  label={`Work Experience ${
                    new Date().getFullYear() - companyStartDate.getFullYear()
                  } years +`}
                  variant="outlined"
                  sx={{ m: 0.5, width: '100%' }}
                />
              </Box>
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#000000',
                    fontWeight: 'bold',
                    fontFamily: 'Arial',
                  }}
                >
                  Key Skills
                </Typography>
                {Object.entries(skills).map(([category, skillList]) => (
                  <Box key={category} sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold', color: '#000000' }}>
                      {category}
                    </Typography>

                    {skillList.map((skill, index) => (
                      <Chip
                        // avatar={<Avatar alt={skill.name} src={skill.icon} />}
                        size="small"
                        label={skill.name}
                        key={index}
                        variant="outlined"
                        sx={{ m: 0.5 }}
                      />
                    ))}
                  </Box>
                ))}
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#000000',
                    fontWeight: 'bold',
                    fontFamily: 'Arial',
                  }}
                >
                  Notice Period
                </Typography>

                <Typography variant="body2">{noticePeriod}</Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#000000',
                    fontWeight: 'bold',
                    fontFamily: 'Arial',
                  }}
                >
                  Awards & Certificates
                </Typography>
                {certificates.map((cert, index) => (
                  <Typography key={index} variant="body2">
                    {cert.name}
                  </Typography>
                ))}
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#000000',
                    fontWeight: 'bold',
                    fontFamily: 'Arial',
                  }}
                >
                  Education
                </Typography>
                {education.slice(0, 1).map((edu) => (
                  <Box key={edu.degree}>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      {edu.degree}
                    </Typography>
                    <Typography variant="body2">{edu.institution}</Typography>
                    <Typography variant="body2" sx={{ color: '#333333' }}>
                      Batch of {edu.endDate.getFullYear()}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#333333' }}>
                      CGPA: {edu.cgpa}
                    </Typography>
                  </Box>
                ))}
              </Box>

              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#000000',
                    fontWeight: 'bold',
                    fontFamily: 'Arial',
                  }}
                >
                  Languages
                </Typography>
                {languages.map((lang, index) => (
                  <Typography key={index} variant="body2">
                    {lang.name} - {lang.proficiency}
                  </Typography>
                ))}
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 9 }} sx={{ p: 3, backgroundColor: '#ffffff' }}>
              <Box sx={{ mb: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#000000',
                    fontWeight: 'bold',
                    fontFamily: 'Arial',
                  }}
                >
                  Career Snapshot
                </Typography>
                <Typography variant="body2">{careerSnapshot}</Typography>
              </Box>

              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#000000',
                    fontWeight: 'bold',
                    fontFamily: 'Arial',
                  }}
                >
                  Key Achievements
                </Typography>
                {keyAchievements.map((achievement, index) => (
                  <Typography key={index} variant="body2" sx={{ mb: 0.5 }}>
                    • {achievement}
                  </Typography>
                ))}
              </Box>

              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#000000',
                    fontWeight: 'bold',
                    fontFamily: 'Arial',
                  }}
                >
                  Professional Journey
                </Typography>
                {professionalJourney.map((job, index) => (
                  <Box key={index} sx={{ mb: 2 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                      {job.title}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ fontWeight: 550 }}>
                      {job.company}, {job.address}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#333333' }}>
                      {job.dates}
                    </Typography>
                    {job.responsibilities.map((resp, idx) => (
                      <Typography key={idx} variant="body2" sx={{ mb: 0.5 }}>
                        • {resp}
                      </Typography>
                    ))}
                  </Box>
                ))}
              </Box>

              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#000000',
                    fontWeight: 'bold',
                    fontFamily: 'Arial',
                  }}
                >
                  Key Projects
                </Typography>
                {keyProjects.slice(0, 2).map((project, index) => (
                  <Box key={index} sx={{ mb: 2 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                      {project.name}
                    </Typography>
                    <Typography variant="body2">{project.description}</Typography>
                    <Typography variant="body2" sx={{ color: '#333333' }}>
                      <span style={{ fontWeight: 'bold' }}>Technologies:</span>{' '}
                      {project.technologies.join(', ')}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#333333' }}>
                      <span style={{ fontWeight: 'bold' }}>Tools:</span> {project.tools.join(', ')}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#333333' }}>
                      <span style={{ fontWeight: 'bold' }}>Team Size:</span> {project.teamSize}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Container>
      <FooterSection />
    </Box>
  );
};

export default Resume;
