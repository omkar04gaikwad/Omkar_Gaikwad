import React from 'react';
import { Box, Typography, Grid, Container, Paper } from '@mui/material';
import { SKILLS } from '../../utils/data'; // Importing skills from your data.js

const Skills = () => {
  return (
    <section id="skills">
      <Container maxWidth="lg" sx={{ color: '#000' }}>
        <Typography variant="h5" gutterBottom align="left" sx={{ mb: 4 }}>
          TECHNICAL SKILLS
        </Typography>

        {SKILLS.map((skillGroup) => (
          <Paper
            elevation={3}
            sx={{
              backgroundColor: '#ecf0f1',
              mb: 4,
              p: 3,
              borderRadius: 2,
              border: '1px solid #bdc3c7',
            }}
            key={skillGroup.title}
          >
            <Typography variant="h6" gutterBottom>
              {skillGroup.title}
            </Typography>

            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                {skillGroup.skills.map((skill, index) => (
                  <Grid item xs={12} sm={6} md={2} key={index}>
                    <Box display="flex" flexDirection="column" alignItems="center">
                      <img src={skill.slink} alt={skill.skill} style={{ width: 50, marginBottom: 8 }} />
                      <Typography variant="body1" align="center">{skill.skill}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Paper>
        ))}
      </Container>
    </section>
  );
};

export default Skills;
