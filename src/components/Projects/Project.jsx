import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Paper, 
  Container, 
  Chip, 
  Button, 
  Fade, 
  Grow,
  IconButton,
  Tooltip,
  Divider
} from '@mui/material';
import { 
  GitHub as GitHubIcon, 
  Launch as LaunchIcon,
  Code as CodeIcon,
  CalendarToday as CalendarIcon
} from '@mui/icons-material';
import { PROJECT } from '../../utils/data';

const Project = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleDemoUrl = (url) => {
    window.open(url, '_blank');
  };

  const getSkillColor = (skill) => {
    const skillColors = {
      'Python': '#3776AB',
      'Flask': '#000000',
      'Redis': '#DC382D',
      'Docker': '#2496ED',
      'React': '#61DAFB',
      'Java': '#ED8B00',
      'MySQL': '#4479A1',
      'JavaScript': '#F7DF1E',
      'TypeScript': '#3178C6',
      'Angular': '#DD0031',
      'Vue.js': '#4FC08D',
      'Node.js': '#339933',
      'Spring Boot': '#6DB33F',
      'AWS': '#FF9900',
      'Azure': '#0078D4',
      'GCP': '#4285F4',
      'Terraform': '#7B42BC',
      'GitHub Actions': '#2088FF',
      'Jenkins': '#D24939',
      'PostgreSQL': '#336791',
      'MongoDB': '#47A248',
      'RabbitMQ': '#FF6600',
      'Apache Kafka': '#231F20',
      'HTML': '#E34F26',
      'CSS': '#1572B6',
      'C': '#A8B9CC',
      'Android': '#3DDC84'
    };
    return skillColors[skill] || '#6c757d';
  };

  return (
    <section id="projects">
      <Container maxWidth="xl" sx={{ py: 8 }}>
        {/* Header Section */}
        <Fade in timeout={1000}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 600,
                color: '#2c3e50',
                mb: 2,
                letterSpacing: '0.5px'
              }}
            >
              Featured Projects
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#7f8c8d',
                maxWidth: 600,
                mx: 'auto',
                lineHeight: 1.6,
                fontWeight: 400
              }}
            >
              A showcase of my software engineering projects, demonstrating expertise in full-stack development, 
              cloud technologies, and modern software architecture.
            </Typography>
            <Divider 
              sx={{ 
                width: 80, 
                height: 4, 
                backgroundColor: '#3498db', 
                mx: 'auto', 
                mt: 3,
                borderRadius: 2
              }} 
            />
          </Box>
        </Fade>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {PROJECT.map((project, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Grow in timeout={1000 + index * 200}>
                <Paper
                  elevation={0}
                  sx={{
                    backgroundColor: '#ffffff',
                    borderRadius: 4,
                    border: '1px solid #e9ecef',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease-in-out',
                    cursor: 'pointer',
                    height: '100%',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                      borderColor: '#3498db',
                      '& .project-image': {
                        transform: 'scale(1.05)'
                      }
                    }
                  }}
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onClick={() => handleDemoUrl(project.link)}
                >
                  {/* Project Image Container */}
                  <Box
                    sx={{
                      position: 'relative',
                      height: 200,
                      overflow: 'hidden',
                      backgroundColor: '#f8f9fa'
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease-in-out'
                      }}
                    />
                    {/* Overlay with icons */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        opacity: hoveredProject === index ? 1 : 0,
                        transition: 'opacity 0.3s ease-in-out',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 2
                      }}
                    >
                      <Tooltip title="View Code">
                        <IconButton
                          sx={{ 
                            backgroundColor: 'rgba(255,255,255,0.9)',
                            '&:hover': { backgroundColor: '#ffffff' }
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDemoUrl(project.link);
                          }}
                        >
                          <GitHubIcon sx={{ color: '#000' }} />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Live Demo">
                        <IconButton
                          sx={{ 
                            backgroundColor: 'rgba(255,255,255,0.9)',
                            '&:hover': { backgroundColor: '#ffffff' }
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDemoUrl(project.link);
                          }}
                        >
                          <LaunchIcon sx={{ color: '#000' }} />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </Box>

                  {/* Project Content */}
                  <Box sx={{ p: 4 }}>
                    {/* Project Title */}
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        color: '#2c3e50',
                        mb: 2,
                        lineHeight: 1.3,
                        cursor: 'pointer',
                        '&:hover': {
                          color: '#3498db'
                        }
                      }}
                    >
                      {project.title}
                    </Typography>

                    {/* Project Date */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                      <CalendarIcon sx={{ fontSize: 18, color: '#7f8c8d', mr: 1 }} />
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#7f8c8d',
                          fontWeight: 500,
                          fontSize: '0.9rem'
                        }}
                      >
                        {project.date}
                      </Typography>
                    </Box>

                    {/* Project Summary */}
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#495057',
                        lineHeight: 1.6,
                        mb: 3,
                        fontSize: '0.95rem'
                      }}
                    >
                      {project.summary}
                    </Typography>

                    {/* Technologies */}
                    <Box sx={{ mb: 3 }}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 600,
                          color: '#2c3e50',
                          mb: 2,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1
                        }}
                      >
                        <CodeIcon sx={{ fontSize: 18 }} />
                        Technologies Used
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {project.Skills.map((skill, skillIndex) => (
                          <Chip
                            key={skillIndex}
                            label={skill}
                            size="small"
                            sx={{
                              backgroundColor: getSkillColor(skill),
                              color: '#ffffff',
                              fontWeight: 500,
                              fontSize: '0.75rem',
                              '&:hover': {
                                backgroundColor: getSkillColor(skill),
                                opacity: 0.8
                              }
                            }}
                          />
                        ))}
                      </Box>
                    </Box>

                    {/* Action Buttons */}
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <Button
                        variant="outlined"
                        startIcon={<GitHubIcon />}
                        sx={{
                          borderColor: '#3498db',
                          color: '#3498db',
                          fontWeight: 500,
                          textTransform: 'none',
                          borderRadius: 2,
                          px: 3,
                          '&:hover': {
                            borderColor: '#2980b9',
                            backgroundColor: 'rgba(52, 152, 219, 0.04)'
                          }
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDemoUrl(project.link);
                        }}
                      >
                        View Code
                      </Button>
                      <Button
                        variant="contained"
                        startIcon={<LaunchIcon />}
                        sx={{
                          backgroundColor: '#3498db',
                          fontWeight: 500,
                          textTransform: 'none',
                          borderRadius: 2,
                          px: 3,
                          '&:hover': {
                            backgroundColor: '#2980b9'
                          }
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDemoUrl(project.link);
                        }}
                      >
                        Live Demo
                      </Button>
                    </Box>
                  </Box>
                </Paper>
              </Grow>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <Fade in timeout={1500}>
          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Typography
              variant="h6"
              sx={{
                color: '#7f8c8d',
                mb: 3,
                fontWeight: 400
              }}
            >
              Want to see more of my work?
            </Typography>
            <Button
              variant="outlined"
              size="large"
              startIcon={<GitHubIcon />}
              sx={{
                borderColor: '#3498db',
                color: '#3498db',
                fontWeight: 500,
                textTransform: 'none',
                borderRadius: 3,
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                '&:hover': {
                  borderColor: '#2980b9',
                  backgroundColor: 'rgba(52, 152, 219, 0.04)'
                }
              }}
              onClick={() => window.open('https://github.com/omkar04gaikwad', '_blank')}
            >
              Visit My GitHub
            </Button>
          </Box>
        </Fade>
      </Container>
    </section>
  );
};

export default Project;
