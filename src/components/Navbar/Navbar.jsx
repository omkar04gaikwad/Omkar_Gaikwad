import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { MdDownload } from 'react-icons/md';
import { Link } from 'react-scroll';
import './Navbar.css';
import Avatar from '@mui/material/Avatar';
import { Box, Fade, Grow, Typography } from '@mui/material';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('aboutme');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle active section tracking
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['aboutme', 'workexperience', 'skills', 'projects', 'contactme'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleDemoUrl = () => {
    window.open(
      "https://drive.google.com/file/d/1csKgiXvvmvS7fAzmJwacirwHFztNMXOc/view?usp=sharing",
      '_blank'
    );
  };

  const links = [
    { id: 1, link: "aboutme", name: "About Me" },
    { id: 2, link: "workexperience", name: "Work Experience" },
    { id: 3, link: "skills", name: "Skills" },
    { id: 4, link: "projects", name: "Projects" },
    { id: 5, link: "contactme", name: "Contact Me" }
  ];

  return (
    <>
      {/* Mobile Navigation Drawer */}
      <Drawer 
        anchor="left" 
        open={openMenu} 
        onClose={toggleMenu}
        PaperProps={{
          sx: {
            width: 280,
            backgroundColor: '#ffffff',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
          }
        }}
      >
        <Box sx={{ p: 2, borderBottom: '1px solid #e9ecef' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
            <Typography variant="h6" sx={{ color: '#2c3e50', fontWeight: 600 }}>
              Menu
            </Typography>
            <IconButton 
              onClick={toggleMenu}
              sx={{ 
                color: '#6c757d',
                '&:hover': { backgroundColor: '#f8f9fa' }
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <Avatar 
            alt="Omkar Gaikwad" 
            src="./images/hero.jpg"
            sx={{ width: 56, height: 56, border: '3px solid #3498db' }}
          />
        </Box>
        
        <List sx={{ pt: 1 }}>
          {links.map(({ id, link, name }) => (
            <ListItem 
              button 
              key={id}
              sx={{
                mx: 2,
                mb: 1,
                borderRadius: 2,
                backgroundColor: activeSection === link ? 'rgba(52, 152, 219, 0.1)' : 'transparent',
                '&:hover': {
                  backgroundColor: 'rgba(52, 152, 219, 0.05)'
                }
              }}
            >
              <Link 
                to={link} 
                smooth={true} 
                duration={400} 
                offset={-130} 
                onClick={toggleMenu}
                style={{ width: '100%', textDecoration: 'none' }}
              >
                <ListItemText 
                  primary={name} 
                  sx={{
                    color: activeSection === link ? '#3498db' : '#495057',
                    fontWeight: activeSection === link ? 600 : 500,
                    '& .MuiTypography-root': {
                      fontSize: '1rem'
                    }
                  }}
                />
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Desktop & Mobile Navbar */}
      <AppBar 
        position="fixed" 
        elevation={0}
        sx={{ 
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)',
          backdropFilter: scrolled ? 'blur(20px)' : 'blur(10px)',
          borderBottom: scrolled ? '1px solid #e9ecef' : 'none',
          transition: 'all 0.3s ease-in-out'
        }}
        className="nav-wrapper"
      >
        <Toolbar className="nav-content" sx={{ minHeight: { xs: 64, md: 72 } }}>
          {/* Mobile Menu Button */}
          <IconButton 
            edge="start" 
            color="inherit" 
            onClick={toggleMenu} 
            sx={{ 
              display: { md: 'none' },
              color: '#2c3e50',
              '&:hover': { backgroundColor: 'rgba(52, 152, 219, 0.1)' }
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo/Avatar */}
          <Link to={'profilediv'} smooth={true} duration={400} offset={-80}>
                      <Avatar 
            alt="Omkar Gaikwad" 
            src="./images/hero.jpg"
            sx={{ 
              width: { xs: 40, md: 48 }, 
              height: { xs: 40, md: 48 },
              cursor: 'pointer',
              border: '2px solid #3498db',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.1)',
                borderColor: '#2980b9'
              }
            }}
            onError={(e) => {
              e.target.style.display = 'none';
              // Fallback to initials if image fails to load
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <Avatar 
            alt="OG" 
            sx={{ 
              width: { xs: 40, md: 48 }, 
              height: { xs: 40, md: 48 },
              cursor: 'pointer',
              border: '2px solid #3498db',
              backgroundColor: '#3498db',
              color: '#ffffff',
              fontSize: '1.2rem',
              fontWeight: 600,
              display: 'none',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.1)',
                borderColor: '#2980b9'
              }
            }}
          >
            OG
          </Avatar>
          </Link>

          {/* Navigation Links */}
          <Box 
            className="nav-links" 
            sx={{ 
              flexGrow: 1, 
              display: 'flex',
              justifyContent: 'center',
              ml: { md: 4 }
            }}
          >
            {links.map(({ id, link, name }) => (
              <Button 
                key={id} 
                color="inherit" 
                sx={{ 
                  mx: 1.5, 
                  color: activeSection === link ? '#3498db' : '#495057',
                  fontWeight: activeSection === link ? 600 : 500,
                  fontSize: '0.95rem',
                  textTransform: 'none',
                  position: 'relative',
                  '&:hover': {
                    backgroundColor: 'rgba(52, 152, 219, 0.05)',
                    color: '#3498db'
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    width: activeSection === link ? '100%' : '0%',
                    height: '2px',
                    backgroundColor: '#3498db',
                    transform: 'translateX(-50%)',
                    transition: 'width 0.3s ease-in-out'
                  }
                }}
              >
                <Link to={link} smooth={true} duration={400} offset={-130}>
                  {name}
                </Link>
              </Button>
            ))}
          </Box>

          {/* Resume Button */}
          <Grow in timeout={1000}>
            <Button 
              variant="outlined"
              onClick={handleDemoUrl} 
              startIcon={<MdDownload />} 
              sx={{ 
                color: '#3498db',
                borderColor: '#3498db',
                fontWeight: 500,
                textTransform: 'none',
                borderRadius: 2,
                px: 3,
                py: 1,
                fontSize: '0.9rem',
                display: { xs: 'none', sm: 'flex' },
                '&:hover': {
                  backgroundColor: '#3498db',
                  color: '#ffffff',
                  borderColor: '#3498db',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 12px rgba(52, 152, 219, 0.3)'
                },
                transition: 'all 0.3s ease-in-out'
              }}
            >
              Resume
            </Button>
          </Grow>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
