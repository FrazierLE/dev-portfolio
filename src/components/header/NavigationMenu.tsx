import { RxHamburgerMenu } from 'react-icons/rx';
import { CgClose } from 'react-icons/cg';
import { Box, List, ListItem, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NavigationMenu = ({
  open,
  rotate,
}: {
  open: boolean;
  rotate: () => void;
}) => {
  const navigate = useNavigate();
  const navigateToPage = (arg: string) => {
    rotate();
    navigate(`/${arg}`);
  };

  return (
    <Stack alignItems={'flex-start'} width={'100%'}>
      <Stack
        sx={{
          backgroundColor: open ? '#556e53' : '#152a38',
          borderTopRightRadius: 5,
          borderTopLeftRadius: 5,
          minWidth: {xs: '50%', sm: '50%', md: '10%', lg: '10%'},
        }}
        width={'10vw'}
      >
        <Box
          sx={{
            paddingLeft: '10px',
            paddingTop: '11px',
            cursor: 'pointer',
          }}
          onClick={rotate}
        >
          {open ? (
            <CgClose size={30} color='white' />
          ) : (
            <RxHamburgerMenu size={30} color='white' />
          )}
        </Box>
      </Stack>
      {open && (
        <List
          sx={{
            backgroundColor: '#556e53',
            height: '20vh',
            position: 'absolute',
            marginTop: 5.9,
            cursor: 'pointer',
            borderBottomRightRadius: 5,
            borderBottomLeftRadius: 5,
            minWidth: {xs: '50%', sm: '50%', md: '10%', lg: '10%'},
          }}
        >
          <ListItem onClick={() => navigateToPage('portfolio')}>Home</ListItem>
          <ListItem onClick={() => navigateToPage('portfolio/projects')}>
            Projects
          </ListItem>
          <ListItem onClick={() => navigateToPage('portfolio/experience')}>
            Timeline
          </ListItem>
        </List>
      )}
    </Stack>
  );
};

export default NavigationMenu;
