import { Box } from "@mui/material"
import { useNavigate } from "react-router-dom"

const style = {
  backgroundColor: '#556e53',
  borderRadius: '5px',
  cursor: 'pointer',
  height: '100px',
  lineHeight: '95px',
  textAlign: 'center',
  transtionProperty: 'border-radius',
  transitionDuration: '.5s',
  transitionTimingFunction: 'linear',
  color: '#d1d4c9',
  width: '100px',
  '&:hover': {
    borderRadius: '50%',
    backgroundColor: '#29435c',
    color: '#d1d4c9'
  },
  display: 'flex',
  alignItems:'center',
  justifyContent: 'center'
}

const HomePage = () => {
  const navigate = useNavigate()
  const exploreSite = () => {
    navigate('/portfolio')
  }

  return (
    <Box sx={style} onClick={exploreSite}>
      Welcome.
    </Box>
  )
}

export default HomePage
