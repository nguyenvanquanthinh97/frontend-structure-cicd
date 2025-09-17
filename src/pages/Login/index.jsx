import React from "react";
import axios from "axios";
import { Container, Box, Typography, Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

import config from '../../config'

const LoginPage = (props) => {
  const loginWithGoogle = async () => {
    const response = await axios.get(
      `${config.apiUrl}/googleLogin`
    );
    const googleLoginUrl = response.data?.redirectUrl;
    console.log("googleLoginUrl", googleLoginUrl);
    window.location.href = googleLoginUrl;
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        width="100%"
      >
        <Typography variant="h3" gutterBottom>
          Welcome to My Homepage
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          Sign in to continue
        </Typography>

        <Button
          onClick={loginWithGoogle}
          variant="contained"
          startIcon={<GoogleIcon />}
          sx={{
            mt: 4,
            backgroundColor: "#4285F4",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#357ae8",
            },
            textTransform: "none",
            paddingX: 3,
            paddingY: 1.5,
            borderRadius: 3,
            fontSize: "1rem",
          }}
        >
          Sign in with Google
        </Button>
      </Box>
    </Container>
  );
};

export default LoginPage;
