import React from 'react';
import { Box, List, ListItem, Link, Typography } from '@mui/material';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';
import './SocialLinks.css';

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
      href: 'https://github.com/omkar04gaikwad/Omkar_Gaikwad',
    },
    {
      id: 3,
      label: 'LeetCode',
      icon: <SiLeetcode size={30} />,
      href: 'https://leetcode.com/your-profile',
    },
    {
      id: 4,
      label: 'Resume',
      icon: <BsFillPersonLinesFill size={30} />,
      href: 'https://drive.google.com/drive/folders/17t9KSx4QmClUnVBUZ1vOMTd1YLUxiUFu?usp=sharing',
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
      }}
    >
      <List sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {links.map(({ id, label, icon, href, download }) => (
          <ListItem
            key={id}
            className="social-link-item"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              backgroundColor: '#ecf0f1',
              color: '#555555',
              borderRadius: '0 8px 8px 0',
              transition: 'width 0.3s ease-in-out',
              '&:hover': {
                width: '180px', // Expand on hover to show the label
              },
            }}
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
              }}
            >
              {icon} {/* Icon remains large and consistent */}
              <Typography
                variant="body2"
                sx={{
                  ml: 1,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  transition: 'opacity 0.3s ease-in-out',
                  opacity: 0, // Hidden by default
                  '.MuiListItem-root:hover &': { // Show label when hovering on the list item
                    opacity: 1,
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
