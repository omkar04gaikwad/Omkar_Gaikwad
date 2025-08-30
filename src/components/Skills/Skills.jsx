import React from 'react';
import { Box, Typography, Container, Fade, Grid } from '@mui/material';
import { SKILLS } from '../../utils/data';

const Skills = () => {
  // Professional, subtle color scheme
  const cardStyles = [
    {
      background: '#f8f9fa',
      color: '#495057',
      iconBg: '#e9ecef',
      borderColor: '#dee2e6'
    },
    {
      background: '#ffffff',
      color: '#495057',
      iconBg: '#f1f3f4',
      borderColor: '#e0e0e0'
    },
    {
      background: '#f8f9fa',
      color: '#495057',
      iconBg: '#e9ecef',
      borderColor: '#dee2e6'
    },
    {
      background: '#ffffff',
      color: '#495057',
      iconBg: '#f1f3f4',
      borderColor: '#e0e0e0'
    }
  ];

  return (
    <section id="skills">
      <Container maxWidth="xl" sx={{ py: 8 }}>
        {/* Professional Header Section */}
        <Fade in timeout={1000}>
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
              Technical Competencies
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
              Comprehensive expertise across multiple technology domains, demonstrating proficiency in modern software development practices and enterprise-grade solutions.
            </Typography>
            <Box sx={{ 
              width: 120, 
              height: 3, 
              background: '#3498db',
              borderRadius: 2,
              mx: 'auto'
            }} />
          </Box>
        </Fade>

        {/* Compact Skills Grid Layout */}
        <Box sx={{ mt: 6 }}>
          <Grid container spacing={4}>
            {/* Left Column */}
            <Grid item xs={12} md={6}>
              {/* Programming Languages */}
              <Box sx={{ mb: 5 }}>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 500,
                    fontSize: '1.4rem',
                    color: '#2c3e50',
                    mb: 3,
                    pb: 2,
                    borderBottom: `2px solid #dee2e6`,
                    display: 'inline-block',
                    letterSpacing: '0.3px'
                  }}
                >
                  Programming Languages
                </Typography>
                <Box sx={{
                  display: 'flex',
                  flexWrap: 'nowrap',
                  gap: 2,
                  alignItems: 'center',
                  mt: 3,
                  overflowX: 'auto'
                }}>
                  {SKILLS[0].skills.map((skill, skillIndex) => (
                    <Box 
                      key={skillIndex}
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        p: 2,
                        borderRadius: 2,
                        background: cardStyles[0].background,
                        color: cardStyles[0].color,
                        minWidth: 90,
                        flexShrink: 0,
                        border: `1px solid ${cardStyles[0].borderColor}`,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                          borderColor: '#adb5bd'
                        }
                      }}
                    >
                      <img 
                        src={skill.slink} 
                        alt={skill.skill} 
                        style={{ 
                          width: 24, 
                          height: 24,
                          objectFit: 'contain',
                          marginBottom: '8px'
                        }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'block';
                        }}
                      />
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          fontWeight: 500,
                          fontSize: '0.8rem',
                          textAlign: 'center',
                          color: '#495057',
                          maxWidth: 80,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          letterSpacing: '0.2px'
                        }}
                      >
                        {skill.skill}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Database Management Systems */}
              <Box sx={{ mb: 5 }}>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 500,
                    fontSize: '1.4rem',
                    color: '#2c3e50',
                    mb: 3,
                    pb: 2,
                    borderBottom: `2px solid #dee2e6`,
                    display: 'inline-block',
                    letterSpacing: '0.3px'
                  }}
                >
                  Database Management Systems
                </Typography>
                <Box sx={{
                  display: 'flex',
                  flexWrap: 'nowrap',
                  gap: 2,
                  alignItems: 'center',
                  mt: 3,
                  overflowX: 'auto'
                }}>
                  {SKILLS[1].skills.map((skill, skillIndex) => (
                    <Box 
                      key={skillIndex}
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        p: 2,
                        borderRadius: 2,
                        background: cardStyles[1].background,
                        color: cardStyles[1].color,
                        minWidth: 90,
                        flexShrink: 0,
                        border: `1px solid ${cardStyles[1].borderColor}`,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                          borderColor: '#adb5bd'
                        }
                      }}
                    >
                      <img 
                        src={skill.slink} 
                        alt={skill.skill} 
                        style={{ 
                          width: 24, 
                          height: 24,
                          objectFit: 'contain',
                          marginBottom: '8px'
                        }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'block';
                        }}
                      />
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          fontWeight: 500,
                          fontSize: '0.8rem',
                          textAlign: 'center',
                          color: '#495057',
                          maxWidth: 80,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          letterSpacing: '0.2px'
                        }}
                      >
                        {skill.skill}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Message Queue Technologies */}
              <Box sx={{ mb: 5 }}>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 500,
                    fontSize: '1.4rem',
                    color: '#2c3e50',
                    mb: 3,
                    pb: 2,
                    borderBottom: `2px solid #dee2e6`,
                    display: 'inline-block',
                    letterSpacing: '0.3px'
                  }}
                >
                  Message Queue Technologies
                </Typography>
                <Box sx={{
                  display: 'flex',
                  flexWrap: 'nowrap',
                  gap: 2,
                  alignItems: 'center',
                  mt: 3,
                  overflowX: 'auto'
                }}>
                  {SKILLS[2].skills.map((skill, skillIndex) => (
                    <Box 
                      key={skillIndex}
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        p: 2,
                        borderRadius: 2,
                        background: cardStyles[2].background,
                        color: cardStyles[2].color,
                        minWidth: 90,
                        flexShrink: 0,
                        border: `1px solid ${cardStyles[2].borderColor}`,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                          borderColor: '#adb5bd'
                        }
                      }}
                    >
                      <img 
                        src={skill.slink} 
                        alt={skill.skill} 
                        style={{ 
                          width: 24, 
                          height: 24,
                          objectFit: 'contain',
                          marginBottom: '8px'
                        }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'block';
                        }}
                      />
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          fontWeight: 500,
                          fontSize: '0.8rem',
                          textAlign: 'center',
                          color: '#495057',
                          maxWidth: 80,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          letterSpacing: '0.2px'
                        }}
                      >
                        {skill.skill}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>

            {/* Right Column */}
            <Grid item xs={12} md={6}>
              {/* Backend Development Frameworks */}
              <Box sx={{ mb: 5 }}>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 500,
                    fontSize: '1.4rem',
                    color: '#2c3e50',
                    mb: 3,
                    pb: 2,
                    borderBottom: `2px solid #dee2e6`,
                    display: 'inline-block',
                    letterSpacing: '0.3px'
                  }}
                >
                  Backend Development Frameworks
                </Typography>
                <Box sx={{
                  display: 'flex',
                  flexWrap: 'nowrap',
                  gap: 2,
                  alignItems: 'center',
                  mt: 3,
                  overflowX: 'auto'
                }}>
                  {SKILLS[3].skills.map((skill, skillIndex) => (
                    <Box 
                      key={skillIndex}
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        p: 2,
                        borderRadius: 2,
                        background: cardStyles[0].background,
                        color: cardStyles[0].color,
                        minWidth: 90,
                        flexShrink: 0,
                        border: `1px solid ${cardStyles[0].borderColor}`,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                          borderColor: '#adb5bd'
                        }
                      }}
                    >
                      <img 
                        src={skill.slink} 
                        alt={skill.skill} 
                        style={{ 
                          width: 24, 
                          height: 24,
                          objectFit: 'contain',
                          marginBottom: '8px'
                        }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'block';
                        }}
                      />
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          fontWeight: 500,
                          fontSize: '0.8rem',
                          textAlign: 'center',
                          color: '#495057',
                          maxWidth: 80,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          letterSpacing: '0.2px'
                        }}
                      >
                        {skill.skill}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Frontend Development Technologies */}
              <Box sx={{ mb: 5 }}>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 500,
                    fontSize: '1.4rem',
                    color: '#2c3e50',
                    mb: 3,
                    pb: 2,
                    borderBottom: `2px solid #dee2e6`,
                    display: 'inline-block',
                    letterSpacing: '0.3px'
                  }}
                >
                  Frontend Development Technologies
                </Typography>
                <Box sx={{
                  display: 'flex',
                  flexWrap: 'nowrap',
                  gap: 2,
                  alignItems: 'center',
                  mt: 3,
                  overflowX: 'auto'
                }}>
                  {SKILLS[4].skills.map((skill, skillIndex) => (
                    <Box 
                      key={skillIndex}
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        p: 2,
                        borderRadius: 2,
                        background: cardStyles[1].background,
                        color: cardStyles[1].color,
                        minWidth: 90,
                        flexShrink: 0,
                        border: `1px solid ${cardStyles[1].borderColor}`,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                          borderColor: '#adb5bd'
                        }
                      }}
                    >
                      <img 
                        src={skill.slink} 
                        alt={skill.skill} 
                        style={{ 
                          width: 24, 
                          height: 24,
                          objectFit: 'contain',
                          marginBottom: '8px'
                        }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'block';
                        }}
                      />
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          fontWeight: 500,
                          fontSize: '0.8rem',
                          textAlign: 'center',
                          color: '#495057',
                          maxWidth: 80,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          letterSpacing: '0.2px'
                        }}
                      >
                        {skill.skill}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Cloud & DevOps */}
              <Box sx={{ mb: 5 }}>
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 500,
                    fontSize: '1.4rem',
                    color: '#2c3e50',
                    mb: 3,
                    pb: 2,
                    borderBottom: `2px solid #dee2e6`,
                    display: 'inline-block',
                    letterSpacing: '0.3px'
                  }}
                >
                  Cloud & DevOps
                </Typography>
                <Box sx={{
                  display: 'flex',
                  flexWrap: 'nowrap',
                  gap: 2,
                  alignItems: 'center',
                  mt: 3,
                  overflowX: 'auto'
                }}>
                  {SKILLS[5].skills.map((skill, skillIndex) => (
                    <Box 
                      key={skillIndex}
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        p: 2,
                        borderRadius: 2,
                        background: cardStyles[2].background,
                        color: cardStyles[2].color,
                        minWidth: 90,
                        flexShrink: 0,
                        border: `1px solid ${cardStyles[2].borderColor}`,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                          borderColor: '#adb5bd'
                        }
                      }}
                    >
                      <img 
                        src={skill.slink} 
                        alt={skill.skill} 
                        style={{ 
                          width: 24, 
                          height: 24,
                          objectFit: 'contain',
                          marginBottom: '8px'
                        }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'block';
                        }}
                      />
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          fontWeight: 500,
                          fontSize: '0.8rem',
                          textAlign: 'center',
                          color: '#495057',
                          maxWidth: 80,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                          letterSpacing: '0.2px'
                        }}
                      >
                        {skill.skill}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Professional Summary Section */}
        <Fade in timeout={2000}>
          <Box sx={{ 
            textAlign: 'center', 
            mt: 8,
            p: 5,
            background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
            borderRadius: 4,
            color: '#495057',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0,0,0,0.05)',
            border: '1px solid #dee2e6'
          }}>
            <Typography variant="h5" sx={{ fontWeight: 400, mb: 3, letterSpacing: '0.5px', color: '#2c3e50' }}>
              Continuous Professional Development
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.8, lineHeight: 1.7, maxWidth: 700, mx: 'auto', color: '#495057' }}>
              Committed to staying current with emerging technologies and industry best practices, ensuring the delivery of innovative and scalable solutions that meet enterprise standards.
            </Typography>
          </Box>
        </Fade>
      </Container>
    </section>
  );
};

export default Skills;
