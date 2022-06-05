import {
  Box,
  Stack,
  TextField,
  Typography,
  Button,
  Card,
} from "@mui/material";
import { useState, useRef } from "react";

const AuthScreen = () => {
  const [formData, setFormData] = useState({});
  const [showLogin, setShowLogin] = useState(false);
  const authForm = useRef(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Box
      ref={authForm}
      component="form"
      onSubmit={handleSubmit}
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="90vh"
    >
      <Card
        sx={{
          padding: "2rem",
        }}
        variant="outlined"
      >
        <Stack
          direction="column"
          spacing={2}
          sx={{
            width: "400px",
          }}
        >
          <Typography variant="h5" color="initial">
            Please {showLogin ? "Login" : "Signup"}
          </Typography>

          {!showLogin && (
            <>
              <TextField
                name="firstName"
                label="First Name"
                variant="standard"
                onChange={handleChange}
              />
              <TextField
                name="lastName"
                label="last Name"
                variant="standard"
                onChange={handleChange}
              />
            </>
          )}
          <TextField
            type="email"
            name="email"
            label="email"
            autoComplete=""
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            type="password"
            name="password"
            label="password"
            variant="standard"
            onChange={handleChange}
          />

            <Typography  variant="subtitle1" onClick={() => {
              setShowLogin(preValue=> !preValue)
              setFormData({})
              console.log(authForm.current.reset());
            }}>
            {showLogin ? "Signup" : "Login"}
            </Typography>

          <Button variant="outlined" type="submit">
            {showLogin ? "Login" : "Signup"}
          </Button>
        </Stack>
      </Card>
    </Box>
  );
};

export default AuthScreen;
