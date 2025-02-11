import React from 'react';
import { Box, Container, Typography, List, ListItem, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import CodeIcon from '@mui/icons-material/Code';

function Footer() {
  const links = [
    {
      id: 1,
      label: 'LinkedIn',
      icon: <LinkedInIcon style={{ fontSize: 40, color: 'black' }} />, // Increased size and color to black
      href: "https://www.linkedin.com/in/gaikwadromkar",
    },
    {
      id: 2,
      label: 'GitHub',
      icon: <GitHubIcon style={{ fontSize: 40, color: 'black' }} />, // Increased size and color to black
      href: "https://github.com/omkar04gaikwad",
    },
    {
      id: 3,
      label: 'Resume',
      icon: <DescriptionIcon style={{ fontSize: 40, color: 'black' }} />, // Increased size and color to black
      href: "https://drive.google.com/file/d/1tS7GLzr7oeEIosZrBy7ebJ4SRbHQx_n-/view?usp=sharing",
    },
    {
      id: 4,
      label: 'Leetcode',
      icon: <CodeIcon style={{ fontSize: 40, color: 'black' }} />, // Increased size and color to black
      href: "https://leetcode.com/u/ogaikwad0405/",
    },
  ];

  return (
    <Container>
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
      <Typography variant="h5" gutterBottom align="left" sx={{ mb: 4 }}>
          LINKS
        </Typography>
      <Container maxWidth="lg">
        <Typography variant="body2" align="center" sx={{ display: 'flex', justifyContent: 'center', gap: 4 }}>
          <List
            sx={{
              display: 'flex', // Always visible
              flexDirection: 'row',
              gap: 2,
            }}
          >
            {links.map(({ id, icon, href, label }) => (
              <ListItem key={id} sx={{ display: 'inline', p: 0 }}>
                <Link
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: 'grey', // Changed color to grey
                    textDecoration: 'none',
                    gap: 1,
                  }}
                >
                  {icon} {/* Icon */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'grey', // Label color set to grey
                    }}
                  >
                    {label}
                  </Typography>
                </Link>
              </ListItem>
            ))}
          </List>
        </Typography>
      </Container>
    </Box>
    </Container>
  );
}

export default Footer;
