import { Stack, Card, Typography, CardContent, CardMedia } from '@mui/material';
import AboutMeImage from '../../assets/GH.jpg'

const cardStyle = {
  width: '50%',
  height: '500px',
  minWidth: '275px',
  backgroundColor: '#556e53',
  borderRadius: '5px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transitionProperty: 'background-color',
  transitionDuration: '.5s',
  cursor: 'pointer',
  padding: 1
};

const AboutMe = () => {
  return (
    <Stack width={'100%'} display={'flex'} alignItems={'center'}>
      <Typography variant='h6' textAlign={'center'}>
        ABOUT ME
      </Typography>
      <Card sx={cardStyle}>
        <CardMedia
        component={'img'}
        height={'250px'}
        width={'auto'}
        sx={{borderRadius: '5px'}}
          src={AboutMeImage}
        />
        <CardContent sx={{color: 'white'}}>
          As a third culture kid, I've had the privilege of living in different
          parts of the world, soaking in diverse cultures, and gaining a unique
          perspective on life. Fuelled by my passion for fitness, I started my
          career as a personal trainer, helping individuals achieve their
          fitness goals and lead a healthy lifestyle. However, my curiosity for
          technology and web development grew stronger over time, leading me to
          transition into front-end software development. As an extrovert, I
          thoroughly enjoy socializing and meeting new people. You can often
          find me striking up conversations and making new friends wherever I
          go. When I'm not working on my latest coding project, I love staying
          active by snowboarding, traveling, trying new activities, or hitting
          the gym. Overall, my diverse background, combined with my love for
          fitness and technology, has shaped me into the person I am today – a
          driven, outgoing, and active individual with a zest for life.
        </CardContent>
      </Card>
    </Stack>
  );
};

export default AboutMe;
