import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Help() {
  return (
    <Container
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 9 }}
    >
      <Container
        sx={{
          border: '3px solid',
          borderColor: 'primary.main',
          borderRadius: 0,
          height: 'auto',
          py: 2,
          px: 5,
          width: '60%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h4" color="primary.main" sx={{fontWeight: 800}}>
          Got any questions? Need help?
        </Typography>
      </Container>
      <Typography variant="subtitle1" sx={{ my: 3, fontWeight: 600 }}>
        We are here to help. Get in touch!
      </Typography>
      <Box
        component="img"
        src="/onepirate/productBuoy.svg"
        alt="buoy"
        sx={{ width: 60 }}
      />
    </Container>
  );
}

export default Help;