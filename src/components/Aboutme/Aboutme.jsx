import React, { useState } from 'react';
import { Box, Grid, Typography, Container, Button, Stack, Modal, Paper, Fade, Divider, List, ListItem, Link } from '@mui/material';
import { MdVisibility, MdEmail, MdPhone, MdWork } from 'react-icons/md';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import CodeIcon from '@mui/icons-material/Code';
import './Aboutme.css';

const AboutMe = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDemoUrl = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Professional links data
  const professionalLinks = [
    {
      id: 1,
      label: 'LinkedIn',
      icon: <LinkedInIcon style={{ fontSize: 24, color: '#0077b5' }} />,
      href: "https://www.linkedin.com/in/gaikwadromkar",
    },
    {
      id: 2,
      label: 'GitHub',
      icon: <GitHubIcon style={{ fontSize: 24, color: '#333' }} />,
      href: "https://github.com/omkar04gaikwad",
    },
    {
      id: 3,
      label: 'LeetCode',
      icon: <CodeIcon style={{ fontSize: 24, color: '#f39c12' }} />,
      href: "https://leetcode.com/u/ogaikwad0405/",
    },
  ];

  // Convert Google Drive sharing link to preview mode
  const driveUrl = "https://drive.google.com/file/d/1ihToFq5elqOBnBng1stZwIl3TH5YqaZ1/view?usp=sharing";
  const fileId = driveUrl.match(/\/d\/(.+?)\//)?.[1];
  const previewUrl = fileId ? `https://drive.google.com/file/d/${fileId}/preview` : driveUrl;

  return (
    <section id="aboutme">
      <Container maxWidth="xl" sx={{ py: 8 }}>
        {/* Professional Header Section */}
        <Fade in timeout={1000}>
          <Box sx={{ mb: 8 }}>
            <Typography 
              variant="h2" 
              gutterBottom 
              sx={{ 
                fontWeight: 300,
                fontSize: { xs: '2rem', md: '2.5rem' },
                color: '#2c3e50',
                mb: 3,
                letterSpacing: '0.5px',
                textAlign: 'left'
              }}
            >
              Omkar Rajendra Gaikwad
            </Typography>
            <Typography 
              variant="h4" 
              gutterBottom 
              sx={{ 
                fontWeight: 400,
                fontSize: { xs: '1.3rem', md: '1.6rem' },
                color: '#3498db',
                mb: 3,
                letterSpacing: '0.3px',
                textAlign: 'left'
              }}
            >
              Software Engineer
            </Typography>
            <Typography 
              variant="h6" 
              color="textSecondary" 
              sx={{ 
                mb: 4,
                fontWeight: 400,
                fontSize: '1.1rem',
                color: '#7f8c8d',
                maxWidth: 700,
                lineHeight: 1.6,
                textAlign: 'justify'
              }}
            >
              Experienced software engineer with expertise in backend systems, cloud computing, and AI-driven applications, demonstrating strong technical leadership and innovative problem-solving capabilities.
            </Typography>
            <Box sx={{ 
              width: 120, 
              height: 3, 
              background: '#3498db',
              borderRadius: 2,
              ml: 0
            }} />
          </Box>
        </Fade>

        {/* Main Content Section */}
        <Fade in timeout={1500}>
          <Paper
            elevation={1}
            sx={{
              p: 6,
              borderRadius: 3,
              backgroundColor: '#ffffff',
              border: '1px solid #e9ecef',
              boxShadow: '0 8px 32px rgba(0,0,0,0.05)',
              overflow: 'hidden'
            }}
          >
            <Grid container spacing={6} alignItems="flex-start">
              {/* Left Side - Professional Information */}
              <Grid item xs={12} md={7}>
                <Box sx={{ mb: 4 }}>
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      fontWeight: 500,
                      color: '#2c3e50',
                      mb: 3,
                      letterSpacing: '0.3px'
                    }}
                  >
                    About Me
                  </Typography>
                  
                  <Typography 
                    variant="body1" 
                    paragraph 
                    sx={{
                      fontSize: '1rem',
                      lineHeight: 1.8,
                      color: '#495057',
                      mb: 3,
                      fontWeight: 400,
                      textAlign: 'justify'
                    }}
                  >
                    <strong style={{ color: '#2c3e50' }}>Master of Science in Computer Engineering</strong> at Northeastern University, specializing in backend systems, cloud computing, and AI-driven applications.
                  </Typography>
                  
                  <Typography 
                    variant="body1" 
                    paragraph 
                    sx={{
                      fontSize: '1rem',
                      lineHeight: 1.8,
                      color: '#495057',
                      mb: 3,
                      fontWeight: 400,
                      textAlign: 'justify'
                    }}
                  >
                    <strong style={{ color: '#2c3e50' }}>Graduating December 2024</strong> - Seeking full-time Software Engineer roles in backend development, distributed systems, and AI-powered applications.
                  </Typography>
                  
                  <Typography 
                    variant="body1" 
                    paragraph 
                    sx={{
                      fontSize: '1rem',
                      lineHeight: 1.8,
                      color: '#495057',
                      mb: 3,
                      fontWeight: 400,
                      textAlign: 'justify'
                    }}
                  >
                    <strong style={{ color: '#2c3e50' }}>Professional Experience:</strong> 
                    Demonstrated expertise in DevOps, Backend Engineering, and AI-driven solutions at Nuvera Fuel Cells and LTI. Built scalable applications with Python, Django, and AWS.
                  </Typography>
                  
                  <Typography 
                    variant="body1" 
                    paragraph
                    sx={{
                      fontSize: '1rem',
                      lineHeight: 1.8,
                      color: '#495057',
                      fontWeight: 400,
                      textAlign: 'justify'
                    }}
                  >
                    <strong style={{ color: '#2c3e50' }}>Core Competencies:</strong> AWS, Docker, Microservices, Python, Java, Spring Boot, React.js, and database optimization.
                  </Typography>
                </Box>

                {/* Resume Preview Button */}
                <Button 
                  variant="outlined"
                  onClick={handleDemoUrl} 
                  startIcon={<MdVisibility />}
                  sx={{
                    borderColor: '#3498db',
                    color: '#3498db',
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    fontWeight: 500,
                    fontSize: '0.95rem',
                    textTransform: 'none',
                    letterSpacing: '0.3px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#3498db',
                      color: '#ffffff',
                      borderColor: '#3498db',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 20px rgba(52, 152, 219, 0.3)'
                    }
                  }}
                >
                  Preview Resume
                </Button>
              </Grid>

              {/* Right Side - Professional Image */}
              <Grid item xs={12} md={5}>
                <Box sx={{ textAlign: 'center' }}>
                  <Box
                    component="img"
                    src="./images/hero.jpg"
                    alt="Omkar Gaikwad - Software Engineer"
                    sx={{
                      width: '100%',
                      maxWidth: 350,
                      height: 'auto',
                      borderRadius: 3,
                      boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                      border: '1px solid #e9ecef',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 12px 35px rgba(0,0,0,0.15)'
                      }
                    }}
                  />
                </Box>
              </Grid>
            </Grid>

            {/* Professional Details Section */}
            <Divider sx={{ my: 5, borderColor: '#e9ecef' }} />
            
            <Box sx={{ mt: 4 }}>
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 500,
                  color: '#2c3e50',
                  mb: 4,
                  textAlign: 'center',
                  letterSpacing: '0.3px'
                }}
              >
                Contact Information
              </Typography>
              
              <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12} sm={6} md={4}>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 2,
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: '#f8f9fa',
                    border: '1px solid #e9ecef'
                  }}>
                    <MdWork style={{ color: '#6c757d', fontSize: 20 }} />
                    <Box>
                      <Typography variant="caption" sx={{ color: '#6c757d', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        Profile
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#495057', fontWeight: 500 }}>
                        Software Engineer
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 2,
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: '#f8f9fa',
                    border: '1px solid #e9ecef'
                  }}>
                    <MdEmail style={{ color: '#6c757d', fontSize: 20 }} />
                    <Box>
                      <Typography variant="caption" sx={{ color: '#6c757d', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        Email
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#495057', fontWeight: 500, wordBreak: 'break-all' }}>
                        gaikwad.o@northeastern.edu
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 2,
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: '#f8f9fa',
                    border: '1px solid #e9ecef'
                  }}>
                    <MdPhone style={{ color: '#6c757d', fontSize: 20 }} />
                    <Box>
                      <Typography variant="caption" sx={{ color: '#6c757d', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        Phone
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#495057', fontWeight: 500 }}>
                        +1 857.891.3750
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            {/* Professional Links Section */}
            <Divider sx={{ my: 5, borderColor: '#e9ecef' }} />
            
            <Box sx={{ mt: 4 }}>
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 500,
                  color: '#2c3e50',
                  mb: 4,
                  textAlign: 'center',
                  letterSpacing: '0.3px'
                }}
              >
                Professional Links
              </Typography>
              
              <Grid container spacing={3} justifyContent="center">
                {professionalLinks.map((link) => (
                  <Grid item xs={12} sm={6} md={3} key={link.id}>
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        color: '#495057',
                        textDecoration: 'none',
                        p: 3,
                        borderRadius: 3,
                        backgroundColor: '#ffffff',
                        border: '1px solid #e9ecef',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: '#f8f9fa',
                          transform: 'translateY(-4px)',
                          boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                          borderColor: '#3498db'
                        }
                      }}
                    >
                      <Box sx={{ mb: 2 }}>
                        {link.icon}
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#495057',
                          fontWeight: 500,
                          letterSpacing: '0.2px',
                          textAlign: 'center'
                        }}
                      >
                        {link.label}
                      </Typography>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Paper>
        </Fade>
      </Container>

      {/* Resume Preview Modal */}
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="resume-modal-title"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '90vw',
            height: '90vh',
            bgcolor: 'background.paper',
            borderRadius: 3,
            boxShadow: 24,
            overflow: 'hidden',
            border: '1px solid #e9ecef'
          }}
        >
          {/* Close Button */}
          <Button
            onClick={handleCloseModal}
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              zIndex: 1,
              bgcolor: 'rgba(0,0,0,0.7)',
              color: 'white',
              minWidth: 'auto',
              width: 40,
              height: 40,
              borderRadius: '50%',
              '&:hover': {
                bgcolor: 'rgba(0,0,0,0.9)'
              }
            }}
          >
            ✕
          </Button>
          
          {/* Resume iframe */}
          <iframe
            src={previewUrl}
            style={{
              width: '100%',
              height: '100%',
              border: 'none'
            }}
            title="Resume Preview"
            allowFullScreen
          />
        </Box>
      </Modal>
    </section>
  );
};

export default AboutMe;
