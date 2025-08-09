import { Typography } from '@mui/material';
import { portfolioConfig } from 'src/data/Data';

type Props = {
  title?: string;
};

const TextHeader = (props: Props) => {
  const { title } = props;
  return (
    <div>
      <Typography
        variant="h2"
        fontWeight={700}
        align="center"
        gutterBottom
        sx={{
          mb: 2,
          fontFamily: "'Playfair Display', serif",
          letterSpacing: 1.5,
          color: '#fff',
          position: 'relative',
          fontSize: { xs: '2.5rem', md: '3rem' },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -6,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 120,
            height: 4,
            borderRadius: 2,
            background: `linear-gradient(90deg, transparent, ${portfolioConfig.theme.accent}, transparent)`,
          },
        }}
      >
        {title}
      </Typography>
    </div>
  );
};

export default TextHeader;
