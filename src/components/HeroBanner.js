import React from 'react'
import { Box, Stack,Typography, Button} from '@mui/material';
import BannerImage from '../assets/images/banner.png'
const HeroBanner = () => {
  return (
   <Box sx={{
    mt:{lg:'212px' ,xs:'70px'},
    ml:{ sm:'50px'}
   }} position='relative' p='20px'>
        <Typography  color="#FF2625"
            fontWeight="600" fontSize="26px">
                Fitness Gym
        </Typography>
        <Typography fontWeight={700} 
           
            sx={{ fontSize: { lg: '44px', xs: '40px' } }}
        >
            Ready To Get Fit
        </Typography>
        <Typography fontSize='22px'
            lineHeight='35px' mb={3}
            >
        Find  all exercises that you can add to your fitness
        </Typography>
        <Button variant='contained'
                color='error'
        > Explore Exercices</Button>
        <img src={BannerImage} alt='banner' className='hero-banner-img' />
   </Box>
   )
}

export default HeroBanner