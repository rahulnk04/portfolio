import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Typography, Grid as Grid2, Container, Dialog, IconButton } from '@mui/material';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'motion/react';
import React, { useState, useEffect, useCallback } from 'react';
import { portfolioImages } from 'src/data/Data';

const MotionBox = motion.create(Box);

const parseAltText = (alt: string) => {
  const cleanText = alt.replace('Rahul Ranjan Nayak - ', '').split(' (')[0];
  const segments = cleanText.split(' based in ');
  return {
    title: segments[0],
    location: segments[1] || 'Bhubaneswar, India',
  };
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 160 : -160,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 160 : -160,
    opacity: 0,
  }),
};

const PortfolioGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<number>(0);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setDirection(1);
    setSelectedIndex((prev) => (prev !== null && prev < portfolioImages.length - 1 ? prev + 1 : 0));
  }, [selectedIndex]);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setDirection(-1);
    setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : portfolioImages.length - 1));
  }, [selectedIndex]);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev]);

  const selectedItem = selectedIndex !== null ? portfolioImages[selectedIndex] : null;

  return (
    <Box
      id="gallery"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingTop: '6rem',
        paddingBottom: '6rem',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Structural Sci-Fi Matrix Mesh */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: 0,
          background:
            'linear-gradient(45deg, rgba(33, 150, 243, 0.3), rgba(36, 22, 114, 0.3), rgba(255, 87, 34, 0.3))',
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

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            mb: 8,
            borderLeft: '3px solid #00f2fe',
            pl: 3,
          }}
        >
          <Typography
            variant="overline"
            sx={{ fontFamily: 'monospace', color: '#00f2fe', letterSpacing: '0.3em' }}
          >
            DECODER_MATRIX // PRODUCTION_LOGS
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 900,
              color: '#fff',
              textTransform: 'uppercase',
              mt: 1,
              letterSpacing: '-0.02em',
            }}
          >
            Media Matrix
          </Typography>
        </Box>

        <Grid2 container spacing={4}>
          {portfolioImages.map((item, idx) => (
            <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={item.img}>
              <PhotoCard
                item={item}
                index={idx}
                onSelect={() => {
                  setDirection(0);
                  setSelectedIndex(idx);
                }}
              />
            </Grid2>
          ))}
        </Grid2>
      </Container>

      {/* Cybernetic Hologram Lightbox Dialog */}
      <AnimatePresence initial={false} mode="wait">
        {selectedItem && selectedIndex !== null && (
          <Dialog
            sx={{ zIndex: 9999 }}
            open={selectedIndex !== null}
            onClose={() => setSelectedIndex(null)}
            maxWidth="md"
            fullWidth
            slots={{
              backdrop: () => (
                <Box
                  onClick={() => setSelectedIndex(null)}
                  sx={{
                    position: 'fixed',
                    inset: 0,
                    backgroundColor: 'rgba(2, 4, 8, 0.95)',
                    backdropFilter: 'blur(16px)',
                    zIndex: -1,
                  }}
                />
              ),
            }}
            PaperProps={{
              sx: {
                backgroundColor: 'rgba(10, 20, 38, 0.85)',
                border: '1px solid #00f2fe',
                borderRadius: 0,
                boxShadow: '0px 0px 50px rgba(0, 242, 254, 0.25)',
                overflow: 'visible',
                position: 'relative',
              },
            }}
          >
            <Box sx={{ p: { xs: 2, md: 4 }, position: 'relative', minHeight: '450px' }}>
              {/* Corner HUD Bracket Highlights */}
              <Box
                sx={{
                  position: 'absolute',
                  top: -2,
                  left: -2,
                  width: 20,
                  height: 20,
                  borderTop: '3px solid #00f2fe',
                  borderLeft: '3px solid #00f2fe',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: -2,
                  right: -2,
                  width: 20,
                  height: 20,
                  borderBottom: '3px solid #00f2fe',
                  borderRight: '3px solid #00f2fe',
                }}
              />

              <IconButton
                onClick={() => setSelectedIndex(null)}
                sx={{
                  position: 'absolute',
                  top: 12,
                  right: 12,
                  color: '#00f2fe',
                  border: '1px solid rgba(0, 242, 254, 0.3)',
                  borderRadius: 0,
                  '&:hover': { backgroundColor: 'rgba(0, 242, 254, 0.1)', borderColor: '#00f2fe' },
                  zIndex: 12,
                }}
              >
                <CloseIcon />
              </IconButton>

              {/* Navigation Arrows for Desktop */}
              <IconButton
                onClick={handlePrev}
                sx={{
                  position: 'absolute',
                  left: -28,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#00f2fe',
                  backgroundColor: 'rgba(7, 12, 20, 0.9)',
                  border: '1px solid rgba(0, 242, 254, 0.3)',
                  borderRadius: 0,
                  '&:hover': { backgroundColor: '#00f2fe', color: '#000', borderColor: '#00f2fe' },
                  zIndex: 12,
                  display: { xs: 'none', md: 'flex' },
                }}
              >
                <ArrowBackIosNewIcon fontSize="small" />
              </IconButton>

              <IconButton
                onClick={handleNext}
                sx={{
                  position: 'absolute',
                  right: -28,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#00f2fe',
                  backgroundColor: 'rgba(7, 12, 20, 0.9)',
                  border: '1px solid rgba(0, 242, 254, 0.3)',
                  borderRadius: 0,
                  '&:hover': { backgroundColor: '#00f2fe', color: '#000', borderColor: '#00f2fe' },
                  zIndex: 12,
                  display: { xs: 'none', md: 'flex' },
                }}
              >
                <ArrowForwardIosIcon fontSize="small" />
              </IconButton>

              <Box
                sx={{
                  width: '100%',
                  maxHeight: '65vh',
                  overflow: 'hidden',
                  mb: 3,
                  border: '1px solid rgba(255,255,255,0.05)',
                  position: 'relative',
                }}
              >
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                  <motion.div
                    key={selectedIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      x: { type: 'spring', stiffness: 260, damping: 28 },
                      opacity: { duration: 0.25 },
                    }}
                    style={{ width: '100%', height: '100%' }}
                  >
                    <img
                      src={selectedItem.img}
                      alt={selectedItem.alt}
                      style={{
                        width: '100%',
                        height: 'auto',
                        maxHeight: '65vh',
                        objectFit: 'contain',
                        display: 'block',
                      }}
                    />
                  </motion.div>
                </AnimatePresence>
              </Box>

              <Box>
                <Typography variant="h5" sx={{ color: '#fff', fontWeight: 700, mb: 1 }}>
                  {parseAltText(selectedItem.alt).title}
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: 1,
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{ fontFamily: 'monospace', color: '#00f2fe', letterSpacing: '0.1em' }}
                  >
                    MATRIX_NODE // {selectedIndex + 1} OF {portfolioImages.length}
                  </Typography>

                  {/* Mobile Navigation controls */}
                  <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
                    <IconButton
                      onClick={handlePrev}
                      size="small"
                      sx={{
                        color: '#00f2fe',
                        border: '1px solid rgba(0, 242, 254, 0.2)',
                        borderRadius: 0,
                      }}
                    >
                      <ArrowBackIosNewIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton
                      onClick={handleNext}
                      size="small"
                      sx={{
                        color: '#00f2fe',
                        border: '1px solid rgba(0, 242, 254, 0.2)',
                        borderRadius: 0,
                      }}
                    >
                      <ArrowForwardIosIcon fontSize="inherit" />
                    </IconButton>
                  </Box>
                </Box>

                <Typography
                  variant="body2"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.55)',
                    mt: 2,
                    fontFamily: 'sans-serif',
                    lineHeight: 1.6,
                  }}
                >
                  {selectedItem.alt}
                </Typography>
              </Box>
            </Box>
          </Dialog>
        )}
      </AnimatePresence>
    </Box>
  );
};

interface PhotoCardProps {
  item: (typeof portfolioImages)[0];
  index: number;
  onSelect: () => void;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ item, index, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { title, location } = parseAltText(item.alt);

  const isBot =
    typeof window !== 'undefined' &&
    /bot|google|crawler|spider|robot|crawling/i.test(navigator.userAgent);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-150, 150], [10, -10]);
  const rotateY = useTransform(x, [-150, 150], [-10, 10]);

  const rx = useSpring(rotateX, { stiffness: 120, damping: 20 });
  const ry = useSpring(rotateY, { stiffness: 120, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - (rect.left + rect.width / 2));
    y.set(e.clientY - (rect.top + rect.height / 2));
  };

  return (
    <MotionBox
      onClick={onSelect}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
      }}
      initial={isBot ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.85, y: 30 }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
          delay: (index % 3) * 0.1,
          duration: 0.6,
          ease: [0.34, 1.56, 0.64, 1],
        },
      }}
      viewport={{ once: true, margin: '-80px' }}
      style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
      sx={{
        position: 'relative',
        height: 420,
        backgroundColor: '#070c14',
        border: '1px solid rgba(0, 242, 254, 0.1)',
        cursor: 'pointer',
        // --- 1. CHANGE THIS: Using a standard isolate context instead of clipping layers ---
        overflow: 'visible',
        isolation: 'isolate',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          borderColor: '#00f2fe',
          boxShadow: '0px 0px 30px rgba(0, 242, 254, 0.15)',
        },
      }}
    >
      <MotionBox
        animate={{
          scale: isHovered ? 1.06 : 1,
        }}
        transition={{ duration: 0.4 }}
        style={{ transformStyle: 'preserve-3d' }} // --- 2. Pass 3D context to child container ---
        sx={{
          width: '100%',
          height: '100%',
          position: 'relative',
          overflow: 'hidden', // --- 3. Safely clip image scaling edges HERE instead ---
        }}
      >
        <img
          src={item.img}
          alt={item.alt}
          loading={'eager'}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            display: 'block',
          }}
        />

        <Box sx={{ position: 'absolute', top: 16, left: 16, zIndex: 10 }}>
          <Typography
            variant="caption"
            sx={{
              fontFamily: 'monospace',
              backgroundColor: 'rgba(2, 4, 8, 0.85)',
              backdropFilter: 'blur(4px)',
              px: 1.5,
              py: 0.5,
              border: '1px solid rgba(0, 242, 254, 0.2)',
              color: '#00f2fe',
              borderRadius: '2px',
              fontSize: '10px',
            }}
          >
            SYS_NODE // 0{index + 1}
          </Typography>
        </Box>

        {/* --- Text elements now calculate depth accurately --- */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            p: 3,
            background:
              'linear-gradient(to top, rgba(2,4,8,1) 0%, rgba(2,4,8,0.6) 70%, transparent 100%)',
            zIndex: 10,
            transform: 'translateZ(30px)', // --- Slightly boosted pop out effect ---
          }}
        >
          <Typography
            variant="body1"
            sx={{ color: '#fff', fontWeight: 600, mb: 0.5, fontSize: '1rem', lineHeight: 1.3 }}
          >
            {title}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              fontFamily: 'monospace',
              color: 'rgba(0, 242, 254, 0.6)',
              textTransform: 'uppercase',
              fontSize: '11px',
            }}
          >
            LOC_SYS // {location}
          </Typography>
        </Box>
      </MotionBox>
    </MotionBox>
  );
};
export default PortfolioGallery;
