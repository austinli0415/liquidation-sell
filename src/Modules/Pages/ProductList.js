import React, { useState, useEffect } from 'react'
import AppBar from '../Components/AppBar'
import { useLocation } from 'react-router-dom';
import { Box, Typography } from '@mui/material'
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { useStateValue } from '../Components/StateProvider';
import { db } from "../Components/Firebase";

async function getProducts() {
  const products = [];
  const snapshot = await db.collection('products').get()
  snapshot.forEach(doc => {
    const product = doc.data();
    console.log("product is ", product);
    products.push(product);
  });
  return products;
}

function ProductList(props) {
  const location = useLocation();
  const {catagory} = location.state;
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    getProducts()
    .then(products => {
      setFilteredList(products.filter(item => item.catagory === catagory));
    })
  }, []);

  const [, dispatch] = useStateValue();

  return (
    <>
      <AppBar />
      <Box align="center" mt={6}>
        <Typography variant="h4">
          {catagory}
        </Typography>
      </Box>
      <Box padding={5}>
        <Grid container spacing={3}>
          {filteredList.map((item) => (
            <Grid item xs={12} md={3} align="center" style={{display: 'flex'}}> 
              <Card raised style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1}}>
                <CardHeader
                  title={item.title}
                />
                <CardMedia
                  component="img"
                  height="250"
                  image={item.url}
                  alt="img"
                  sx={{ objectFit: 'contain'}}
                />
                <CardContent>
                  <Typography variant='h5' >
                    ${item.salePrice}
                  </Typography>
                  <Typography sx={{color:'grey'}}>
                    compare at ${item.originalPrice}
                  </Typography>
                  <Button 
                      variant="contained" 
                      sx={{width:"60%", height:40}}
                      onClick={() => {
                        dispatch({
                          type: 'ADD_TO_CART',
                          item: {
                              title: item.title,
                              url: item.url,
                              salePrice: item.salePrice
                          }
                        })
                      }}
                  >
                      Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
          }
      </Grid>   
    </Box>
    </>
  )
}

export default ProductList