import React from 'react'
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

const ImgBox = styled('div')({
  display: 'flex',
  justifyContent:'center',
});

function NotFound() {
  return (
    <Container align="center"> 
      <ImgBox>
        <img src="/hand-drawn-404-error/228438-P28070-739.jpg" alt="404" height="auto" width="60%" />
      </ImgBox>
      <Link to="/">
        <Button variant="contained" size="large" sx={{mt: 4}}>
          Back to Home
        </Button>
      </Link>
    </ Container>
  )
}

export default NotFound