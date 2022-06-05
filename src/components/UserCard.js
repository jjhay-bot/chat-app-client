import { Avatar, Stack, Typography } from '@mui/material'
import React from 'react'

const UserCard = ({item:{firstName, lastName, id}}) => {
  return (
    <Stack
      className="usercard"
      direction='row'
      alignItems='center'
      spacing={2}
      sx={{
        py:1
      }}
    >
      <Avatar
        src={`https://avatars.dicebear.com/api/initials/${firstName} ${lastName}.svg`}
        sx={{
          width: '32px', height: '32px'
        }}
      />
      <Typography variant="subtitle2" >{firstName} {lastName}</Typography>
    </Stack>
  )
}

export default UserCard 