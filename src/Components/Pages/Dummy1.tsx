import { Box, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Dummy1 = () => {
  return (
    <Box
    component="main"
    sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
  >
    <Toolbar/>
  <Typography paragraph>
    <h3>dummy 1</h3>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus laudantium eveniet nobis iste iure deserunt quis velit neque deleniti vitae architecto commodi ducimus perferendis repellendus aliquam, beatae debitis saepe unde?
    </Typography>
    </Box>
  )
}

export default Dummy1