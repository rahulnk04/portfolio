import Email from '@mui/icons-material/Email';
import LocationOn from '@mui/icons-material/LocationOnOutlined';
import Phone from '@mui/icons-material/Phone';
import LockOutlined from '@mui/icons-material/LockOutlined';
import {
  Box,
  Typography,
  Card,
  Grid,
  Button,
  TextField,
  IconButton,
  Avatar,
  Stack,
  Link,
  Snackbar,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { motion } from 'framer-motion';
import React, { createElement, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Data, { portfolioConfig, SocialLink } from 'src/data/Data';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, rotate: -5, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: { type: 'spring' as const, stiffness: 70, damping: 15 },
  },
};

const hoverVariants = {
  hover: {
    scale: 1.15,
    boxShadow: '0 0 20px rgba(74,144,226,0.5)',
    transition: { duration: 0.4, yoyo: Infinity, ease: 'easeInOut' as const },
  },
};

const ContactSection = () => {
  const { address, phone, email, social, name } = Data;
  const navigate = useNavigate();

  // Contact form state
  const [sendMessage, setSendMessage] = useState({
    fullName: '',
    subject: '',
    message: '',
  });

  // Resume passkey dialog state
  const [openResumePasskeyDialog, setOpenResumePasskeyDialog] = useState(false);
  const [resumePasskeyInput, setResumePasskeyInput] = useState('');
  const [resumePasskeyError, setResumePasskeyError] = useState(false);

  // Phone passkey dialog state
  const [openPhonePasskeyDialog, setOpenPhonePasskeyDialog] = useState(false);
  const [phonePasskeyInput, setPhonePasskeyInput] = useState('');
  const [phonePasskeyError, setPhonePasskeyError] = useState(false);
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);

  // Global Snackbar Notification State
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState<{
    message: string;
    severity: 'success' | 'error' | 'info' | 'warning';
  }>({
    message: "Message sent successfully! I'll get back to you soon.",
    severity: 'success',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSendMessage((prev) => ({ ...prev, [name]: value }));
  };

  const handleSendMessageAsEmail = () => {
    const { fullName, subject, message } = sendMessage;
    if (!fullName || !subject || !message) {
      setMessage({
        message: 'Please fill in all fields.',
        severity: 'error',
      });
      setOpen(true);
      return;
    }
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(`From: ${fullName}\n\n${message}`)}`;
    window.location.href = mailtoLink;
    setMessage({
      message: "Message sent successfully! I'll get back to you soon.",
      severity: 'success',
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSendMessage({ fullName: '', subject: '', message: '' });
  };

  // Resume Passkey Verification Logic
  const handleVerifyResumePasskey = () => {
    if (resumePasskeyInput === '123456') {
      setOpenResumePasskeyDialog(false);
      setResumePasskeyInput('');
      setResumePasskeyError(false);
      navigate('/resume');
    } else {
      setResumePasskeyError(true);
    }
  };

  const handleCloseResumePasskeyDialog = () => {
    setOpenResumePasskeyDialog(false);
    setResumePasskeyInput('');
    setResumePasskeyError(false);
  };

  // Phone Passkey Verification Logic
  const handleVerifyPhonePasskey = () => {
    if (phonePasskeyInput === '123456') {
      setOpenPhonePasskeyDialog(false);
      setPhonePasskeyInput('');
      setPhonePasskeyError(false);
      setIsPhoneVerified(true);
    } else {
      setPhonePasskeyError(true);
    }
  };

  const handleClosePhonePasskeyDialog = () => {
    setOpenPhonePasskeyDialog(false);
    setPhonePasskeyInput('');
    setPhonePasskeyError(false);
  };

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        position: 'relative',
        py: { xs: 8, md: 8 },
        px: { xs: 4, md: 14 },
        background: 'linear-gradient(135deg, #0A0A2A 0%, #1A1A44 70%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#E0E0FF',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle, rgba(74,144,226,0.1) 0%, transparent 60%)',
          zIndex: 0,
          pointerEvents: 'none',
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
          pointerEvents: 'none',
        },
      }}
    >
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Typography
          variant="h2"
          fontWeight={700}
          align="center"
          gutterBottom
          sx={{
            mb: 8,
            fontFamily: "'Playfair Display', serif",
            letterSpacing: 2,
            textShadow: '0 0 10px rgba(74,144,226,0.4), 0 0 20px rgba(0,0,0,0.3)',
            color: '#fff',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -5,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '30%',
              height: '2px',
              background: `linear-gradient(90deg, transparent, ${portfolioConfig.theme.accent}, transparent)`,
            },
          }}
        >
          Get in Touch
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{
            maxWidth: 900,
            mx: 'auto',
            mb: 8,
            opacity: 0.85,
            fontFamily: "'Poppins', sans-serif",
            fontSize: '1.2rem',
            lineHeight: 1.75,
            color: '#C0C0E0',
            textShadow: '0 1px 3px rgba(0,0,0,0.2)',
          }}
        >
          Whether you have a bold project idea, seek collaboration, or just want to connect-I'm all
          ears. Send a message or download my resume to start the journey.
        </Typography>

        <Grid container spacing={7} justifyContent="space-around" alignItems="stretch">
          {/* Info + Social + Resume */}
          <Grid size={{ xs: 12, md: 12, lg: 5 }}>
            <motion.div variants={cardVariants}>
              <Card
                elevation={2}
                sx={{
                  borderRadius: 3,
                  p: { xs: 5, md: 7 },
                  position: 'relative',
                  bgcolor: 'rgba(20,20,40,0.9)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(74,144,226,0.2)',
                  boxShadow: '0 25px 60px -10px rgba(0,0,0,0.4)',
                  height: '100%',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -3,
                    left: -3,
                    right: -3,
                    bottom: -3,
                    background: `linear-gradient(45deg, ${portfolioConfig.theme.accent}22, transparent)`,
                    borderRadius: 5,
                    zIndex: -1,
                    animation: 'pulse 4s infinite',
                  },
                  '@keyframes pulse': {
                    '0%, 100%': { opacity: 0.5 },
                    '50%': { opacity: 1 },
                  },
                }}
              >
                <Stack spacing={5}>
                  {/* Contact details */}
                  <Box>
                    <Stack direction="row" spacing={3} alignItems="center" mb={3}>
                      <motion.div variants={hoverVariants} whileHover="hover">
                        <Avatar
                          sx={{
                            width: 56,
                            height: 56,
                            border: '3px solid rgba(255,255,255,0.1)',
                            boxShadow: '0 0 10px rgba(74,144,226,0.3)',
                            background: 'transparent',
                          }}
                        >
                          <LocationOn sx={{ color: 'white', fontSize: '2rem' }} />
                        </Avatar>
                      </motion.div>
                      <Box>
                        <Typography variant="subtitle1" fontWeight={600} color="#fff">
                          Location
                        </Typography>
                        <Typography variant="body2" color="#B0B0D0">
                          {address}
                        </Typography>
                      </Box>
                    </Stack>

                    <Stack direction="row" spacing={3} alignItems="center" mb={3}>
                      <motion.div variants={hoverVariants} whileHover="hover">
                        <Avatar
                          onClick={() => !isPhoneVerified && setOpenPhonePasskeyDialog(true)}
                          sx={{
                            background: 'transparent',
                            width: 56,
                            height: 56,
                            border: '3px solid rgba(255,255,255,0.1)',
                            boxShadow: '0 0 10px rgba(74,144,226,0.3)',
                            cursor: !isPhoneVerified ? 'pointer' : 'default',
                          }}
                        >
                          {isPhoneVerified ? (
                            <Phone sx={{ color: 'white', fontSize: '2rem' }} />
                          ) : (
                            <LockOutlined sx={{ color: 'inherit', fontSize: '1.75rem' }} />
                          )}
                        </Avatar>
                      </motion.div>
                      <Box sx={{ width: '100%' }}>
                        <Typography variant="subtitle1" fontWeight={600} color="#fff">
                          Phone
                        </Typography>
                        {isPhoneVerified ? (
                          <Typography variant="body2" color="#B0B0D0">
                            {phone}
                          </Typography>
                        ) : (
                          <Stack direction="row" spacing={2} alignItems="center">
                            <Typography
                              variant="body2"
                              color="#B0B0D0"
                              sx={{
                                filter: 'blur(5px)',
                                userSelect: 'none',
                                letterSpacing: '2px',
                              }}
                            >
                              +123 456 7890
                            </Typography>
                            <Button
                              size="small"
                              onClick={() => setOpenPhonePasskeyDialog(true)}
                              sx={{
                                textTransform: 'none',
                                py: 0,
                                minWidth: 'auto',
                                color: '#fff',
                                fontWeight: 600,
                                fontSize: '0.8rem',
                                border: `1px solid #ffffff3d`,
                                px: 1,
                                borderRadius: 1,
                                '&:hover': {
                                  borderColor: '#ffffffca',
                                },
                              }}
                            >
                              Unlock
                            </Button>
                          </Stack>
                        )}
                      </Box>
                    </Stack>

                    <Stack direction="row" spacing={3} alignItems="center">
                      <motion.div variants={hoverVariants} whileHover="hover">
                        <Avatar
                          sx={{
                            background: 'transparent',
                            width: 56,
                            height: 56,
                            border: '3px solid rgba(255,255,255,0.1)',
                            boxShadow: '0 0 10px rgba(74,144,226,0.3)',
                          }}
                        >
                          <Email sx={{ color: 'white', fontSize: '2rem' }} />
                        </Avatar>
                      </motion.div>
                      <Box>
                        <Typography variant="subtitle1" fontWeight={600} color="#fff">
                          Email
                        </Typography>
                        <Link href={`mailto:${email}`} underline="hover" color="inherit">
                          <Typography variant="body2" color="#B0B0D0">
                            {email}
                          </Typography>
                        </Link>
                      </Box>
                    </Stack>
                  </Box>

                  {/* Social icons */}
                  <Box>
                    <Typography
                      variant="subtitle1"
                      fontWeight={600}
                      sx={{ mt: 1, mb: 1.5 }}
                      gutterBottom
                      color="#fff"
                    >
                      Lets Connect
                    </Typography>
                    <Grid container spacing={2} columns={7}>
                      {social.map((link: SocialLink, idx: number) => (
                        <Grid key={idx} size={{ xs: 1, sm: 1, md: 1 }}>
                          <motion.div variants={hoverVariants} whileHover="hover">
                            <IconButton
                              component="a"
                              href={link.url || '#'}
                              target="_blank"
                              rel="noopener"
                              aria-label={link.name}
                              sx={{
                                bgcolor: 'rgba(255,255,255,0.05)',
                                border: `2px solid ${portfolioConfig.theme.accent}33`,
                                borderRadius: '50%',
                                width: 38,
                                height: 38,
                                transition: 'all 0.4s ease',
                                '&:hover': {
                                  bgcolor: `${portfolioConfig.theme.accent}22`,
                                  borderColor: portfolioConfig.theme.accent,
                                  transform: 'rotate(10deg)',
                                },
                              }}
                            >
                              {createElement(link.icon, {
                                fontSize: 'small',
                                sx: { color: '#fff' },
                              })}
                            </IconButton>
                          </motion.div>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>

                  {/* Resume download */}
                  <Box>
                    <motion.div variants={hoverVariants} whileHover="hover">
                      <Button
                        variant="contained"
                        fullWidth
                        sx={{
                          py: 2.5,
                          fontWeight: 700,
                          textTransform: 'none',
                          borderRadius: 2,
                          background: `transparent`,
                          boxShadow: '0 0 15px rgba(74,144,226,0.5), 0 5px 20px rgba(0,0,0,0.3)',
                          '&:hover': {
                            transform: 'scale(1.1)',
                          },
                        }}
                        onClick={() => setOpenResumePasskeyDialog(true)}
                      >
                        View Resume
                      </Button>
                    </motion.div>
                  </Box>
                </Stack>
              </Card>
            </motion.div>
          </Grid>

          {/* Contact form */}
          <Grid size={{ xs: 12, md: 12, lg: 5 }}>
            <motion.div variants={cardVariants}>
              <Card
                elevation={0}
                sx={{
                  borderRadius: 3,
                  p: { xs: 5, md: 7 },
                  bgcolor: 'rgba(20,20,40,0.9)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(74,144,226,0.2)',
                  boxShadow: '0 25px 60px -10px rgba(0,0,0,0.4)',
                  height: '100%',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -3,
                    left: -3,
                    right: -3,
                    bottom: -3,
                    background: `linear-gradient(45deg, ${portfolioConfig.theme.accent}22, transparent)`,
                    borderRadius: 5,
                    zIndex: -1,
                    animation: 'pulse 4s infinite',
                  },
                  '@keyframes pulse': {
                    '0%, 100%': { opacity: 0.5 },
                    '50%': { opacity: 1 },
                  },
                }}
              >
                <Typography variant="h5" fontWeight={700} gutterBottom color="#fff">
                  Send a Message
                </Typography>
                <Typography variant="body2" sx={{ mb: 2.5, opacity: 0.85, color: '#B0B0D0' }}>
                  Unleash your ideas or project pitch—fill this out, and I’ll respond swiftly.
                </Typography>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      label="Your Name"
                      fullWidth
                      variant="outlined"
                      size="small"
                      placeholder={name}
                      value={sendMessage.fullName}
                      InputProps={{
                        sx: {
                          borderRadius: 1.5,
                          bgcolor: 'rgba(255,255,255,0.05)',
                          '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'rgba(255,255,255,0.1)',
                          },
                          '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: portfolioConfig.theme.accent,
                          },
                          '&:focus-within .MuiOutlinedInput-notchedOutline': {
                            borderColor: portfolioConfig.theme.accent,
                            borderWidth: 2,
                          },
                        },
                      }}
                      InputLabelProps={{
                        sx: { color: '#B0B0D0' },
                      }}
                      onChange={handleInputChange}
                      name="fullName"
                    />
                  </Grid>

                  <Grid size={{ xs: 12 }}>
                    <TextField
                      label="Subject"
                      fullWidth
                      variant="outlined"
                      size="small"
                      placeholder="Project collaboration"
                      value={sendMessage.subject}
                      InputProps={{
                        sx: {
                          borderRadius: 1.5,
                          bgcolor: 'rgba(255,255,255,0.05)',
                          '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'rgba(255,255,255,0.1)',
                          },
                          '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: portfolioConfig.theme.accent,
                          },
                          '&:focus-within .MuiOutlinedInput-notchedOutline': {
                            borderColor: portfolioConfig.theme.accent,
                            borderWidth: 2,
                          },
                        },
                      }}
                      InputLabelProps={{
                        sx: { color: '#B0B0D0' },
                      }}
                      onChange={handleInputChange}
                      name="subject"
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      label="Message"
                      fullWidth
                      variant="outlined"
                      size="small"
                      placeholder={`Hi ${name.split(' ')[0]}, let’s create something amazing...`}
                      multiline
                      rows={6}
                      value={sendMessage.message}
                      InputProps={{
                        sx: {
                          borderRadius: 1.5,
                          bgcolor: 'rgba(255,255,255,0.05)',
                          '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'rgba(255,255,255,0.1)',
                          },
                          '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: portfolioConfig.theme.accent,
                          },
                          '&:focus-within .MuiOutlinedInput-notchedOutline': {
                            borderColor: portfolioConfig.theme.accent,
                            borderWidth: 2,
                          },
                        },
                      }}
                      InputLabelProps={{
                        sx: { color: '#B0B0D0' },
                      }}
                      onChange={handleInputChange}
                      name="message"
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <motion.div variants={hoverVariants} whileHover="hover">
                      <Button
                        variant="contained"
                        fullWidth
                        sx={{
                          py: 2.5,
                          fontWeight: 700,
                          textTransform: 'none',
                          borderRadius: 2,
                          background: `transparent`,
                          boxShadow: '0 0 15px rgba(74,144,226,0.5), 0 5px 20px rgba(0,0,0,0.3)',
                          '&:hover': {
                            transform: 'scale(1.1)',
                          },
                        }}
                        onClick={handleSendMessageAsEmail}
                      >
                        Send Message
                      </Button>
                    </motion.div>
                  </Grid>
                </Grid>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>

      {/* MUI Resume Passkey Popup Modal */}
      <Dialog
        open={openResumePasskeyDialog}
        onClose={handleCloseResumePasskeyDialog}
        PaperProps={{
          sx: {
            bgcolor: 'rgba(20,20,40,0.95)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(74,144,226,0.3)',
            color: '#E0E0FF',
            borderRadius: 3,
            p: 1,
            maxWidth: '380px',
            width: '100%',
          },
        }}
      >
        <DialogTitle sx={{ fontWeight: 700, fontSize: '1.25rem', color: '#fff' }}>
          Enter Passkey
        </DialogTitle>
        <DialogContent>
          <Typography variant="body2" sx={{ mb: 2, color: '#B0B0D0' }}>
            Viewing this resume requires a valid entry code. Please submit your verification
            credential below.
          </Typography>
          <TextField
            fullWidth
            type="password"
            label="Passkey"
            variant="outlined"
            size="small"
            value={resumePasskeyInput}
            error={resumePasskeyError}
            helperText={resumePasskeyError ? 'Incorrect passkey. Access Denied.' : ''}
            onChange={(e) => {
              setResumePasskeyInput(e.target.value);
              if (resumePasskeyError) setResumePasskeyError(false);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleVerifyResumePasskey();
            }}
            InputProps={{
              sx: {
                borderRadius: 1.5,
                color: '#fff',
                bgcolor: 'rgba(255,255,255,0.05)',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: resumePasskeyError ? 'error.main' : 'rgba(255,255,255,0.1)',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: resumePasskeyError ? 'error.main' : portfolioConfig.theme.accent,
                },
                '&:focus-within .MuiOutlinedInput-notchedOutline': {
                  borderColor: resumePasskeyError ? 'error.main' : portfolioConfig.theme.accent,
                  borderWidth: 2,
                },
              },
            }}
            InputLabelProps={{
              sx: { color: '#B0B0D0' },
            }}
          />
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2, gap: 1 }}>
          <Button
            onClick={handleCloseResumePasskeyDialog}
            sx={{
              color: '#B0B0D0',
              textTransform: 'none',
              fontWeight: 600,
              '&:hover': { color: '#fff' },
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleVerifyResumePasskey}
            sx={{
              bgcolor: portfolioConfig.theme.accent,
              color: '#0f172a',
              fontWeight: 700,
              textTransform: 'none',
              borderRadius: 1.5,
              px: 3,
              '&:hover': {
                bgcolor: portfolioConfig.theme.accent,
                opacity: 0.9,
              },
            }}
          >
            Verify
          </Button>
        </DialogActions>
      </Dialog>

      {/* MUI Phone Passkey Popup Modal */}
      <Dialog
        open={openPhonePasskeyDialog}
        onClose={handleClosePhonePasskeyDialog}
        PaperProps={{
          sx: {
            bgcolor: 'rgba(20,20,40,0.95)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(74,144,226,0.3)',
            color: '#E0E0FF',
            borderRadius: 3,
            p: 1,
            maxWidth: '380px',
            width: '100%',
          },
        }}
      >
        <DialogTitle sx={{ fontWeight: 700, fontSize: '1.25rem', color: '#fff' }}>
          Unlock Phone Number
        </DialogTitle>
        <DialogContent>
          <Typography variant="body2" sx={{ mb: 2, color: '#B0B0D0' }}>
            Viewing this phone number requires a valid entry code. Please submit your verification
            credential below.
          </Typography>
          <TextField
            fullWidth
            type="password"
            label="Passkey"
            variant="outlined"
            size="small"
            value={phonePasskeyInput}
            error={phonePasskeyError}
            helperText={phonePasskeyError ? 'Incorrect passkey. Access Denied.' : ''}
            onChange={(e) => {
              setPhonePasskeyInput(e.target.value);
              if (phonePasskeyError) setPhonePasskeyError(false);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleVerifyPhonePasskey();
            }}
            InputProps={{
              sx: {
                borderRadius: 1.5,
                color: '#fff',
                bgcolor: 'rgba(255,255,255,0.05)',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: phonePasskeyError ? 'error.main' : 'rgba(255,255,255,0.1)',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: phonePasskeyError ? 'error.main' : portfolioConfig.theme.accent,
                },
                '&:focus-within .MuiOutlinedInput-notchedOutline': {
                  borderColor: phonePasskeyError ? 'error.main' : portfolioConfig.theme.accent,
                  borderWidth: 2,
                },
              },
            }}
            InputLabelProps={{
              sx: { color: '#B0B0D0' },
            }}
          />
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2, gap: 1 }}>
          <Button
            onClick={handleClosePhonePasskeyDialog}
            sx={{
              color: '#B0B0D0',
              textTransform: 'none',
              fontWeight: 600,
              '&:hover': { color: '#fff' },
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleVerifyPhonePasskey}
            sx={{
              bgcolor: portfolioConfig.theme.accent,
              color: '#0f172a',
              fontWeight: 700,
              textTransform: 'none',
              borderRadius: 1.5,
              px: 3,
              '&:hover': {
                bgcolor: portfolioConfig.theme.accent,
                opacity: 0.9,
              },
            }}
          >
            Verify
          </Button>
        </DialogActions>
      </Dialog>

      {/* Form Feedback Notification */}
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={message.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {message.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactSection;
