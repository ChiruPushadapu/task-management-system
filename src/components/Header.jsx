import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Box} from '@mui/material';
import logo from '../assets/logo.png';
import ProfileIcon from './ProfileIcon';
import MenuIconComponent from './MenuIconComponent';

function Header() {
    return(
        <AppBar position="static">
            <Toolbar style={{ paddingLeft: '8px', paddingRight: '8px' }}>
                <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
                    <MenuIconComponent />
                    <img src = {logo} alt="logo" style={{ height: '30px',marginRight: '10px' }}></img>
                    <Typography variant="h6" component="div">
                        TASK MANAGEMENT SYSTEM
                    </Typography> 
                </Box>
                <Box>
                    <ProfileIcon />
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;