import {
  AppBar,
  Typography,
  Avatar,
  Box,
  Toolbar, TextField,
} from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import MessageCard from "./MessageCard";

const ChatScreen = () => {
  const { id, name } = useParams();

  return (
    <Box flexGrow={1}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          boxShadow: "0",
        }}
      >
        <Toolbar>
          <Avatar
            src={`https://avatars.dicebear.com/api/initials/${name}.svg`}
            sx={{
              width: "32px",
              height: "32px",
              mr: 2,
            }}
          />
          <Typography variant="h6" color="black">
            {name}
          </Typography>
        </Toolbar>
      </AppBar>

      <Box backgroundColor='#f5f5f5' height='77.5vh' padding='10px' sx={{overflowY:'auto'}}>
      <MessageCard text='hi mukesh' date='1222' direction='end'/> 
      <MessageCard text='hi mukesh' date='1222' direction='start'/> 
      <MessageCard text='hi mukesh' date='1222' direction='end'/> 
      <MessageCard text='hi mukesh' date='1222' direction='end'/> 
      <MessageCard text='hi mukesh' date='1222' direction='start'/> 
      <MessageCard text='hi mukesh' date='1222' direction='end'/> 
      <MessageCard text='hi mukesh' date='1222' direction='end'/> 
      <MessageCard text='hi mukesh' date='1222' direction='start'/> 
      <MessageCard text='hi mukesh' date='1222' direction='end'/> 
      <MessageCard text='hi mukesh' date='1222' direction='end'/> 
      <MessageCard text='hi mukesh' date='1222' direction='start'/> 
      <MessageCard text='hi mukesh' date='1222' direction='end'/> 
      <MessageCard text='hi mukesh' date='1222' direction='end'/> 
      <MessageCard text='hi mukesh' date='1222' direction='start'/> 
      <MessageCard text='hi mukesh' date='1222' direction='end'/> 


      </Box>

      <TextField
        name=""
        label=""
        placeholder="Enter a message"
        variant="standard"
        fullWidth
        multiline
        rows={2}
        sx={{py:1}}
        // onChange={}
        
      />


    </Box>
  );
};

export default ChatScreen;
