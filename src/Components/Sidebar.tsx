import { AppBar, Box, CssBaseline, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import React from 'react'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ErrorPage from './Pages/ErrorPage';
import Dummy1 from './Pages/Dummy1';
import { Link, Outlet } from 'react-router-dom';
import Navigation from './Pages/RouteNavigation';
import RouteNavigation from './Pages/RouteNavigation';


const drawerWidth = 240;

const Sidebar = () => {


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>


      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            // backgroundColor: '#828ae7',
            // color: '#585353',
          },

        }}
        variant="permanent"
        anchor="left"
      >
        <h3>Brand Logo</h3>
        <Divider />
        <RouteNavigation />
      </Drawer>

      {/* <div id="detail"> */}
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
          <Toolbar />
          <Typography paragraph>
            <Outlet />
          </Typography>
        </Box>
      {/* </div> */}

    </Box>
  );
}

export default Sidebar