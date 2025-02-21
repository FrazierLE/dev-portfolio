import { Stack, IconButton } from '@mui/material';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
const Info = () => {
  return (
    <Stack direction={'row'}>
      <a href='https://www.linkedin.com/in/lauren-frazier-745053188/' target='_blank'>
      <IconButton>
        <FaLinkedin size={30} color='white' />
      </IconButton>

      </a>
      <a href='https://github.com/FrazierLE' target='_blank'>
      <IconButton>
        <FaGithub size={30} color='white' />
      </IconButton>
      </a>
    </Stack>
  );
};

export default Info;
