import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import HorizontalScrollbar from './horizontal-scrollbar';
import Loader from '@/shared/ui/loader';

interface Exercise {
  id:string;
  bodyPart: string;
  gifUrl: string;
  name: string;
  target: string;
  equipment: string;
}

interface SimilarExercisesProps {
  targetMuscleExercises: Exercise[];
  equipmentExercises: Exercise[];
}

const SimilarExercises: React.FC<SimilarExercisesProps> = ({
  targetMuscleExercises,
  equipmentExercises,
}) => (
  <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
    <Typography
      sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }}
      fontWeight={700}
      color="#000"
      mb="33px"
    >
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {targetMuscleExercises.length !== 0 ? (
        <HorizontalScrollbar data={targetMuscleExercises} />
      ) : (
        <Loader />
      )}
    </Stack>

    <Typography
      sx={{
        fontSize: { lg: '44px', xs: '25px' },
        ml: '20px',
        mt: { lg: '100px', xs: '60px' },
      }}
      fontWeight={700}
      color="#000"
      mb="33px"
    >
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {equipmentExercises.length !== 0 ? (
        <HorizontalScrollbar data={equipmentExercises} />
      ) : (
        <Loader />
      )}
    </Stack>
  </Box>
);

export default SimilarExercises;
