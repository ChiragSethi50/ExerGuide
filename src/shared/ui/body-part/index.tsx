import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '@/assets/icons/gym.png';

interface BodyPartProps {
  item: string;
  setBodyPart: (bodyPart: string) => void;
  bodyPart: string;
}

const BodyPart: React.FC<BodyPartProps> = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    component="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={{
      borderTop: bodyPart === item ? '4px solid #FF2625' : 'none',
      background: '#fff',
      borderBottomLeftRadius: '20px',
      width: '270px',
      height: '282px',
      cursor: 'pointer',
      gap: '47px',
    }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon.src} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
    <Typography
      fontSize="24px"
      fontWeight="bold"
      fontFamily="Alegreya"
      color="#3A1212"
      textTransform="capitalize"
    >
      {item}
    </Typography>
  </Stack>
);

export default BodyPart;
