import React, {useEffect,useState} from 'react'
import {Box , Button, Stack,TextField,Typography} from '@mui/material';
import { apiOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercices = ({setExercices, bodyPart, setBodyPart}) => {
  const [search,setSearch]=useState('');
  const [bodyParts, setBodyParts] = useState([]);
  useEffect(() => {
    const fetchExercicesData = async ()=>{
      const bodyPartsData= await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',apiOptions);
      setBodyParts(['all',...bodyPartsData])
    }
    fetchExercicesData();
  }, [])
  

  const handleSearch= async () =>{
    if(search){
      const exercicesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=100',apiOptions);
      console.log('exData',exercicesData )
      const searchedExercices = exercicesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );
          console.log('searched', searchedExercices);
             setSearch('');
             setExercices(searchedExercices);
      }   
  }

 
  return (
    <Stack alignItems="center" mt="37px" 
      justifyContent="center" p="20px">

      <Typography fontWeight={700} sx={{fontSize:{lg:'44px',xs:'30px'}}}
        mb="50px" textAlign="center"
      >
        Awesome Exercices you <br/>
        Should Know
      </Typography>
      <Box position="relative" mb="72px">
          <TextField 
              sx={{
                input:{
                  fontWeight:'700',
                  border:'none',
                  borderRadius:'4px'
                },
                width:{lg:'800px',xs:'350px'},
                backgroundColor:'#fff',
                borderRadius:'40px'
              }}
              height="76px"
              value={search}
              onChange={(e)=>{setSearch(e.target.value.toLowerCase())}}
              placeholder='Search Exercices'
              type='text'
          />
          <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative' , width:'100%', p:'20px' }} >
        <HorizontalScrollbar data= {bodyParts}
            bodyPart={bodyPart}  setBodyPart={setBodyPart} isBodyParts
        />

      </Box>
    </Stack>
  )
}

export default SearchExercices