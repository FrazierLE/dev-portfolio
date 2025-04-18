import { Route, Routes } from 'react-router-dom';
import FooterLayout from '../footer/FooterLayout';
import HeaderLayout from '../header/HeaderLayout';
import { Stack } from '@mui/material';
import React from 'react';
import Projects from '../projects/Projects';
import Timeline from '../projects/Timeline';
import AboutMe from '../home/AboutMe';

const PageLayout = () => {
  const [hamburgerOpen, setHamburgerOpen] = React.useState(false);
  const mainStyle = {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100vw',
    backgroundColor: '#152a38',
    flex: 1,
  };

  const rotate = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <Stack
      direction={'column'}
      alignItems={'center'}
      justifyContent={'space-between'}
      width={'100vw'}
      height={'100vh'}
      sx={{
        backgroundColor: '#152a38',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <HeaderLayout open={hamburgerOpen} rotate={rotate} />
      <Stack sx={mainStyle}>
        <Routes>
          <Route path='/' element={<AboutMe />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/experience' element={<Timeline />} />
        </Routes>
      </Stack>
      <FooterLayout />
    </Stack>
  );
};

export default PageLayout;
