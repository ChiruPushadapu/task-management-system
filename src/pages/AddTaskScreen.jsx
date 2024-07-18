import { Container, TextField, FormControl, InputLabel, Select, Button, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
function AddTaskScreen({ addTask })
{
    const navigate = useNavigate();

    const [task ,setTask] = useState({
        id: '',
        title: '',
        description: '',
        status: '',
        priority: '',
        dueDate: '',
    });

    const handleChange = (e) => {
        const{ name, value } =e.target;
        setTask({
            ...task,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(task);

        setTask({
            id: '',
            title: '',
            description: '',
            status: '',
            priority: '',
            dueDate: '',
        });
        navigate('/tasks')
    };

    const handleBack = () => {
        navigate('/tasks');
    }

    return(
        <>
        <Header></Header>
        <Container maxWidth='sm'>
            <form onSubmit= {handleSubmit}>
                <TextField
                    fullWidth
                    label='ID'
                    variant='outlined'
                    name='id'
                    value={task.id}
                    onChange={handleChange}
                    margin='normal'
                    size='small'
                    required
                />
                <TextField
                    fullWidth
                    label='Title'
                    variant='outlined'
                    name='title'
                    value={task.title}
                    onChange={handleChange}
                    margin='normal'
                    size='small'
                    required
                />
                <TextField
                    fullWidth
                    label='Description'
                    variant='outlined'
                    name='description'
                    value={task.description}
                    onChange={handleChange}
                    margin='normal'
                    size='small'
                    required
                />
                <FormControl fullWidth variant='outlined' margin='normal' size='small' required>
                    <InputLabel>Status</InputLabel>
                    <Select 
                        name='status'
                        label='Status'
                        value={task.status}
                        onChange={handleChange}
                    >
                        <MenuItem value="Pending">Pending</MenuItem>
                        <MenuItem value="In Progress">In Progress</MenuItem>
                        <MenuItem value="Completed">Completed</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth variant='outlined' margin='normal' size='small' required>
                    <InputLabel>Priority</InputLabel>
                    <Select 
                        name='priority'
                        label='Priority'
                        value={task.priority}
                        onChange={handleChange}
                    >
                        <MenuItem value="High">High</MenuItem>
                        <MenuItem value="Medium">Medium</MenuItem>
                        <MenuItem value="Low">Low</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    fullWidth
                    label='Due Date'
                    name='dueDate'
                    type='date'
                    variant='outlined'
                    value={task.dueDate}
                    onChange={handleChange}
                    margin='normal'
                    size='small'
                    required
                    InputLabelProps={{
                        shrink:true,
                    }}
                />
                <Button type='submit' variant='contained' color='primary' fullWidth sx={{mt: 2}}>
                    Add Task
                </Button>
                <Button variant='outlined' color='primary' fullWidth onClick={handleBack} sx={{mt: 2}}>Go Back</Button>
            </form>
        </Container>
        </>
    );
}

export default AddTaskScreen;