import React, { useState, useEffect } from 'react';
import { Alert, TextField, Button, CircularProgress, Container, Typography, Grid, Paper, Box } from '@mui/material';
import { io } from 'socket.io-client';
import { defaultServerUrl } from '../../data/servers';
import { contactus } from '../../data/data';
import { MdOutlineOnlinePrediction } from "react-icons/md";
import { IoCloudOfflineSharp } from "react-icons/io5";



const socket = io(defaultServerUrl.authentication); // Replace with your server's URL and port

export default function ContactUs() {
  const [data, setData] = useState({
    email: '',
    name: '',
    message: '',
  });
  const [error, setError] = useState('');
  const [online, setOnline] = useState(false);
  const [loader, setLoader] = useState(false);
  const [success, setSuccess] = useState('');

  useEffect(() => {
    socket.on('connect', () => {
      // console.log('Connected to server');
      setOnline(true)
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server');
      setOnline(false)
    });

    socket.on('error_message', (data) => {
      setLoader(false);
      setError(data.message);
    });

    socket.on('message_sent', (data) => {
      setLoader(false);
      setSuccess(data.message);
      setData({
        email: '',
        name: '',
        message: '',
      });
    });
    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('error_message');
      socket.off('message_sent');
    };
  }, []);

  const handleChange = (event) => {
    setError('');
    setSuccess('');
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoader(true);
    setError('');
    setSuccess('');
    socket.emit('send_message', data);
  };

  return (
      <Container maxWidth="md" sx={{ my: 4 }}>
        <Paper elevation={3} sx={{ p: 4, backgroundColor: '#0000009d' }}>
          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <Typography variant="h4" component="h1" gutterBottom className={"flex gap-x-2 align-middle justify-center"}>
              Contact Us {online?<MdOutlineOnlinePrediction size={20} className={"text-green-700 cursor-pointer"} title={"The sever is line message can be delivered Here"}/>:
                <IoCloudOfflineSharp size={20}  className={"text-red-700 cursor-pointer"} title={"Check your network or use contact info below the server might be down"}/>
            }
            </Typography>
          </Box>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                    label="Name"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    required
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'white',
                        },
                        '&:hover fieldset': {
                          borderColor: 'green',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'green',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: 'white',
                      },
                      '& .Mui-focused': {
                        color: 'green',
                      },
                    }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                    label="Email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    required
                    type="email"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'white',
                        },
                        '&:hover fieldset': {
                          borderColor: 'green',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'green',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: 'white',
                      },
                      '& .Mui-focused': {
                        color: 'green',
                      },
                    }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                    label="Message"
                    name="message"
                    value={data.message}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    required
                    multiline
                    rows={4}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'white',
                        },
                        '&:hover fieldset': {
                          borderColor: 'green',
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: 'green',
                        },
                      },
                      '& .MuiInputLabel-root': {
                        color: 'white',
                      },
                      '& .Mui-focused': {
                        color: 'green',
                      },
                    }}
                />
              </Grid>
              <Grid item xs={12} className="flex justify-center">
                {loader ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                      <CircularProgress />
                    </Box>
                ) : (
                    <Button type="submit" variant="contained" className="w-[60%] py-3" sx={{ backgroundColor: 'green', fontWeight: 'bold' }}>
                      Send
                    </Button>
                )}
              </Grid>
              <Grid item xs={12}>
                {success && <Alert severity="success">{success}</Alert>}
                {error && <Alert severity="error">{error}</Alert>}
              </Grid>
            </Grid>
          </form>
          <Box mt={4}>
            <Grid container spacing={2}>
              {contactus.map((contact) => (
                  <Grid item xs={12} md={6} key={contact.title}>
                    <Paper elevation={1} sx={{ p: 2, display: 'flex', alignItems: 'center', backgroundColor: '#000000' }}>
                      <Box sx={{ mr: 2 }}>
                        <div className="rounded-md bg-white p-2 text-black">
                          {contact.label}
                        </div>
                      </Box>
                      <Box sx={{ display: 'grid', gap: 1 }}>
                        <Typography variant="h5">{contact.title}</Typography>
                        <Typography variant="body2" className="pl-2">{contact.email}</Typography>
                        <Typography variant="body2" className="pl-2">{contact.phone}</Typography>
                      </Box>
                    </Paper>
                  </Grid>
              ))}
            </Grid>
          </Box>
        </Paper>
      </Container>
  );
}
