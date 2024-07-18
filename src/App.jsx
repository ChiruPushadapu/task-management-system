import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomeScreen from './pages/HomeScreen'
import LoginScreen from './pages/LoginScreen'
import RegisterScreen from './pages/RegisterScreen'
import AboutUsScreen from './pages/AboutUsScreen'
import SettingsScreen from './pages/SettingsScreen'
import ProfileScreen from './pages/ProfileScreen'
import EditTaskScreen from './pages/EditTaskScreen'
import AddTaskScreen from './pages/AddTaskScreen'
import TaskDetailScreen from './pages/TaskDetailScreen'
import LogoutScreen from './pages/LogoutScreen'


function App() {
  return (
    console.log("App Rendered"),
    <Router>
      <Routes>
        <Route path="/" Component={RegisterScreen} />
        <Route path="/register" Component={RegisterScreen} />
        <Route path="/login" Component={LoginScreen} />
        <Route path="/tasks" Component={HomeScreen} />
        <Route path="/tasks/:id" Component={TaskDetailScreen} />
        <Route path="/addTask" Component={AddTaskScreen} />
        <Route path="/editTask" Component={EditTaskScreen} />   
        <Route path="/profile" Component={ProfileScreen} />
        <Route path="/aboutUs" Component={AboutUsScreen} /> 
        <Route path="/settings" Component={SettingsScreen} />
        <Route path="/logout" Component={LogoutScreen} />      
      </Routes>
    </Router>
  )
}

export default App
