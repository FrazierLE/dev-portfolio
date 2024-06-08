import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";
import { IconButton, Stack } from "@mui/material";

const NavigationMenu = ({open, rotate} : {open: boolean, rotate: () => void}) => {

  return (
    <Stack marginTop={2} marginLeft={5} alignItems={'flex-start'} width={'100%'}>
      <IconButton onClick={rotate}>{open ? <CgClose size={30} color="white" /> : <RxHamburgerMenu size={30} color="white"/>}</IconButton>
    </Stack>
  )
}

export default NavigationMenu;

// sx={{transform: 'translateY(-50%) rotate(-45deg)'}}