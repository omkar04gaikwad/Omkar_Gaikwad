import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Aboutme from './components/Aboutme/Aboutme';
import Profile from './components/Profile/profile';
import Skills from './components/Skills/Skills';
import Workex from './components/workexperience/workex';
import Projects from './components/Projects/Project';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';

import { Container, Stack } from '@mui/material';

function App() {
  return (
    <>
      <Navbar />
      <Profile />
      <Container className="container" sx={{ my: 4
      }}>
        {/* Stack to vertically align all the components */}
        <Stack spacing={4}>
          
          <Aboutme />
          <Workex />
          <Skills />
          <Projects />
          <ContactMe />
        </Stack>
      </Container>
    </>
  );
}

export default App;