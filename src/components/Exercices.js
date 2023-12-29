import React , {useEffect, useState} from 'react'
import Pagination from '@mui/material/Pagination';
import {Box , Stack, Typography} from '@mui/material'
import { apiOptions,fetchData } from '../utils/fetchData';
import ExerciceCard from './ExerciceCard'


const Exercices = ({exercices,setExercices,bodyPart}) => {
  const [currentPage,setCurrentPage]= useState(1);
  const  exercicesPerPage=9;
  const indexOfLastExercice= currentPage * exercicesPerPage;
  const indexOfFirstExercice = indexOfLastExercice - exercicesPerPage;
  const currentExercices= exercices.slice(indexOfFirstExercice,indexOfLastExercice);

  const paginate = (e,value) => {
    setCurrentPage(value);
    window.scrollTo({top:1800,behavior:'smooth'});
  }
  return (
    <Box id="excercices"
        sx={{mt:{lg:'110px'}}}
        mt='50px'
        p='20px'
      
      >
        <Typography variant='h3' mb='46px'>
          Showing Results
        </Typography>
      <Stack direction="row" sx={{gap:{lg:'110px', xs:'50px'}}}
        flexWrap='wrap' justifyContent="center"
      >
        {currentExercices.map((exercice,index)=>(
            <ExerciceCard key={index} exercice={exercice} />
        ))}

      </Stack>
      <Stack mt='100px' alignItems='center'>
        {exercices.length > 9 && (
          <Pagination
              color='standard'
              shape='rounded'
              defaultPage={1}
              count={Math.ceil(exercices.length / exercicesPerPage)}
              page={currentPage}
              onChange={paginate}
              size='large'
          />
        )}

      </Stack>
    </Box>
  )
}

export default Exercices