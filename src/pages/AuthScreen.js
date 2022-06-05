import {
  Box,
  Stack,
  TextField,
  Typography,
  Button,
  Card,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useState, useRef } from "react";
import { useMutation } from "@apollo/client";
import { SIGNUP_USER, LOGIN_USER } from "../graphql/mutations";

const AuthScreen = ({setLoggedIn}) => {
  const [formData, setFormData] = useState({});
  const [showLogin, setShowLogin] = useState(false);
  const authForm = useRef(null);

  const [signupUser, { data: signupData, loading: l1, error: e1 }] =
    useMutation(SIGNUP_USER);

  const [loginUser, { data: loginData, loading: l2, error: e2 }] =
    useMutation(LOGIN_USER, {onCompleted(data){
      localStorage.setItem("jwt", data.signinUser.token)
      setLoggedIn(true)
    }});

  if (l1 || l2) {
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (showLogin) {
      //signinuser
      loginUser({
        variables: {
          userSignin: formData,
        },
      });
    } else {
      signupUser({
        variables: {
          userNew: formData,
        },
      });
    }
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
          {signupData && (
            <Alert severity="success">
              {signupData.signupUser.firstName} Signed Up
            </Alert>
          )}

          {e1 && <Alert severity="error">{e1.message}</Alert>}
          {e2 && <Alert severity="error">{e2.message}</Alert>}
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
                required
              />
              <TextField
                name="lastName"
                label="last Name"
                variant="standard"
                onChange={handleChange}
                required
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
            required
          />
          <TextField
            type="password"
            name="password"
            label="password"
            variant="standard"
            onChange={handleChange}
            required
          />

          <Typography
            variant="subtitle1"
            textAlign="center"
            onClick={() => {
              setShowLogin((preValue) => !preValue);
              setFormData({});
              authForm.current.reset();
            }}
          >
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
