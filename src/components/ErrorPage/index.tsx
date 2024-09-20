import { useRouteError } from "react-router-dom";
import { Stack, Typography } from "@mui/material";

const ErrorPage = () => {
  const { statusText, message } = useRouteError() as any;

  return (
    <Stack id="error-page" width={'100vw'} justifyContent={'center'} alignItems={'center'}>
      <Typography variant="h1">Oops!</Typography>
      <Typography variant='h2' textAlign={'center'}>Sorry, an unexpected error has occurred.</Typography>
      <Typography variant='body1'>
        <i>{statusText || message}</i>
      </Typography>
    </Stack>
  );
}

export default ErrorPage