import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { WORK_EXPERIENCE } from '../../utils/data';

const WorkEx = () => {
  return (
    <section id="workexperience">
      <Container maxWidth="xl" sx={{ color: '#000' }}>
        <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
          PROFESSIONAL EXPERIENCE
        </Typography>

        <Timeline position="alternate">
          {WORK_EXPERIENCE.map((company, index) => (
            company.roles.map((role, roleIndex) => (
              <TimelineItem key={`${index}-${roleIndex}`}> {/* Fixed template literal */}
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector sx={{ backgroundColor: "#1976d2", height: "100%" }} /> 
                </TimelineSeparator>
                <TimelineContent sx={{ textAlign: roleIndex % 2 === 0 ? "left" : "right" }}>
                  <Box sx={{ mb: 3, p: 2, borderRadius: 2, backgroundColor: "#f5f5f5" }}>
                    <Typography variant="h6" fontWeight="bold">
                      {role.title} at {company.company}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {role.date} | {company.location}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {role.summary} 
                    </Typography>
                  </Box>
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
