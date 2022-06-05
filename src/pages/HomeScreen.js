import { Box } from '@mui/material'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SideBar from '../components/SideBar'
import Welcome from '../components/Welcome'
import ChatScreen from '../components/ChatScreen'

const AllRoutes = () => {
  return(
    <Routes>
      <Route path='/' element={<Welcome/>} />
      <Route path='/:id/:name' element={<ChatScreen />} />

    </Routes>
  )
}

const HomeScreen = () => {
  return (
    <Box
      display='flex'

    >
      <SideBar/>
      <AllRoutes />
      
    </Box>
  )
}

export default HomeScreen