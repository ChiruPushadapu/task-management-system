import React from 'react';
import Header from "../components/Header";
import Footer from '../components/Footer';
import TaskList from '../components/TaskList';
import { Container, Typography } from '@mui/material';
function HomeScreen(){
    return(
        <>
        <Header></Header>
        <TaskList></TaskList>
        <Footer></Footer>
        </>
    );
}
export default HomeScreen;
