import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo2.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '181px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px">
      With whole ❤️ for your Fitness<br/>Remember, 
    <span style={{ color: '#FF2625', textTransform: 'capitalize', fontWeight:'700'}}>Health is Wealth</span>
    </Typography>
  </Box>
);

export default Footer;