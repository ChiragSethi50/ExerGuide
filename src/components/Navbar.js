import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/running.png';

const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '5px 20px 0 50px' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link to="/" style={{ textDecoration: 'none', color: '#FF2625', borderBottom: '3px solid #FF2625' }}>Home</Link>
      <a href="#exercises" style={{ textDecoration: 'none', color: '#FF2625' }}>Exercises</a>
      <a href="#contactus" style={{ textDecoration: 'none', color: '#FF2625' }}>Contact Us</a>

    </Stack>
  </Stack>
);

export default Navbar;
