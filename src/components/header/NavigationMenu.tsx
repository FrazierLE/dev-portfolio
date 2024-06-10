import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";
import { Box, List, ListItem, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const NavigationMenu = ({open, rotate} : {open: boolean, rotate: () => void}) => {
  const navigate = useNavigate()

  return (
    <Stack alignItems={'flex-start'} width={'100%'}>
      <Stack sx={{backgroundColor: open ? '#556e53' : '#152a38'}} width={'20vw'}>
        <Box sx={{paddingLeft: '10px', paddingTop: '11px'}} onClick={rotate}>{open ? <CgClose size={30} color="white" /> : <RxHamburgerMenu size={30} color="white"/>}</Box>
      </Stack>
      {open && 
        <List sx={{backgroundColor: '#556e53', height: '67vh', position: 'absolute', marginTop: 5.90, width: '20vw'}}>
          <ListItem onClick={() => navigate('/home')}>Home</ListItem>
          <ListItem onClick={() => navigate('/projects')}>Projects</ListItem>
          <ListItem onClick={() => navigate('/experience')}>Experience</ListItem>
        </List>}
    </Stack>
  )
}

export default NavigationMenu;
