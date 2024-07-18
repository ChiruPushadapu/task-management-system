import React from 'react';
import RegisterForm from '../components/RegisterForm'
import LoginForm from '../components/LoginForm';
import { Grid, Container } from '@mui/material';
function RegisterScreen() {
    return(
        // <Container>
        //     <Grid container>
        //         <Grid item xs={12} md={6} sx={{display: 'flex', alignItems:'center', justifyContent: 'center', height: '100vh'}}>
        //             <RegisterForm />
        //         </Grid>
        //     </Grid>
        // </Container>      
        <RegisterForm /> 
    )
}

export default RegisterScreen;