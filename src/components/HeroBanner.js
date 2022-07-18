import React from 'react'
import {Box , Typography , Button , Stack} from '@mui/material';
import Banner from '../assets/images/banner.png';
import Dumble from '../assets/videos/gym1.mp4';
import VideoPlayer from 'react-video-js-player';
const HeroBanner = () => {
  return (
    <Box sx={{
        mt:{lg:"100px" , xs:"70px"} ,
        ml:{sm:"50px"},
    }} position="relative" p="20px">
        <Typography color="#FF2625" fontWeight="600" fontSize="26px">Fitness Club</Typography>
        <Typography fontWeight={700} sx={{fontSize:{lg:"44px" , xs:"40px"}}} mb="23px" mt="30px">Sweat  , Smile <br/> and Repeat</Typography>
        <Typography fontSize="22px" mb={3} lineHeight="35px" className="checkout_text">Check out the most effective exercise</Typography>
        <Button variant="contained" color="error" href="#exercises" sx={{backgroundColor:"#ff2625" , padding:"10px"}} width="10px">Explore Exercises</Button>

        <img src={Banner} alt="banner" className="hero-banner-img" sx={{}}/>
        <Typography fontWeight={600} color="#ff2625" sx={{opacity:0.1 ,  display:{lg:"block"} , fontSize:{lg:"200px", sm:"9rem" , xs:"5rem"}}}>Exercise</Typography>
        {/* <VideoPlayer src={Dumble} width="720" height="420" 
        preload="auto"
        hideControls = {['volume' , 'play' , 'seekbar' ,'timer' , 'playbackrates' , 'fullscreen']}
        bigPlayButton={false}
        /> */}
    </Box>
  )
}

export default HeroBanner;