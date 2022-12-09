import { Box, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error:any = useRouteError()
  return (
    <Box
    component="main"
    sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
  >
    <Toolbar/>
  <Typography paragraph>
   
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
    
    </Typography>
    </Box>
  )
}

export default ErrorPage