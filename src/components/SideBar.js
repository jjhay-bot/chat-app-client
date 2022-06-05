import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import UserCard from "./UserCard";
import LogoutIcon from "@mui/icons-material/Logout";

const SideBar = () => {
  const users = [
    { id: 1, firstName: "Mukesh", lastName: "last" },
    { id: 2, firstName: "Suresh", lastName: "last" },
    { id: 3, firstName: "Mohit", lastName: "last" },
  ];

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
        <Typography variant="h6">Chat</Typography>
        <LogoutIcon />
      </Stack>
      <Divider />
      {users.map((item) => {
        return <UserCard key={item.id} item={item} />;
      })}
    </Box>
  );
};

export default SideBar;
