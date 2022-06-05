import { Box } from "@mui/system";
import React from "react";
import Typography from "@mui/material/Typography";

const MessageCard = ({ text, date, direction }) => {
  return (
    <Box display="flex" justifyContent={direction}>
      <Box>
        <Typography
          variant="subtitle2"
          backgroundColor="white"
          padding="5px"
        >
          {text}
        </Typography>

        <Typography
          variant="caption"
          backgroundColor="white"
          padding="5px"
        >
          {date}
        </Typography>
      </Box>
    </Box>
  );
};

export default MessageCard;
