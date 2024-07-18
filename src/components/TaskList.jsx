import { Container,TableContainer, Table, TableHead, TableRow, TableBody, TableCell, Paper, Tooltip, IconButton } from '@mui/material';
import { OpenInNew as OpenInNewIcon, Edit as EditIcon, Delete as DeleteICon } from '@mui/icons-material'
import React from 'react';
import { Link } from 'react-router-dom';

const tasks = [
    { id: 1, title: 'Task 1', description: 'Task 1 description', status: 'Pending' },
    { id: 2, title: 'Task 2', description: 'Task 2 description', status: 'In Progress' },
    { id: 3, title: 'Task 3', description: 'Task 3 description', status: 'Completed' },
];

function TaskList(){ 

    const handleEdit = (id) => {
        console.log(`Edit task with id: ${id}`);
    }

    const handleDelete = (id) => {
        console.log(`Task with id: ${id} deleted successfully`);
    }
    return(
        <Container sx={{ marginLeft: 0, marginRight: 0 }}>
            <TableContainer component={Paper}  sx={{ marginTop: 4, marginBottom: 4, boxShadow: 20 }}>
                <Table sx={{ minWidth: 1000, }}>
                    <TableHead sx={{ fontWeight: 'bold', backgroundColor: '#0d76e0', color: '#fff' }}>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold', color: 'white', textAlign: 'center' }}>S. No</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Title</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Description</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Status</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Priority</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Due Date</TableCell>
                            <TableCell sx={{ fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tasks.map((task) => (
                            <TableRow key={task.id} >
                                <TableCell sx={{ textAlign: 'center'}}>{task.id}</TableCell>
                                <TableCell sx={{ textAlign: 'center'}}>{task.title}</TableCell>
                                <TableCell sx={{ textAlign: 'center'}}>{task.description}</TableCell>
                                <TableCell sx={{ textAlign: 'center'}}>{task.status}</TableCell>
                                <TableCell sx={{ textAlign: 'center'}}>{task.priority}</TableCell>
                                <TableCell sx={{ textAlign: 'center'}}>{task.dueDate}</TableCell>
                                <TableCell sx={{ textAlign: 'center'}}>
                                    <Tooltip title="open">
                                        <IconButton color="primary" component={Link} to={`/tasks/${task.id}`}>
                                            <OpenInNewIcon />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="edit">
                                        <IconButton color="secondary" onClick={() => handleEdit(task.id)}>
                                            <EditIcon />
                                        </IconButton>
                                    </Tooltip>
                                    <Tooltip title="delete">
                                        <IconButton color="error" onClick={() => handleDelete(task.id)}>
                                            <DeleteICon />
                                        </IconButton>
                                    </Tooltip>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}

export default TaskList