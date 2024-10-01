import React from 'react';
import { Box, Typography, Grid, Paper, Container } from '@mui/material';
import { PROJECT } from '../../utils/data'; // Importing project data
import './Project.css'; // Optional for additional custom styles

const Project = () => {
  const handleDemoUrl = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section id="projects">
      <Container maxWidth="lg">
        {/* Title */}
        <Typography variant="h5" gutterBottom align="left" sx={{ mb: 4 }}>
          Projects and Publications
        </Typography>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {PROJECT.map((project, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Paper
                elevation={3}
                sx={{
                  backgroundColor: '#ecf0f1',
                  p: 3,
                  borderRadius: 2,
                  border: '1px solid #bdc3c7',
                }}
              >
                {/* Project Title */}
                <Typography 
                    variant="h6" 
                    gutterBottom 
                    component="a" 
                    onClick={() => handleDemoUrl(project.link)}
                    target="_blank" 
                    rel="noopener noreferrer"
                    sx={{
                      fontWeight: 'bold',
                      color: '#1976d2', // You can change this color to match your theme.
                      textDecoration: 'none',
                      cursor: 'pointer',
                      '&:hover': {
                        textDecoration: 'underline',
                        color: '#1565c0', // Hover color
                      },
                    }}
                  >
                    {project.title}
                  </Typography>


                {/* Project Location */}
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {project.location}
                </Typography>

                {/* Project Image */}
                <Box display="flex" justifyContent="center" sx={{ mb: 2 }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: '100%', maxWidth: '600px', cursor: 'pointer' }}
                    onClick={() => handleDemoUrl(project.link)}
                  />
                </Box>

                {/* Project Duration */}
                <Typography variant="body2" color="textSecondary" align="left" sx={{ mb: 2 }}>
                  {project.date}
                </Typography>


                <Typography variant="body2" gutterBottom>
                    <strong>Technologies:</strong> <em>{project.Skills.join(', ')}</em>
                </Typography>
                
                {/* Project Summary */}
                <Typography variant="body1" gutterBottom>
                  {project.summary}
                </Typography>

                {/* Project Responsibilities
                <ul>
                  {project.responsibilities.map((responsibility, i) => (
                    <li key={i}>
                      <Typography variant="body2">
                        <strong>{responsibility.title}:</strong> {responsibility.description}
                      </Typography>
                    </li>
                  ))}
                </ul> */}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Project;
