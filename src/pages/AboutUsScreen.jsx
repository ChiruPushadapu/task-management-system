import React from 'react';
import { Typography, Container, Paper, Box, Grid } from '@mui/material';
function AboutUsScreen(){
    return(
        <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
        <Paper elevation={3} sx={{ color: 'white', bgcolor: '#0d76e0', p: 3 }}>
            <Typography variant="h4" align='center' gutterBottom>
                About Us
            </Typography>
            <Typography variant="body1" paragraph>
                Welcome to the Task Management System. Our mission is to help you stay organized and manage your tasks efficiently. Whether you are a student, a professional, or anyone looking to keep track of their daily activities, our tool is designed to meet your needs.
            </Typography>
            <Typography variant="body1" paragraph>
                Our system offers a variety of features:
            </Typography>
            <ul>
                <li>
                    <Typography variant="body1" paragraph>
                        Task Creation: Easily create tasks with descriptions, due dates, and priorities.
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1" paragraph>
                        Task Management: View, edit, and delete tasks as per your requirements.
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1" paragraph>
                        User Authentication: Securely login and manage your tasks.
                    </Typography>
                </li>
                <li>
                    <Typography variant="body1" paragraph>
                        Notifications: Get notified about upcoming deadlines and important tasks.
                    </Typography>
                </li>
            </ul>
            <Typography variant="body1" paragraph>
                We are committed to continually improving our system to serve you better. If you have any feedback or suggestions, feel free to contact us.
            </Typography>
            <Grid container spacing={2} sx={{ mt: 3 }}>
                <Grid item xs={12} sm={6}>
                    <Box display="flex" justifyContent="center">
                        <img src="src/assets/team1.jpg" alt="Team 1" style={{ maxWidth: '100%', height: 'auto' }} />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box display="flex" justifyContent="center">
                        <img src="src/assets/team2.jpg" alt="Team 2" style={{ maxWidth: '100%', height: 'auto' }} />
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    </Container>
    );
}

export default AboutUsScreen;