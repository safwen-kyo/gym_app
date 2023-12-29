import React  , {useState} from 'react';
import {Box} from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercices from '../components/SearchExercices';
import Exercices from '../components/Exercices';


const Home = () => {
  const [exercices, setExercices]=useState([]);
  const [bodyPart,setBodyPart]=useState('all');

  return (
   <Box>
    <HeroBanner/>
    <SearchExercices 
      setExercices={setExercices} 
      bodyPart={bodyPart} 
      setBodyPart={setBodyPart}
      />
    <Exercices
    exercices={exercices}
    setExercices={setExercices} 
    bodyPart={bodyPart} 
    />

   </Box>
  )
}

export default Home