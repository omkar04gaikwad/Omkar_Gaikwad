import React from 'react';
import { Box, Typography, Grid, Paper, Container } from '@mui/material';
import { PROJECT } from '../../utils/data';

const Project = () => {
  const handleDemoUrl = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section id="projects">
      <Container maxWidth="xl" sx={{ color: '#000' }}>
        <Typography variant="h5" gutterBottom align="left" sx={{ mb: 4 }}>
          PROJECTS
        </Typography>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {PROJECT.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={4}
                sx={{
                  backgroundColor: '#ffffff',
                  p: 3, // Slightly increased padding for better spacing
                  borderRadius: 3,
                  border: '1px solid #ddd',
                  width: '100%',
                  height: '450px', // Adjusted to maintain uniformity with increased elements
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': { transform: 'scale(1.03)' },
                }}
              >
                {/* Project Image */}
                <Box display="flex" justifyContent="left" sx={{ mb: 2 }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      height: 'auto',
                      maxWidth: '100%',
                      cursor: 'pointer',
                    }}
                    onClick={() => handleDemoUrl(project.link)}
                  />
                </Box>

                {/* Project Title */}
                <Typography
                  variant="h6"
                  gutterBottom
                  component="a"
                  onClick={() => handleDemoUrl(project.link)}
                  sx={{
                    fontWeight: 'bold',
                    fontSize: '1.1rem', // Increased slightly for better balance
                    color: '#1976d2',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    display: 'block',
                    textAlign: 'left', // Left align
                    '&:hover': {
                      textDecoration: 'underline',
                      color: '#1565c0',
                    },
                  }}
                >
                  {project.title}
                </Typography>

                {/* Project Date and Link */}
                <Typography variant="body2" color="textSecondary" align="left" sx={{ mb: 1 }}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', color: 'inherit', fontWeight: 'bold' }}
                  >
                    Link
                  </a> / {project.date}
                </Typography>

                {/* Technologies */}
                <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1 }} align="left">
                  Technologies: <span style={{ fontWeight: 'normal' }}>{project.Skills.join(', ')}</span>
                </Typography>

                {/* Project Summary (Truncated for uniformity) */}
                <Typography variant="body2" align="justify" sx={{ color: 'black', flexGrow: 1 }}>
                  {project.summary.length > 180
                    ? project.summary.substring(0, 180) + '...' // Increased truncation limit for readability
                    : project.summary}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Project;
