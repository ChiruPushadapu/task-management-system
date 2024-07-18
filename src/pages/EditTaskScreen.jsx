import { TextField } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
function EditTaskScreen({task, editTask}){
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;

    }
    const handleSubmit = (e) => {
        e.preventDefault;

    }
    return(
        <Container maxWidth='sm'>
            <form onSubmit={handleSubmit}>
                <TextField></TextField>
            </form>
        </Container>
    );
}

export default EditTaskScreen;