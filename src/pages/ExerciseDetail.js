import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { apiOptions,fetchData, youtubeOptions } from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVideo from '../components/ExerciseVideo';
import SimilarExercise from '../components/SimilarExercise';

const ExerciseDetail = () => {
  const [exerciseDetail,setExerciseDetail]=useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  const {id} =useParams();


  useEffect(() => {
   const fetchExercisesData= async() =>{
    const exerciseDBUrl='https://exercisedb.p.rapidapi.com';
    const youtubeSearchUrl= 'https://youtube-search-and-download.p.rapidapi.com';

    const exerciseDetailData = await fetchData(`${exerciseDBUrl}/exercises/exercise/${id}`,apiOptions);
    setExerciseDetail(exerciseDetailData);

    const exerciseDataVideos= await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,youtubeOptions);
    setExerciseVideos(exerciseDataVideos.contents)

    const targetMuscleExercisesData = await fetchData(`${exerciseDBUrl}/exercises/target/${exerciseDetailData.target}`, apiOptions);
    setTargetMuscleExercises(targetMuscleExercisesData);

    const equimentExercisesData = await fetchData(`${exerciseDBUrl}/exercises/equipment/${exerciseDetailData.equipment}`, apiOptions);
    setEquipmentExercises(equimentExercisesData);
   }
   fetchExercisesData();
  }, [id])
  
  return (
    <Box>
     
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideo exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercise targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
    </Box>
  )
}

export default ExerciseDetail