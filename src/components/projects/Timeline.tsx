import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
} from '@mui/material';
import { CiCircleChevDown, CiCircleChevUp } from 'react-icons/ci';
import { useState, useEffect } from 'react';

const Timeline = () => {
  const [open, setOpen] = useState<undefined | number>(0);
  const [screenMode, setScreenMode] = useState<string>('desktop');

  const handleMouseOver = (index: number) => {
    setOpen(index);
  };

  const handleMouseOff = () => setOpen(undefined);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 600px)');

    const handleResize = () => {
      setScreenMode(
        mediaQuery.matches || window.innerWidth <= 800 ? 'mobile' : 'desktop'
      );
    };

    mediaQuery.addEventListener('change', handleResize);
    handleResize();

    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  const getTranslatePercent = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 1340) return -35;
    if (screenWidth > 1200) return -40;
    if (screenWidth > 992) return -55;
    if (screenWidth > 768) return -70;
    return 0;
  };

  const workExperience = [
    {
      company: 'Gateway Ticketing Systems',
      title: 'Front End Developer III',
      date: 'March 2025-present',
    },
    {
      company: 'Gateway Ticketing Systems',
      title: 'Front End Developer II',
      date: 'July 2023 - February 2025',
    },
    {
      company: 'Third Culture Technology LLC',
      title: 'Freelance Front End Developer',
      date: 'March 2023 - Present',
    },
    {
      company: 'Turing School of Software & Design',
      title: 'Front End Engineering Student',
      date: 'August 2022 - March 2023',
    },
    {
      company: 'Summit Strong',
      title: 'Strength & Conditioning Coach',
      date: 'July 2021 - Present',
    },
    {
      company: 'Michigan Elite Conditioning for Athletes',
      title: 'Assistant Strength Coach',
      date: 'Sept 2020-June 2021',
    },
    {
      company: 'STALTA',
      title: 'Strength Coach',
      date: 'May 2017 - Sept 2020',
    },
    {
      company: 'Hope College',
      title: 'Exercise Science Student',
      date: 'May 2011-2015',
    },
  ];

  return (
    <Grid
      container
      width={{ xs: '90%', sm: '80%', md: '70%' }} // Responsive width
      justifyContent={'center'}
      alignItems={'center'}
      marginBottom={3}
      direction='column'
    >
      <Typography variant='h6'>TIMELINE</Typography>
      <Grid
        container
        direction='column'
        width='100%'
        alignItems='center'
        id='timeline-container'
      >
        {workExperience.map((experience, index) => (
          <Grid
            item
            key={index}
            container
            direction='column'
            width={{ xs: '90%', sm: '70%', md: '50%' }}
            alignItems='center'
            position='relative'
          >
            {index !== 0 && (
              <div
                style={{
                  backgroundColor: '#d1d4c9',
                  width: '1px',
                  height: '50px',
                }}
              ></div>
            )}
            <Box
              onMouseOver={() => handleMouseOver(index)}
              onMouseOut={handleMouseOff}
              sx={{ position: 'relative', zIndex: 1 }}
            >
              {open !== index ? (
                <CiCircleChevDown
                  color='#d1d4c9'
                  size={30}
                  style={{ cursor: 'pointer' }}
                />
              ) : (
                <CiCircleChevUp
                  color='#556e53'
                  size={30}
                  style={{ cursor: 'pointer' }}
                />
              )}
            </Box>
            {open === index && (
              <Grid
                container
                direction='column'
                width={{ xs: '100%', sm: '300px' }} // Full width on small screens
                height={screenMode === 'mobile' ? 'auto' : '300px'}
                alignItems={
                  screenMode === 'mobile'
                    ? 'center'
                    : index % 2
                      ? 'flex-end'
                      : 'flex-start'
                }
                position={screenMode === 'mobile' ? 'relative' : 'absolute'}
                top={screenMode === 'mobile' ? 'auto' : '0'}
                left={
                  screenMode === 'mobile'
                    ? 'auto'
                    : index % 2 === 0
                      ? '0'
                      : '61%'
                }
                zIndex={2}
                sx={{
                  transform:
                    screenMode === 'mobile'
                      ? 'none'
                      : index % 2 === 0
                        ? `translateX(${getTranslatePercent()}%)`
                        : 'translateX(0)',
                  textAlign: 'center',
                  '@media (max-width: 600px)': {
                    left: '0',
                    transform: 'none',
                    width: '100%',
                    padding: '10px',
                  },
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    width: '40px',
                    height: '1px',
                    backgroundColor: screenMode !== 'mobile' ? '#d1d4c9' : '',
                    top: index === 0 ? '5%' : '20%',
                    left: index % 2 === 0 ? '100%' : '-13%',
                    transform:
                      index % 2 === 0 ? 'translateY(-50%)' : 'translateY(-55%)',
                  }}
                />
                <Card
                  sx={{
                    margin: '10px 0 0',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <CardHeader
                    sx={{ textAlign: 'center' }}
                    title={experience.company}
                  />
                  <CardContent>
                    <Typography textAlign={'center'}>
                      {experience.title}
                    </Typography>
                    <Typography textAlign={'center'}>
                      {experience.date}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            )}
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Timeline;
