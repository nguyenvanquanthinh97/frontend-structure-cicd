import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

function NotFound() {
  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        textAlign="center"
      >
        <Typography variant="h1" color="error" gutterBottom>
          404
        </Typography>
        <Typography variant="h5" gutterBottom>
          Page Not Found
        </Typography>
        <Typography variant="body1" color="textSecondary" mb={4}>
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ textTransform: 'none', px: 4, py: 1.5, borderRadius: 2 }}
        >
          Go Home
        </Button>
      </Box>
    </Container>
  );
}

export default NotFound;
