import React from 'react';
import { Box, Typography, List, ListItem, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../assets/logo.png';
function Footer()
{
    return(
        <Box component="footer" sx={{ backgroundColor: '#0d76e0', color: 'white', padding: '20px', textAlign: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
                <img src={logo} alt="logo" style={{ height: '50px', marginBottom: '10px' }} />
                <Typography variant="h6">Task Management System</Typography>
                <Typography variant="body2">&copy; 2024 | Task Management System 1.0.0</Typography>
            </Box>
            <Box>
                <List sx={{ display: 'flex', justifyContent: 'center', padding: 0 }}>
                    <ListItem sx={{ display: 'inline', width: 'auto', padding: '0 10px' }}>
                        <Link component={RouterLink} to="/aboutUs" color="inherit" underline="hover">
                            About Us
                        </Link>
                    </ListItem>
                    <ListItem sx={{ display: 'inline', width: 'auto', padding: '0 10px' }}>
                        <Link component={RouterLink} to="/termsAndConditions" color="inherit" underline="hover">
                            Terms & Conditions
                        </Link>
                    </ListItem>
                    <ListItem sx={{ display: 'inline', width: 'auto', padding: '0 10px' }}>
                        <Link component={RouterLink} to="/privacyPolicy" color="inherit" underline="hover">
                            Privacy Policy
                        </Link>
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}

export default Footer;