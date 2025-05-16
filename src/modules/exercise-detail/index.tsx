import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';

import { exerciseOptions, listData, youtubeOptions } from '@/config/list-data';
import Detail from './components/detail';
import ExerciseVideos from './components/exercise-videos';
import SimilarExercises from './components/similiar-exercises';
import { useParams } from 'next/navigation';

interface ExerciseDetailType {
  id:string;
  bodyPart: string;
  gifUrl: string;
  name: string;
  target: string;
  equipment: string;
}

interface VideoItem {
  video: {
    videoId: string;
    title: string;
    channelName: string;
    thumbnails: { url: string }[];
  };
}
const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState<ExerciseDetailType | null | void>(null);
  const [exerciseVideos, setExerciseVideos] = useState<VideoItem[]>([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState<ExerciseDetailType[]>([]);
  const [equipmentExercises, setEquipmentExercises] = useState<ExerciseDetailType[]>([]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchExercisesData = async () => {
      if (!id) return;

      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      try {
        const exerciseDetailData = await listData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
        setExerciseDetail(exerciseDetailData);

        if (exerciseDetailData?.name) {
          const exerciseVideosData = await listData(
            `${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`,
            youtubeOptions
          );
          setExerciseVideos(exerciseVideosData.contents);
        }

        const targetMuscleExercisesData = await listData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
        setTargetMuscleExercises(targetMuscleExercisesData);

        const equipmentExercisesData = await listData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
        setEquipmentExercises(equipmentExercisesData);
      } catch (error) {
        console.error('Error fetching exercise details:', error);
      }
    };

    fetchExercisesData();
  }, [id]);

  if (!exerciseDetail) return <div>Loading...</div>;

  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  );
};

export default ExerciseDetail;
