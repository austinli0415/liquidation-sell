import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { auth } from "./Firebase";
import { useNavigate } from "react-router-dom";

const defaultTheme = createTheme();

export default function SignIn() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = event => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            navigate("/");
        })
        .catch((e) => alert(e.message));
    };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <TextField 
                required 
                id="Email" 
                value={email}
                onChange={event => setEmail(event.target.value)}
                fullWidth
                label="Email" 
                margin='normal' 
                style={{backgroundColor: "white"}}/>
            <TextField 
                required 
                id="Password" 
                value={password}
                type="password" 
                onChange={event => setPassword(event.target.value)}
                fullWidth
                label="Password" 
                margin='normal' 
                style={{backgroundColor: "white"}}/>
            <Button onClick={login} variant="contained" fullWidth size="large" sx={{mt: 4, mb:4}}>
                SIGN UP
            </Button>
            <Grid container>
            </Grid>
          </Box>

      </Container>
    </ThemeProvider>
  );
}