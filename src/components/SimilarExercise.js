import React from 'react'
import { Typography, Box, Stack } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercise = ({ targetMuscleExercises, equipmentExercises }) => (
    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
      <Typography variant='h4' color="#000" mb={5}>
        Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
        {targetMuscleExercises.length !== 0 ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
      </Stack>
      <Typography variant='h4' color="#000" mb={5}>
        Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
        {equipmentExercises.length !== 0 ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
      </Stack>
    </Box>
  );

export default SimilarExercise