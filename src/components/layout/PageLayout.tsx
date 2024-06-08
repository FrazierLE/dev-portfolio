import FooterLayout from "../footer/FooterLayout";
import HeaderLayout from "../header/HeaderLayout";
import { Stack } from "@mui/material";
import React from 'react';

const PageLayout = () => {
  const [hamburgerOpen, setHamburgerOpen] = React.useState(false)

  const rotate = () => {
    setHamburgerOpen(!hamburgerOpen)
  }
  return (
    <Stack direction={'column'} alignItems={'center'} justifyContent={'space-between'} width={'100vw'} height={'100vh'} sx={{ backgroundColor: '#152a38' }}>
      <HeaderLayout open={hamburgerOpen} rotate={rotate} />
      <Stack>
        Home
      </Stack>
      <FooterLayout />
    </Stack>
  )
}

export default PageLayout;