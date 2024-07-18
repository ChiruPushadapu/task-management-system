import { Container, Paper, Typography, Box, TextField, Button } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm(){
    
    const navigate = useNavigate(); 

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if(email === "1234@gmail.com" && password === "1234")
            {
                navigate('/tasks');
            }
            else{
                alert("Invalid Email or Password");
            }
    }

    const handleRegisterRedirect = () => {
        navigate('/register');
    }

    return(
        <Container component="main" maxWidth="xs">
            <Paper elevation={3} sx={{ padding: 4, mt: 8}}>
                <Typography component="h1" variant="h5" align="center" gutterBottom>
                    Login
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 5}}>
                    <TextField 
                        margin="normal" 
                        required 
                        fullWidth 
                        id="email" 
                        label="Email Address" 
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete='email' 
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="password"
                        label="Password"
                        name='password'
                        type='password'
                        value = {password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete='current-password'
                    />
                    {/* Todo: add a new forgot password page */}
                    <Typography variant="body2" align='left'>
                        Forgot your password?
                    </Typography>
                    <Button 
                        type='submit'
                        fullWidth
                        variant='contained'
                        color='primary'
                        sx={{ mt: 3, mb: 2}}>Sign In
                    </Button>
                    <Typography variant='body1' align='center'>
                        Don't have an account?
                    </Typography>
                    <Button variant='outlined' color='primary' fullWidth sx={{ mt:0, mb:2}} onClick={handleRegisterRedirect}>
                        Register / Sign Up
                    </Button>
                </Box>
            </Paper>
        </Container>
    )
}
export default LoginForm;