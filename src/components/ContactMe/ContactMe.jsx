import React from 'react';
import { Box, Typography, Container, Grid, Paper, TextField, Button } from '@mui/material';
const ContactMe = () => {
  return (
    <section id="contactme">
      <Container maxWidth="lg" sx={{ py: 6, color: '#000'}} >
        <Typography variant="h5" gutterBottom align="left">
          CONTACT ME
        </Typography>

        <Grid container justifyContent="center" alignItems="center" spacing={4}>


          {/* Contact Form Section */}
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ p: 4, backgroundColor: '#ecf0f1' }}>
              <form
                action="https://getform.io/f/rb234jdW"
                method="POST"
                style={{ display: 'flex', flexDirection: 'column', gap: 2 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="First Name"
                      name="firstname"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      name="lastname"
                      variant="outlined"
                      required
                    />
                  </Grid>
                </Grid>

                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  variant="outlined"
                  required
                  sx={{ mt: 2 }}
                />

                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  variant="outlined"
                  multiline
                  rows={4}
                  required
                  sx={{ mt: 2 }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2, alignSelf: 'flex-start' }}
                >
                  SEND
                </Button>
              </form>
            </Paper>
          </Grid>

        </Grid>
      </Container>
    </section>
  );
};

export default ContactMe;
