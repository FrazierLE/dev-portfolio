import { Stack } from '@mui/material'
import HomePage from './home/HomePage'

const App = () => {
  return (
      <Stack direction={'column'} alignItems={'center'} justifyContent={'center'} width={'100vw'} height={'100vh'} sx={{ backgroundColor: '#152a38' }}>
        <HomePage />
      </Stack>
  )
}

export default App
