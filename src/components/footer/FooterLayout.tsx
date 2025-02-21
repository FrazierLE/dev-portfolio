import Contact from './Contact';
import Info from './Info';
import { Stack } from '@mui/material';

const FooterLayout = () => {
  return (
    <>
      <Stack
        direction={'row'}
        justifyContent={'space-around'}
        width={'100%'}
        padding={2}
        paddingBottom={10}
        sx={{ backgroundColor: '#152a38', borderTop: '1px solid #556e53' }}
      >
        <Info />
        {/* <Contact /> */}
      </Stack>
    </>
  );
};

export default FooterLayout;
