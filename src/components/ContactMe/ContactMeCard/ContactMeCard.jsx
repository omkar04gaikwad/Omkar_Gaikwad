import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import './ContactMeCard.css';

const ContactMeCard = ({ iconUrl, text, title, link, onClick }) => {
  const handleClick = () => {
    if (link) {
      window.open(link, '_blank');
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        mb: 2,
        borderRadius: 3,
        border: '1px solid #e9ecef',
        backgroundColor: '#ffffff',
        transition: 'all 0.3s ease-in-out',
        cursor: link || onClick ? 'pointer' : 'default',
        '&:hover': (link || onClick) ? {
          transform: 'translateY(-4px)',
          boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
          borderColor: '#3498db'
        } : {},
        display: 'flex',
        alignItems: 'center',
        gap: 2
      }}
      onClick={handleClick}
    >
      <Box
        sx={{
          width: 56,
          height: 56,
          borderRadius: 2,
          backgroundColor: 'rgba(52, 152, 219, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}
      >
        <img 
          src={iconUrl} 
          alt={title || text} 
          style={{
            width: 28,
            height: 28,
            objectFit: 'contain'
          }}
        />
      </Box>
      <Box>
        {title && (
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              color: '#2c3e50',
              mb: 0.5
            }}
          >
            {title}
          </Typography>
        )}
        <Typography
          variant="body2"
          sx={{
            color: '#495057',
            fontSize: '0.95rem'
          }}
        >
          {text}
        </Typography>
      </Box>
    </Paper>
  );
};

export default ContactMeCard;