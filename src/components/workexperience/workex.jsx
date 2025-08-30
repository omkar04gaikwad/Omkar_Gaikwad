import React from 'react';
import { Container, Typography, Box, Paper, Chip } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { WORK_EXPERIENCE } from '../../utils/data';
import { MdWork, MdLocationOn, MdDateRange } from 'react-icons/md';

const WorkEx = () => {
  return (
    <section id="workexperience">
      <Container maxWidth="xl" sx={{ py: 8 }}>
        {/* Professional Header Section */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography 
            variant="h2" 
            gutterBottom 
            sx={{ 
              fontWeight: 300,
              fontSize: { xs: '2rem', md: '2.5rem' },
              color: '#2c3e50',
              mb: 3,
              letterSpacing: '0.5px'
            }}
          >
            Professional Experience
          </Typography>
          <Typography 
            variant="h6" 
            color="textSecondary" 
            sx={{ 
              mb: 4,
              fontWeight: 400,
              fontSize: '1.1rem',
              color: '#7f8c8d',
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            A comprehensive journey through software engineering roles, demonstrating progressive expertise and leadership in technology-driven organizations.
          </Typography>
          <Box sx={{ 
            width: 120, 
            height: 3, 
            background: '#3498db',
            borderRadius: 2,
            mx: 'auto'
          }} />
        </Box>

        {/* Professional Timeline */}
        <Timeline position="alternate" sx={{ p: 0 }}>
          {WORK_EXPERIENCE.map((company, index) => (
            company.roles.map((role, roleIndex) => (
              <TimelineItem key={`${index}-${roleIndex}`}>
                <TimelineSeparator>
                  <TimelineDot 
                    sx={{ 
                      backgroundColor: '#3498db',
                      width: 16,
                      height: 16,
                      boxShadow: '0 0 0 4px rgba(52, 152, 219, 0.2)',
                      border: '2px solid #ffffff'
                    }} 
                  />
                  <TimelineConnector 
                    sx={{ 
                      backgroundColor: "#3498db", 
                      height: "100%",
                      width: 2,
                      opacity: 0.6
                    }} 
                  /> 
                </TimelineSeparator>
                <TimelineContent 
                  sx={{ 
                    textAlign: roleIndex % 2 === 0 ? "left" : "right",
                    py: 2
                  }}
                >
                  <Paper
                    elevation={1}
                    sx={{
                      p: 4,
                      borderRadius: 2,
                      backgroundColor: '#ffffff',
                      border: '1px solid #e9ecef',
                      maxWidth: 520,
                      mx: 'auto',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                        borderColor: '#adb5bd'
                      }
                    }}
                  >
                    {/* Company Logo Placeholder */}
                    <Box sx={{ 
                      width: 48, 
                      height: 48, 
                      borderRadius: '12px', 
                      backgroundColor: '#f8f9fa',
                      border: '1px solid #e9ecef',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                      mx: 'auto'
                    }}>
                      <MdWork style={{ color: '#6c757d', fontSize: 22 }} />
                    </Box>

                    {/* Role Title */}
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        fontWeight: 500,
                        color: '#2c3e50',
                        mb: 1.5,
                        textAlign: 'center',
                        fontSize: '1.3rem',
                        letterSpacing: '0.3px'
                      }}
                    >
                      {role.title}
                    </Typography>

                    {/* Company Name */}
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 400,
                        color: '#495057',
                        mb: 2,
                        textAlign: 'center',
                        fontSize: '1.1rem',
                        letterSpacing: '0.2px'
                      }}
                    >
                      {company.company}
                    </Typography>

                    {/* Date and Location */}
                    <Box sx={{ 
                      display: 'flex', 
                      justifyContent: 'center', 
                      alignItems: 'center', 
                      gap: 2, 
                      mb: 3,
                      flexWrap: 'wrap'
                    }}>
                      <Chip
                        icon={<MdDateRange style={{ color: '#6c757d' }} />}
                        label={role.date}
                        size="small"
                        sx={{ 
                          backgroundColor: '#f8f9fa',
                          color: '#495057',
                          border: '1px solid #e9ecef',
                          fontWeight: 500,
                          fontSize: '0.8rem'
                        }}
                      />
                      <Chip
                        icon={<MdLocationOn style={{ color: '#6c757d' }} />}
                        label={company.location}
                        size="small"
                        sx={{ 
                          backgroundColor: '#f8f9fa',
                          color: '#495057',
                          border: '1px solid #e9ecef',
                          fontWeight: 500,
                          fontSize: '0.8rem'
                        }}
                      />
                    </Box>

                    {/* Summary */}
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        lineHeight: 1.7,
                        textAlign: 'justify',
                        color: '#495057',
                        fontSize: '0.9rem',
                        fontWeight: 400,
                        letterSpacing: '0.2px'
                      }}
                    >
                      {role.summary}
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ))
          ))}
        </Timeline>
      </Container>
    </section>
  );
};

export default WorkEx;
