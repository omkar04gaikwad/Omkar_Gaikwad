import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import './Footer.css';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#ecf0f1',
        color: '#2c3e50',
        py: 2,
        mt: 4,
        textAlign: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" align="center">
          © 2024 Omkar Gaikwad, Happy Coding
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
