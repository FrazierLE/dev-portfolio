import Contact from "./Contact"
import Info from "./Info"
import { Stack } from "@mui/material"

const FooterLayout = () => {
  return (
    <>
    <Stack direction={'row'} justifyContent={'space-between'} width={'80%'} margin={2} padding={2}>
      <Info />
      <Contact />
    </Stack>
    </>
  )
}

export default FooterLayout;