import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import UserCard from './UserCard'

const SideBar = () => {
  const users = [
    {id: 1, firstName: "Mukesh", lastName: "last"},
    {id: 2, firstName: "Suresh", lastName: "last"},
    {id: 3, firstName: "Mohit", lastName: "last"}
  ]


  return (
    <Box
      backgroundColor="#f7f7f7"
      height='100vh'
      padding='10px'
      width='200px'
    >
      <Typography variant="h6" >Chat</Typography>
      <Divider />
    {
      users.map(item => {
        return <UserCard key={item.id} item={item}/>
      })
    }
    </Box>
  )
}

export default SideBar
