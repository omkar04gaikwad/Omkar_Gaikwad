import React, { useState } from 'react';
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
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleDemoUrl = () => {
    window.open(
      "https://drive.google.com/file/d/1pNytq1tGlmfLHrefGruXdpT3CWoQt6X8/view?usp=sharing",
      '_blank'
    );
  };

  const links = [
    { id: 1, link: "aboutme", name: "About Me" },
    { id: 2, link: "workexperience", name: "Work Experience" },
    { id: 3, link: "skills", name: "Skills" },
    { id: 4, link: "projects", name: "Project" },
    { id: 5, link: "contactme", name: "Contact Me" }
  ];

  return (
    <>
      {/* Mobile Navigation Drawer */}
      <Drawer anchor="left" open={openMenu} onClose={toggleMenu}>
        <IconButton onClick={toggleMenu}>
          <CloseIcon />
        </IconButton>
        <List>
          {links.map(({ id, link, name }) => (
            <ListItem button key={id}>
              <Link to={link} smooth={true} duration={400} offset={-130} onClick={toggleMenu}>
                <ListItemText primary={name} />
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Desktop & Mobile Navbar */}
      <AppBar position="fixed" sx={{ backgroundColor: '#f5f5f5' }}className="nav-wrapper">
        <Toolbar className="nav-content">
          <IconButton edge="start" color="inherit" onClick={toggleMenu} sx={{ display: { md: 'none' } }}>
            <MenuIcon />
          </IconButton>

          <Link to={'profilediv'} smooth={true} duration={400} offset={-80}>
            <Avatar alt="Remy Sharp" src="./images/hero.jpg" />
            
          </Link>

          <div className="nav-links" style={{ flexGrow: 1, display: 'flex'}}>
            {links.map(({ id, link, name }) => (
              <Button key={id} color="inherit" sx={{ mx: 2, color: '#000', display: { xs: 'none', md: 'block' } }}>
                <Link to={link} smooth={true} duration={400} offset={-130}>
                  {name}
                </Link>
              </Button>
            ))}
          </div>

          <Button color="inherit" onClick={handleDemoUrl} startIcon={<MdDownload />} style={{ color: '#000'}}>
            Resume
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
