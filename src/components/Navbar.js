import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pet Adopter
          </Typography>
          <Button color="inherit" to="/" component={ Link }>Home</Button>
          <Button color="inherit" to="/pets/new" component={ Link }>Create Pet</Button>
          <Button color="inherit" to="/pets" component={ Link }>List Pets</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;