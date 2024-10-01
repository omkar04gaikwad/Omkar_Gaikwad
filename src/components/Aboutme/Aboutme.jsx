import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import './Aboutme.css'; // Optional for custom styles

const AboutMe = () => {
  return (
    <section id="aboutme">
      <Box
        sx={{
          backgroundColor: '#ecf0f1', // Adjust the background color if needed
          py: 2, // Reduce vertical padding to make it less spaced
        }}
      >
        <Container maxWidth="lg">
          {/* Box for title */}
          <Box sx={{ mb: 3, textAlign: 'left' }}>
            <Typography variant="h5" gutterBottom>
              About Me
            </Typography>
          </Box>

          {/* First Paragraph */}
          <Typography variant="body1" paragraph align="left">
            I'm a passionate software developer with over 2 years of experience, currently pursuing my M.S. in Electrical and Computer Engineering at Northeastern University. I’m actively seeking full-time Software Engineer roles focused on backend development and network security. I love collaborating in teams, learning new skills, and building scalable applications that make a real impact.
          </Typography>

          {/* Second Paragraph */}
          <Typography variant="body1" paragraph align="left">
            Excited by the fast pace of the software industry, I’m always eager to take on new challenges and grow my expertise. I'm looking forward to connecting and contributing to projects that push boundaries and deliver value to users.
          </Typography>
        </Container>
      </Box>
    </section>
  );
};

export default AboutMe;
