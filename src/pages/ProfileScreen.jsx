import { Avatar, Typography, Container, Box, Grid, } from '@mui/material';
import React from 'react';

function ProfileScreen( {user} ){
    return(
        <Container maxWidth='md' sx={{mt:2}}>
            <Box display='flex' alignItems='center' flexDirection='column' mb={4}>
                <Avatar 
                    // alt={user.name}
                    alt = "name"
                    src="src/assets/profile.jpeg"
                    sx={{ width:120, height: 120, mb:2 }}
                />
                <Typography variant='h4'>name</Typography>
                <Typography variant='subtitle1' color='textSecondary'>
                    email
                </Typography>
            </Box>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Typography variant='h6'>Username</Typography>
                    <Typography variant='body1' color='textSecondary'>
                        {/* {user.name} */}
                        username
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant='h6'>Email</Typography>
                    <Typography variant='body1' color='textSecondary'>
                        {/* {user.email}  */}
                        email
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default ProfileScreen;