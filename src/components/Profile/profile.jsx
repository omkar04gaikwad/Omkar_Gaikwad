import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { Typewriter } from "react-simple-typewriter"; // Import Typewriter effect
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
            background: "rgba(0, 0, 0, 0.5)", // Dark overlay
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2, color: '#000'}}>
          {/* Name */}
          <Typography variant="h2" fontWeight="bold" sx={{color: "white"}}>
            Omkar Rajendra Gaikwad
          </Typography>

          {/* Animated Job Titles */}
          <Typography variant="h4" sx={{ mt: 1, fontWeight: "300", color:"white" }}>
            <Typewriter
              words={["Software Engineer", "Full Stack Web Developer", "Embedded Systems Enthusiast", "Hiking Lover"]}
              loop={0} // Infinite loop
              cursor
              cursorStyle="|"
              typeSpeed={80} // Speed of typing
              deleteSpeed={50} // Speed of erasing
              delaySpeed={1500} // Delay between word switches
            />
          </Typography>
        </Container>
      </Box>
    </section>
  );
};

export default Hero;
