import {
  Box,
  Divider,
  Stack,
  Typography,
  IconButton,CircularProgress
} from "@mui/material";
import React from "react";
import UserCard from "./UserCard";
import LogoutIcon from "@mui/icons-material/Logout";
import { useQuery } from "@apollo/client";
import { GET_ALL_USER } from "../graphql/queries";

const SideBar = ({ setLoggedIn }) => {
  const { data, loading, error } = useQuery(GET_ALL_USER);

  const users = [
    { id: 1, firstName: "Mukesh", lastName: "last" },
    { id: 2, firstName: "Suresh", lastName: "last" },
    { id: 3, firstName: "Mohit", lastName: "last" },
  ];

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Box textAlign="center">
          <CircularProgress />
          <Typography variant="h6">Authenticating...</Typography>
        </Box>
      </Box>
    );
  }

  if (data) {
    console.log(data);
  }

  if (error) {
    console.log(error.message);
  }


  return (
    <Box
      backgroundColor="#f7f7f7"
      padding="10px"
      width="200px"
      height="inherit"
    >
      <Stack
        justifyContent="space-between"
        alignItems="center"
        direction="row"
      >
        <Typography variant="h6">Loading Chats...</Typography>
        <IconButton
          onClick={() => {
            localStorage.removeItem("jwt");
            setLoggedIn(false);
          }}
        >
          <LogoutIcon />
        </IconButton>
      </Stack>
      <Divider />
      {users.map((item) => {
        return <UserCard key={item.id} item={item} />;
      })}
    </Box>
  );
};

export default SideBar;
