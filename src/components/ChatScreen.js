import {
  AppBar,
  Typography,
  Avatar,
  Box,
  Toolbar,
  TextField,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MessageCard from "./MessageCard";
import {
  useMutation,
  useQuery,
  useSubscription,
} from "@apollo/client";
import { GET_MSG } from "../graphql/queries";
import SendIcon from "@mui/icons-material/Send";
import { SEND_MSG } from "../graphql/mutations";
import { MSG_SUB } from "../graphql/subscriptions";
import jwt_decode from 'jwt-decode'

const ChatScreen = () => {
  const { id, name } = useParams();
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const {userId} = jwt_decode(localStorage.getItem('jwt'))

  const { data, loading, error } = useQuery(GET_MSG, {
    variables: {
      receiverId: +id,
    },
    onCompleted(data) {
      setMessages(data.messagesByUser);
    },
  });

  const [sendMessage] = useMutation(SEND_MSG, {
    variables: {
      receiverId: +id,
    },
    onCompleted(data) {
      setMessages((prevMesssages) => [
        ...prevMesssages,
        data.createMessage,
      ]);
    },
  });

  // const { subData } = useSubscription(MSG_SUB, {
  //   onSubscriptionData({ subscriptionData: { data } }) {
  //     if (
  //       (data.messageAdded.receiverId == +id &&
  //         data.messageAdded.senderId == userId) ||
  //       (data.messageAdded.receiverId == userId &&
  //         data.messageAdded.senderId == +id)
  //     ) {
  //       setMessages((prevMessages) => [
  //         ...prevMessages,
  //         data.messageAdded,
  //       ]);
  //     }
  //   },
  // });



  const  { data: subData } = useSubscription(MSG_SUB)

  if (subData) {
    console.log(subData);
  }
  
  error && console.log(error.message);

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

      <Box
        backgroundColor="#f5f5f5"
        height="77.5vh"
        padding="10px"
        sx={{ overflowY: "auto" }}
      >
        {loading ? (
          <Typography variant="h6">Loading...</Typography>
        ) : (
          messages.map((msg, i) => (
            <MessageCard
              key={i}
              text={msg.text}
              date={msg.createdAt}
              direction={msg.receiverId === +id ? "end" : "start"}
            />
          ))
        )}
      </Box>
      <Stack direction="row">
        <TextField
          name=""
          label=""
          placeholder="Enter a message"
          variant="standard"
          fullWidth
          multiline
          rows={2}
          sx={{ py: 1 }}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <SendIcon
          fontSize="large"
          onClick={() => {
            sendMessage({
              variables: {
                receiverId: +id,
                text: text,
              },
            });
          }}
        />
      </Stack>
    </Box>
  );
};

export default ChatScreen;
