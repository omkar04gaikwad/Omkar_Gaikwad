import React from 'react';
import { Box, Grid, Typography, Container } from '@mui/material';
import './profile.css'; // You can keep this for additional custom styles

const Hero = () => {
  return (
    <section id="profilediv">
      <Box
        sx={{
          backgroundColor: '#ecf0f1',
          display: 'flex',
          alignItems: 'center',
          py: 8, // Padding Y-axis for vertical space
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            
            {/* Text Section */}
            <Grid item xs={12} md={6}>
              <Typography variant="h2" gutterBottom>
                Omkar Rajendra Gaikwad
              </Typography>
              <Typography variant="h4" color="textSecondary" gutterBottom>
                I'm a Software Engineer
              </Typography>
              <Typography variant="body1" sx={{ mt: 2, fontSize: '1.2rem' }}>
              I'm a passionate developer who is always looking for new challenges. I love learning new things and building solutions. I have experience in Django, Python Frameworks, Frontend/Backend/Cloud Technologies, and DevOps.
              </Typography>
            </Grid>
            
            {/* Image Section */}
            <Grid item xs={12} md={6} textAlign="center">
              <img
                src="./assets/images/hero.jpg"
                alt="Omkar Rajendra Gaikwad"
                style={{ width: '100%', maxWidth: '400px', borderRadius: '8px' }}
              />
            </Grid>

          </Grid>
        </Container>
      </Box>
    </section>
  );
};

export default Hero;
