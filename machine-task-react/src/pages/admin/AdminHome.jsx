// src/pages/AdminHome.jsx
import React, { useState } from 'react';
import { Button, Drawer, List, ListItem, ListItemText, Typography, Box, Paper, useTheme, useMediaQuery } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useNavigate, Outlet } from 'react-router-dom';

function AdminHome() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  const handleMenuItemClick = (path) => {
    navigate(path);
    setIsDrawerOpen(false);
  };

  const Logout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userData');
    navigate('/login');
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Responsive Drawer */}
      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'}
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        sx={{
          width: 250,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 250,
            boxSizing: 'border-box',
          },
        }}
      >
        <List>
          <ListItem button onClick={() => handleMenuItemClick('/admin/add-category')}>
            <ListItemText primary="Add Category" />
          </ListItem>
          <ListItem button onClick={() => handleMenuItemClick('/admin/add-menu')}>
            <ListItemText primary="Add Menu" />
          </ListItem>
          <ListItem button onClick={Logout}>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          marginLeft: isMobile ? 0 : '250px',
          padding: '16px',
          bgcolor: 'background.default',
        }}
      >
        <Button
          aria-controls={isDrawerOpen ? 'menu' : undefined}
          aria-haspopup="true"
          onClick={toggleDrawer(true)}
          variant="contained"
          color="primary"
          startIcon={<MenuIcon />}
          sx={{
            display: isMobile ? 'block' : 'none',
            marginBottom: '20px',
          }}
        >
          Menu
        </Button>
        <Typography variant="h4" gutterBottom>
          Admin Home
        </Typography>
        <Paper
          sx={{
            padding: '16px',
            marginBottom: '20px',
            boxShadow: 3,
            backgroundColor: 'background.paper',
          }}
        >
          <Typography variant="h6" gutterBottom>
            Welcome to the Admin Dashboard
          </Typography>
          <Typography variant="body1" paragraph>
            As an admin, you have full control over the management of the food menu. Use the sidebar to navigate to different sections where you can:
          </Typography>
          <ul>
            <li>
              <Typography variant="body1">
                <strong>Add Category:</strong> Define new categories for the menu items.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <strong>Add Menu:</strong> Add new items to the menu including their details.
              </Typography>
            </li>
          </ul>
          <Typography variant="body1" paragraph>
            You can also log out using the button in the menu. Make sure to save any changes before logging out.
          </Typography>
        </Paper>
        <div>
          <Outlet />
        </div>
      </Box>
    </div>
  );
}

export default AdminHome;
