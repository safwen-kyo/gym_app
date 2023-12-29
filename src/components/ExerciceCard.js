import React from 'react'
import {Link} from 'react-router-dom';
import {Button, Stack , Typography} from '@mui/material';

const ExerciceCard = ({exercice}) => {
  return (
    <Link className='exercise-card' to={`/exercise/${exercice.id}`}>
        <img  src={exercice.gifUrl} alt={exercice.name} loading='lazy'  />
        <Stack direction='row'>
            <Button sx={{ml:'21px', color:'#fff' , background:'#ffa9a9', fontSize:'14px',borderRadius:'20px', textTransform:'capitalize'}}>
                {exercice.bodyPart}
            </Button>
            <Button sx={{ml:'21px', color:'#fff' , background:'#fcc757', fontSize:'14px',borderRadius:'20px', textTransform:'capitalize'}}>
                {exercice.target}
            </Button>
        </Stack>
        <Typography ml='21px' color='#000' fontWeight='bold' mt='11px'
            pb='10px' textTransform='capitalize' fontSize='22px'
        >
            {exercice.name}
        </Typography>
    </Link>
  )
}

export default ExerciceCard