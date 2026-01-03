import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Paper, 
  TextField, 
  Button, 
  Fade, 
  Grow,
  Divider,
  Alert,
  Snackbar
} from '@mui/material';
import { 
  Email as EmailIcon, 
  Phone as PhoneIcon, 
  LocationOn as LocationIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Send as SendIcon
} from '@mui/icons-material';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    setShowSuccess(true);
  };

  const contactInfo = [
    {
      icon: <EmailIcon sx={{ fontSize: 28, color: '#3498db' }} />,
      title: 'Email',
      value: 'ogaikwad0405@gmail.com',
      link: 'mailto:ogaikwad0405@gmail.com'
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 28, color: '#3498db' }} />,
      title: 'Phone',
      value: '+1 (857) 891-3750',
      link: 'tel:+18578913750'
    },
    {
      icon: <LocationIcon sx={{ fontSize: 28, color: '#3498db' }} />,
      title: 'Location',
      value: 'Sacramento, CA, USA',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <LinkedInIcon sx={{ fontSize: 24, color: '#0077b5' }} />,
      title: 'LinkedIn',
      link: 'https://linkedin.com/in/omkarrajendragaikwad'
    },
    {
      icon: <GitHubIcon sx={{ fontSize: 24, color: '#333' }} />,
      title: 'GitHub',
      link: 'https://github.com/omkar04gaikwad'
    }
  ];

  return (
    <section id="contactme">
      <Container maxWidth="xl" sx={{ py: 8 }}>
        {/* Header Section */}
        <Fade in timeout={1000}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 600,
                color: '#2c3e50',
                mb: 2,
                letterSpacing: '0.5px'
              }}
            >
              Get In Touch
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: '#7f8c8d',
                maxWidth: 600,
                mx: 'auto',
                lineHeight: 1.6,
                fontWeight: 400
              }}
            >
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology and software development.
            </Typography>
            <Divider 
              sx={{ 
                width: 80, 
                height: 4, 
                backgroundColor: '#3498db', 
                mx: 'auto', 
                mt: 3,
                borderRadius: 2
              }} 
            />
          </Box>
        </Fade>

        <Grid container spacing={6}>
          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Grow in timeout={1000}>
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: '#2c3e50',
                    mb: 4,
                    textAlign: { xs: 'center', md: 'left' }
                  }}
                >
                  Contact Information
                </Typography>

                {/* Contact Info Cards */}
                <Box sx={{ mb: 4 }}>
                  {contactInfo.map((info, index) => (
                    <Paper
                      key={index}
                      elevation={0}
                      sx={{
                        p: 3,
                        mb: 2,
                        borderRadius: 3,
                        border: '1px solid #e9ecef',
                        backgroundColor: '#ffffff',
                        transition: 'all 0.3s ease-in-out',
                        cursor: info.link ? 'pointer' : 'default',
                        '&:hover': info.link ? {
                          transform: 'translateY(-4px)',
                          boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                          borderColor: '#3498db'
                        } : {},
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2
                      }}
                      onClick={() => info.link && window.open(info.link, '_blank')}
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
                        {info.icon}
                      </Box>
                      <Box>
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontWeight: 600,
                            color: '#2c3e50',
                            mb: 0.5
                          }}
                        >
                          {info.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: '#495057',
                            fontSize: '0.95rem'
                          }}
                        >
                          {info.value}
                        </Typography>
                      </Box>
                    </Paper>
                  ))}
                </Box>

                {/* Social Links */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: '#2c3e50',
                    mb: 3,
                    textAlign: { xs: 'center', md: 'left' }
                  }}
                >
                  Connect With Me
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  {socialLinks.map((social, index) => (
                    <Paper
                      key={index}
                      elevation={0}
                      sx={{
                        p: 2,
                        borderRadius: 2,
                        border: '1px solid #e9ecef',
                        backgroundColor: '#ffffff',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                          borderColor: '#3498db'
                        }
                      }}
                      onClick={() => window.open(social.link, '_blank')}
                    >
                      {social.icon}
                    </Paper>
                  ))}
                </Box>
              </Box>
            </Grow>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={8}>
            <Grow in timeout={1200}>
              <Paper
                elevation={0}
                sx={{
                  p: 5,
                  borderRadius: 4,
                  border: '1px solid #e9ecef',
                  backgroundColor: '#ffffff',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.08)'
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: '#2c3e50',
                    mb: 4,
                    textAlign: 'center'
                  }}
                >
                  Send Me a Message
                </Typography>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="First Name"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleInputChange}
                        variant="outlined"
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            '&:hover fieldset': {
                              borderColor: '#3498db'
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#3498db'
                            }
                          }
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Last Name"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleInputChange}
                        variant="outlined"
                        required
                        sx={{
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            '&:hover fieldset': {
                              borderColor: '#3498db'
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#3498db'
                            }
                          }
                        }}
                      />
                    </Grid>
                  </Grid>

                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    variant="outlined"
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        '&:hover fieldset': {
                          borderColor: '#3498db'
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#3498db'
                        }
                      }
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    variant="outlined"
                    multiline
                    rows={6}
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        '&:hover fieldset': {
                          borderColor: '#3498db'
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: '#3498db'
                        }
                      }
                    }}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    startIcon={<SendIcon />}
                    sx={{
                      backgroundColor: '#3498db',
                      fontWeight: 600,
                      textTransform: 'none',
                      borderRadius: 2,
                      py: 1.5,
                      px: 4,
                      fontSize: '1rem',
                      alignSelf: 'flex-start',
                      '&:hover': {
                        backgroundColor: '#2980b9',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 25px rgba(52, 152, 219, 0.3)'
                      },
                      transition: 'all 0.3s ease-in-out'
                    }}
                  >
                    Send Message
                  </Button>
                </form>
              </Paper>
            </Grow>
          </Grid>
        </Grid>

        {/* Success/Error Messages */}
        <Snackbar
          open={showSuccess}
          autoHideDuration={6000}
          onClose={() => setShowSuccess(false)}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert 
            onClose={() => setShowSuccess(false)} 
            severity="success" 
            sx={{ width: '100%' }}
          >
            Message sent successfully! I'll get back to you soon.
          </Alert>
        </Snackbar>

        <Snackbar
          open={showError}
          autoHideDuration={6000}
          onClose={() => setShowError(false)}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert 
            onClose={() => setShowError(false)} 
            severity="error" 
            sx={{ width: '100%' }}
          >
            There was an error sending your message. Please try again.
          </Alert>
        </Snackbar>
      </Container>
    </section>
  );
};

export default ContactMe;
