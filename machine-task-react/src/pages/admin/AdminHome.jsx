// AdminHome.jsx
import React, { useState } from 'react';
import { Button, Menu, MenuItem, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useNavigate, Outlet } from 'react-router-dom';

function AdminHome() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setIsOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIsOpen(false);
  };

  const handleMenuItemClick = (path) => {
    navigate(path);
    handleClose();
  };

  const Logout = () => {
    // Clear specific items or all items from local storage
    localStorage.removeItem('userToken'); // Example key
    localStorage.removeItem('userData'); // Example key

    // Optionally, clear all local storage
    // localStorage.clear();

    // Redirect to login or home page
    navigate('/login'); // Adjust the path as needed
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: 'auto' }}>
      <Typography variant="h4" gutterBottom style={{ marginBottom: '20px', textAlign: 'center' }}>
        Admin Home
      </Typography>
      <Button
        aria-controls={isOpen ? 'menu' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        variant="contained"
        color="primary"
        startIcon={<MenuIcon />}
        style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        Menu
      </Button>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
      >
          <MenuItem onClick={() => handleMenuItemClick('/admin/add-category')}>Add Category</MenuItem>
          <MenuItem onClick={() => handleMenuItemClick('/admin/add-menu')}>Add Menu</MenuItem>
    
 
        <MenuItem onClick={Logout}>Logout</MenuItem>
      </Menu>
      <div style={{ marginTop: '20px' }}>
        <Outlet />

        <h1 className=' text-4x' >SELECT MENU</h1>
      </div>
    </div>
  );
}

export default AdminHome;
