import React from 'react';
import { Box, Container, Typography, List, ListItem, Link, Grid } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import CodeIcon from '@mui/icons-material/Code';

function Footer() {
  const links = [
    {
      id: 1,
      label: 'LinkedIn',
      icon: <LinkedInIcon style={{ fontSize: 24, color: '#0077b5' }} />,
      href: "https://linkedin.com/in/omkarrajendragaikwad",
    },
    {
      id: 2,
      label: 'GitHub',
      icon: <GitHubIcon style={{ fontSize: 24, color: '#333' }} />,
      href: "https://github.com/omkar04gaikwad",
    },
    {
      id: 3,
      label: 'Resume',
      icon: <DescriptionIcon style={{ fontSize: 24, color: '#e74c3c' }} />,
      href: "https://drive.google.com/file/d/1ihToFq5elqOBnBng1stZwIl3TH5YqaZ1/view?usp=sharing",
    },
    {
      id: 4,
      label: 'LeetCode',
      icon: <CodeIcon style={{ fontSize: 24, color: '#f39c12' }} />,
      href: "https://leetcode.com/u/ogaikwad0405/",
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f8f9fa',
        color: '#2c3e50',
        py: 4,
        mt: 6,
        borderTop: '1px solid #e9ecef'
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Left Side - Professional Links */}
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 500,
                color: '#2c3e50',
                mb: 3,
                letterSpacing: '0.3px'
              }}
            >
              Professional Links
            </Typography>
            <List sx={{ p: 0 }}>
              {links.map(({ id, icon, href, label }) => (
                <ListItem 
                  key={id} 
                  sx={{ 
                    p: 0, 
                    mb: 2,
                    display: 'block'
                  }}
                >
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      color: '#495057',
                      textDecoration: 'none',
                      gap: 2,
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: '#ffffff',
                      border: '1px solid #e9ecef',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: '#f8f9fa',
                        transform: 'translateX(4px)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        borderColor: '#3498db'
                      }
                    }}
                  >
                    {icon}
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#495057',
                        fontWeight: 500,
                        letterSpacing: '0.2px'
                      }}
                    >
                      {label}
                    </Typography>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Grid>

          {/* Right Side - Additional Information */}
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h6" 
              sx={{ 
                fontWeight: 500,
                color: '#2c3e50',
                mb: 3,
                letterSpacing: '0.3px'
              }}
            >
              About This Portfolio
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#6c757d',
                lineHeight: 1.6,
                mb: 2
              }}
            >
              A comprehensive showcase of software engineering skills, projects, and professional experience. 
              Built with React and Material-UI, demonstrating modern web development practices.
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#6c757d',
                lineHeight: 1.6
              }}
            >
              © 2024 Omkar Gaikwad. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
