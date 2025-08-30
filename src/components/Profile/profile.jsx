import React from "react";
import { Box, Typography, Container, Fade } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
import "./profile.css";

const Hero = () => {
  return (
    <section id="profilediv">
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",
          background: "url('./images/background.jpg') center/cover no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          "::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(44, 62, 80, 0.7)", // Professional dark overlay
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
          {/* Professional Header */}
          <Fade in timeout={1000}>
            <Box sx={{ mb: 4 }}>
              <Typography 
                variant="h1" 
                sx={{
                  fontWeight: 300,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  color: "#ffffff",
                  mb: 3,
                  letterSpacing: '1px',
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                  lineHeight: 1.2
                }}
              >
                Omkar Rajendra Gaikwad
              </Typography>
              
              {/* Professional Subtitle */}
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 400,
                  color: "#f8f9fa",
                  mb: 4,
                  letterSpacing: '0.5px',
                  textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                  opacity: 0.95
                }}
              >
                Software Engineer & Technology Enthusiast
              </Typography>
            </Box>
          </Fade>

          {/* Animated Professional Roles */}
          <Fade in timeout={1500}>
            <Box sx={{ 
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: 3,
              p: 4,
              border: '1px solid rgba(255, 255, 255, 0.2)',
              maxWidth: 600,
              mx: 'auto'
            }}>
              <Typography 
                variant="h4" 
                sx={{ 
                  fontWeight: 300, 
                  color: "#ffffff",
                  fontSize: { xs: '1.2rem', md: '1.5rem' },
                  letterSpacing: '0.3px',
                  textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                  minHeight: '2.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Typewriter
                  words={[
                    "Software Engineer",
                    "Full Stack Developer", 
                    "Backend Systems Developer",
                    "Cloud Computing Enthusiast",
                    "AI & ML Enthusiast"
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </Typography>
            </Box>
          </Fade>

          {/* Professional Accent Line */}
          <Fade in timeout={2000}>
            <Box sx={{ 
              width: 150, 
              height: 3, 
              background: 'linear-gradient(90deg, transparent, #3498db, transparent)',
              borderRadius: 2,
              mx: 'auto',
              mt: 6,
              opacity: 0.8
            }} />
          </Fade>
        </Container>
      </Box>
    </section>
  );
};

export default Hero;
