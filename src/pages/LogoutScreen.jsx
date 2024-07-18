import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Paper, Box } from '@mui/material'
function LogoutScreen() {
    const navigate = useNavigate();
    const handleLoginRedirect = () =>{
        navigate('/login');
    };

    return(
        <Container>
            <Box 
                display="flex" 
                flexDirection="column" 
                alignItems="center" 
                justifyContent="center" 
                sx={{ height: '100vh' }}
            >
                <Paper elevation={3} sx={{ padding: 4, textAlign:'center'}}>
                    <Typography variant='h4' gutterBottom>
                        You have successfully logged out
                    </Typography>
                    <Button variant="contained" color="primary" onClick={handleLoginRedirect} sx={{marginTop: 2}}>Login Again </Button>
                </Paper>
            </Box>            
        </Container>
    )
}

export default LogoutScreen;