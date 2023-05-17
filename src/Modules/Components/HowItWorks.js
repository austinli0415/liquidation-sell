import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

const number = {
  fontSize: 24,
  fontFamily: 'default',
  color: 'secondary.main',
  fontWeight: 'medium',
};

const image = {
  height: 55,
  my: 4,
};

function HowItWorks() {
  return (
    <Box
      sx={{ display: 'flex', bgcolor: 'primary.main' }}
    >
      <Container
        sx={{
          mt: 6,
          mb: 8,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        
        <Typography variant="h4" color="white" marked="center" component="h2" sx={{ mb: 5 }}>
          How it works
        </Typography>
        
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box sx={number}><Typography variant='h5' color="white">1.</Typography></Box>
              <Box
                component="img"
                src="/onepirate/productHowItWorks1.svg"
                alt="suitcase"
                sx={image}
                bgcolor={"white"}
                borderRadius={1}
                padding={1}
              />
              <Typography variant="h5" align="center" color="white">
                We auction store-return and over-stock so you can enjoy great stuff at low price
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box sx={number}><Typography variant='h5' color="white">2.</Typography></Box>
              <Box
                component="img"
                src="/onepirate/productHowItWorks2.svg"
                alt="graph"
                sx={image}
                bgcolor={"white"}
                borderRadius={1}
                padding={1}
              />
              <Typography variant="h5" align="center" color="white">
                First come, first served. Our offers are in limited quantities, so
                be quick.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box sx={number}><Typography variant='h5' color="white">3.</Typography></Box>
              <Box
                component="img"
                src="/onepirate/productHowItWorks3.svg"
                alt="clock"
                sx={image}
                bgcolor={"white"}
                borderRadius={1}
                padding={1}
              />
              <Typography variant="h5" align="center" color="white">
                {'New offers every week. New surprises. '}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default HowItWorks;