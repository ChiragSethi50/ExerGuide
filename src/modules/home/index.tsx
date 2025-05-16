import React, { useState } from 'react';
import { Box } from '@mui/material';
import { Exercises, HeroBanner, SearchExercises } from './components';

interface Exercise {
    id: string;
    name: string;
    bodyPart: string;
    target: string;
    gifUrl: string;
}


export const Home: React.FC = () => {
    const [exercises, setExercises] = useState<Exercise[]>([]);
    const [bodyPart, setBodyPart] = useState<string>('all');

    return (
        <Box>
            <HeroBanner />
            <SearchExercises
                setExercises={setExercises}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
            />
            <Exercises
                setExercises={setExercises}
                exercises={exercises}
                bodyPart={bodyPart}
            />
        </Box>
    );
};
