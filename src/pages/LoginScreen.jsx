import React from 'react';
import LoginForm from '../components/LoginForm';
import { Grid, Container } from '@mui/material';

function LoginScreen() {
    return(
        <LoginForm />

        // <Container>
        //     <Grid container>
        //         <Grid item xs={12} md={6} sx={{display: 'flex', alignItems:'center', justifyContent: 'center', height: '100vh'}}>
        //             <LoginForm />
        //         </Grid>
        //     </Grid>
        // </Container>
    )
}

export default LoginScreen;