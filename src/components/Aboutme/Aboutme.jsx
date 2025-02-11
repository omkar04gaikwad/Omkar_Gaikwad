import React from 'react';
import { Box, Grid, Typography, Container, Button, Stack } from '@mui/material';

import './Aboutme.css'; // Custom styles if needed
import { MdDownload } from 'react-icons/md';
const handleDemoUrl = () => {
  window.open(
    "https://drive.google.com/file/d/1pNytq1tGlmfLHrefGruXdpT3CWoQt6X8/view?usp=sharing",
    '_blank'
  );
};

const AboutMe = () => {
  return (
    <section id="aboutme">
      <Box
        sx={{
          backgroundColor: '#ffffff', // Clean background
          p: 4, // Padding
          borderRadius: '10px', // Smooth rounded edges
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Light shadow effect
          maxWidth: '1200px',
          margin: 'auto',
          color: '#000'
        }}
      >
        <Container maxWidth="xl">
          <Stack direction="row" spacing={2}>
          <img
                src="./images/hero.jpg" // Update image path
                alt="Omkar Gaikwad"
                style={{
                  width: '300px',
                  height: "300px",
                  borderRadius: '8px',
                  boxShadow: '2px 2px 10px rgba(0,0,0,0.2)',
                }}
          />
          
          <Grid item xs={12} md={4} >
                <Typography variant="h5" gutterBottom sx={{ borderBottom: '2px solid #007BFF', display: 'inline-block', fontSize: "1.1rem"}}>
                  About Me
                </Typography>
                <Typography variant="body1" paragraph sx={{fontSize: "0.9rem"}}>
                  <b>Master of Science in Computer Engineering</b> at Northeastern University, specializing in backend systems, cloud computing, and AI-driven applications.
                </Typography>
                <Typography variant="body1" paragraph sx={{fontSize: "0.9rem"}}>
                  <b>Graduating December 2024</b> - Looking for full-time Software Engineer roles in backend development, distributed systems, and AI-powered applications.
                </Typography>
                <Typography variant="body1" paragraph sx={{fontSize: "0.9rem"}}>
                  <b>Professional Experience:</b> 
                  Worked on DevOps, Backend Engineering, and AI-driven solutions at Nuvera Fuel Cells and LTI. Built scalable applications with Python, Django, and AWS.
                </Typography>
                <Typography variant="body1" sx={{fontSize: "0.9rem"}}>
                  <b>Core Skills:</b> AWS, Docker, Microservices, Python, Java, Spring Boot, React.js, and database optimization.
                </Typography>
                <Typography>
                <Button color="inherit" onClick={handleDemoUrl} startIcon={<MdDownload />}>Resume</Button>
                </Typography>
            </Grid>
          </Stack>
          <div className='about-info'>
            <p>
              <span class="title-s"
              style={{
                "font-weight": "600",
                "color": "#1e1e1e",
                "font-size": "0.9rem",
              }}
              >Name: </span>
              <span>Omkar Rajendra Gaikwad</span>
            </p>
            <p>
              <span class="title-s"
              style={{
                "font-weight": "600",
                "color": "#1e1e1e",
                "font-size": "0.9rem",
              }}
              >Profile: </span>
              <span>Software Engineer Enthusiast</span>
            </p>
            <p>
              <span class="title-s"
              style={{
                "font-weight": "600",
                "color": "#1e1e1e",
                "font-size": "0.9rem",
              }}
              >Email: </span>
              <span>gaikwad.o@northeastern.edu</span>
            </p>
            <p>
              <span class="title-s"
              style={{
                "font-weight": "600",
                "color": "#1e1e1e",
                "font-size": "0.9rem",
              }}
              >Phone: </span>
              <span>+1 857.891.3750</span>
            </p>

          </div>
        </Container>
      </Box>
    </section>
  );
};

export default AboutMe;
