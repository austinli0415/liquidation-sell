import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { auth } from "./Firebase";
import { Navigate, useNavigate } from "react-router-dom";
import { useStateValue } from '../Components/StateProvider';

const defaultTheme = createTheme();

export default function SignIn() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [, dispatch] = useStateValue();

    const login = event => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            navigate("/");
            dispatch({
              type: 'REMOVE_ALL_FROM_CART',
            })

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
            Sign in
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
                type="password" 
                value={password}
                onChange={event => setPassword(event.target.value)}
                fullWidth
                label="Password" 
                margin='normal' 
                style={{backgroundColor: "white"}}/>
            <Button onClick={login} fullWidth variant="contained" size="large" sx={{mt: 4, mb:4, textTransform: 'capitalize', fontSize: 18}}>
                Sign in
            </Button>
            <Grid container>
              <Grid item>
                <Navigate>
                    {"Don't have an account? Sign Up"}
                </Navigate>
                <Link href="/sign-up" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>

      </Container>
    </ThemeProvider>
  );
}