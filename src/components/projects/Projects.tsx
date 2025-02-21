import {
  Grid,
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
} from '@mui/material';
import useProjects from './useProjects';

const cardStyle = {
  width: '100%',
  height: '300px',
  minWidth: '275px',
  backgroundColor: '#f4f5f5',
  borderRadius: '5px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transitionProperty: 'background-color',
  transitionDuration: '.5s',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#556e53',
  },
  '&:active': {
    backgroundColor: '#d1d4c9',
  },
};

const Projects = () => {
  const { view, setView, projectsArray, handleMouseOff, handleMouseOver } =
    useProjects();
  return (
    <Grid
      container
      width={{ xs: '100%', sm: '80%', md: '70%' }} // Responsive width
      justifyContent={'center'}
      alignItems={'center'}
      marginBottom={3}
      direction='column'
      height={'auto'}
      sx={{ marginRight: '55px' }}
    >
      <Typography variant='h6'>PROJECTS</Typography>
      {projectsArray?.map((item, index) => (
        <Grid
          item
          direction='column'
          width='50%'
          margin={1}
          key={index}
          onMouseOver={() => handleMouseOver(index)}
          onMouseOut={handleMouseOff}
        >
          <Card sx={cardStyle}>
            <CardContent>
              {view !== index && (
                <>
                  <CardHeader
                    sx={{
                      display: 'flex',
                      flexDirection: {
                        xs: 'column',
                        sm: 'column',
                        md: 'row',
                        lg: 'row',
                      },
                      textAlign: 'center',
                      alignItems: 'center',
                    }}
                    title={item.title}
                    subheader={item.date}
                    avatar={
                      <CardMedia
                        src={item.image}
                        component={'img'}
                        alt={`${item.title} image`}
                        height='125'
                        width='auto'
                      />
                    }
                  />
                </>
              )}
              {view === index && (
                <>
                  <CardHeader title={item.title} />
                  <Typography variant='body1'>{item.description}</Typography>
                  <div style={{ marginTop: '5px' }}>
                    {item.technologies && (
                      <Typography variant='body2'>
                        Technologies: {item.technologies}
                      </Typography>
                    )}
                  </div>
                  <div>
                    {item.githubLink && (
                      <a
                        href={item.githubLink}
                        target='_blank'
                        rel='noreferrer'
                      >
                        Github
                      </a>
                    )}
                    {item.liveLink && (
                      <a href={item.liveLink} target='_blank' rel='noreferrer'>
                        Live
                      </a>
                    )}
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Projects;
