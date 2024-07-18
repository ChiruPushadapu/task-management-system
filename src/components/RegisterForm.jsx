import { Container, Paper, Typography, Box, TextField, Button } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function RegisterForm() {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // logic for checking both passwords are same or not and then proceeding
        navigate('/login');
    }

    const handleLoginRedirect = () => {
        navigate('/login');
    }

    return(
        <Container component="main" maxWidth="xs">
            <Paper elevation={3} sx={{ padding: 4, mt: 4}}>
                <Typography component="h1" variant="h5" align="center" gutterBottom>
                    Register / Sign Up
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="name"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="password"
                        label="Password"
                        name="password"
                        type="password"
                        autoComplete="new-password"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="confirmpassword"
                        label="Confirm Password"
                        name="confirmpassword"
                        type='password'
                        autoComplete="new-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant='contained'
                        color='primary'
                        sx={{ mt: 3, mb: 2}}>Sign Up</Button>
                    <Typography variant='body1' align='center'>
                        Already have an account?
                    </Typography>
                    <Button variant='outlined' color='primary' fullWidth sx={{ mt:0, mb:2}} onClick={handleLoginRedirect}>
                        Login
                    </Button>

                </Box>
            </Paper>
        </Container>
    )
}

export default RegisterForm