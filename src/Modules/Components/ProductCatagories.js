import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom'

const Marked =  {
  height: 5,
  width: 80,
  backgroundColor: "primary.main",
  margin: "auto",
  mt: 2,
};

const MarkedImage = {
  height: 5,
  width: 20,
  backgroundColor: "white",
  margin: "auto",
  mt: 2,
};


const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 12,
  right: 12,
  top: 12,
  bottom: 12,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const images = [
  {
    url: 'https://www.merchantcapital.co.za/hubfs/Electronic%20Online%20Header-01.jpg',
    catagory: 'Electronics',
    width: '33%',
  },
  {
    url: 'https://bynder.sbdinc.com/m/8f0bbf595f2eec24/Drupal_Small-DCS578X2_A3.jpg',
    catagory: 'Tools',
    width: '33%',
  },
  {
    url: 'https://static.concretenetwork.com/photo-gallery/images/1200x625Exact_0x54/outdoor-fireplaces_22/poolside-tri-level-the-green-scene_1127.JPG',
    catagory: 'Outdoor',
    width: '33%',
  },
  {
    url: 'https://hips.hearstapps.com/hmg-prod/images/ghk010123homeminifeature-005-6414864bc1ef0.png?crop=1.00xw:0.392xh;0,0.306xh&resize=1200:*',
    catagory: 'Housewares',
    width: '33%',
  },
  {
    url: 'https://cdn.cdnparenting.com/articles/2017/10/418461847-H.webp',
    catagory: 'Infant & Baby',
    width: '33%',
  },
  {
    url: 'https://cdn1.epicgames.com/ue/product/Screenshot/HighresScreenshot00006-1920x1080-4492761cda27fc89c9cc1e4979551e95.jpg?resize=1&w=1920',
    catagory: 'Office',
    width: '33%',
  },
];

export default function ProductCategories() {
  const navigate = useNavigate();
  return (
    <Container component="section" sx={{ mt: 8, mb: 4}}>
      <Typography color="primary.main" variant="h4" align="center" component="h2">
        For All Needs and All Wants
      </Typography>
      <Box sx={Marked} ></Box>
      <Container sx={{ mt: 4, display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.catagory}
            onClick={() => 
              navigate("/product-list", {state:{catagory:image.catagory}})
            }
            style={{
              width: image.width,
            }}
          >
            <Box
              m={1.5}
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white',
              }}
            >
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                {image.catagory}
                <Box sx={MarkedImage} ></Box>
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Container>
    </Container>
  );
}