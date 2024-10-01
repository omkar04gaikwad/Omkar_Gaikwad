import React from 'react';
import { Box, Typography, Stack, Paper, Container } from '@mui/material';
import { WORK_EXPERIENCE } from '../../utils/data'; // Importing the updated work experience data
import './workex.css'; // Optional for any additional custom styles

const WorkEx = () => {
  return (
    <section id="workexperience">
      <Container maxWidth="xl"> {/* Changed maxWidth to xl for slightly larger container */}
        <Typography variant="h5" gutterBottom align="left" sx={{ mb: 4 }}>
          Work Experience
        </Typography>

        <Stack spacing={3}>
          {WORK_EXPERIENCE.map((company, index) => (
            <Paper
              elevation={3}
              sx={{
                backgroundColor: '#ecf0f1',
                p: 3,
                borderRadius: 2,
                border: '1px solid #bdc3c7',
              }}
              key={index}
            >
              {/* Company Name */}
              <Typography variant="h6" gutterBottom>
                {company.company}
              </Typography>

              {/* Company Logo and Location */}
              <Box display="flex" justifyContent="flex-start" alignItems="center" sx={{ mb: 2 }}>
                <img src={company.logo} alt={company.location} title={company.location} style={{ width: 50, marginRight: 16 }} />
                <Typography variant="body1" align="left">
                  {company.location}
                </Typography>
              </Box>

              {/* Roles under the company */}
              {company.roles.map((role, roleIndex) => (
                <Box key={roleIndex} sx={{ mt: 2 }}>
                  {/* Job Title and Duration */}
                  <Typography variant="h6" gutterBottom>
                    {role.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    {role.date}
                  </Typography>

                  {/* Projects within the role */}
                  {role.projects.map((project, projectIndex) => (
                    <Paper
                      key={projectIndex}
                      elevation={2}
                      sx={{ backgroundColor: '#ecf0f1', p: 2, mt: 2, borderRadius: 1, border: '1px solid #bdc3c7' }}
                    >
                      <Typography variant="subtitle1" gutterBottom>
                        {project.title}
                      </Typography>

                      {/* Display skills used in the project */}
                      <Typography variant="body2" gutterBottom>
                        <strong>Technologies:</strong> <em>{project.Technologies.join(', ')}</em>
                      </Typography> 

                      <ul style={{ paddingLeft: '16px' }}>
                        {project.responsibilities.map((responsibility, i) => (
                          <li key={i}>
                            <Typography variant="body2">{responsibility}</Typography>
                          </li>
                        ))}
                      </ul>
                    </Paper>
                  ))}
                </Box>
              ))}
            </Paper>
          ))}
        </Stack>
      </Container>
    </section>
  );
};

export default WorkEx;
