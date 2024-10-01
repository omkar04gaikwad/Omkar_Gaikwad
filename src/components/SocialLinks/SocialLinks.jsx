import React from 'react';
import { Box, List, ListItem, Link, Typography } from '@mui/material';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';
import './SocialLinks.css'; // Optional custom styles

function SocialLinks() {
  const links = [
    {
      id: 1,
      label: 'LinkedIn',
      icon: <FaLinkedin size={30} />,
      href: 'https://www.linkedin.com/in/gaikwadromkar',
    },
    {
      id: 2,
      label: 'Github',
      icon: <FaGithub size={30} />,
      href: 'https://github.com/omkar04gaikwad',
    },
    {
      id: 3,
      label: 'LeetCode',
      icon: <SiLeetcode size={30} />,
      href: 'https://leetcode.com/u/ogaikwad0405/',
    },
    {
      id: 4,
      label: 'Resume',
      icon: <BsFillPersonLinesFill size={30} />,
      href: 'https://drive.google.com/file/d/1tS7GLzr7oeEIosZrBy7ebJ4SRbHQx_n-/view?usp=sharing',
      download: true,
    }
  ];

  return (
    <Box
      className="social-links-container"
      sx={{
        position: 'fixed',
        top: '35%',
        left: '0',
        zIndex: 1000,
        display: { xs: 'none', md: 'block' },
        color: '#2c3e50',
      }}
    >
      <List sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {links.map(({ id, label, icon, href, download }) => (
          <ListItem
            key={id}
            className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gradient-to-r from-black-400 to-black-600'+" "+'rounded-tr-md'}
          >
            <Link
              href={href}
              target="_blank"
              rel="noreferrer"
              download={download}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                textDecoration: 'none',
                color: 'inherit',
                width: '100%',
                padding: '0 8px',
              }}
            >
              {icon} {/* Icon */}
              <Typography
                variant="body2"
                sx={{
                  ml: 1,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  transition: 'opacity 0.3s ease-in-out',
                  opacity: 0, // Hidden by default
                  '.MuiListItem-root:hover &': {
                    opacity: 1, // Show label when hovering
                  },
                }}
              >
                {label}
              </Typography>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default SocialLinks;
