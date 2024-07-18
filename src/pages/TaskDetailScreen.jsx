import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Paper, Box } from '@mui/material';

function TaskDetailScreen()
{
    const { id } = useParams();
    const [task, setTask] = useState(null);

    useEffect(() => {
        const fetchedTask = {
            id, 
            title: `Task ${id}`,
            description: `Description of task ${id}`,
            status: 'Pending',
        };
        setTask(fetchedTask);
    }, [id]);

    if(!task)
        {
            return <Typography>Loading...</Typography>;
        }


    return(
        <Container>
            <Paper elevation={3} sx={{padding: 2, marginTop: 4}}>
                <Typography variant='h4' gutterBottom>
                    {task.title}
                </Typography>
                <Typography variant='body1' gutterBottom>
                    {task.description}
                </Typography>
                <Typography variant='body2' color='textSecondary'>
                   Status: {task.status}
                </Typography>
            </Paper>
        </Container>
    );
}

export default TaskDetailScreen;