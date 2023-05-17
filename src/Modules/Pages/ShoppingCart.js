import React from 'react'
import AppBar from '../Components/AppBar'
import { useStateValue } from '../Components/StateProvider';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from '../Components/reducer';

function ShoppingCart() {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <>
      <AppBar />
      <Box align="center" mt={4}>
        <Typography variant="h3">
          Shopping Cart
        </Typography>
      </Box>
      {cart?.length === 0 ?(
        <Typography variant='h6' margin={4}>
          You have no items in your cart. 
        </Typography>
      ):
      (
      <Box sx={{display: "flex", flexDirection: "row"}}>
          <Box padding={5} flexGrow={1} maxWidth={"75%"}>
            <Grid container spacing={3}>
              {cart.map((item) => (
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
                        <Button 
                            variant="contained" 
                            sx={{width:"80%", height:40}}
                            onClick={() => {
                              dispatch({
                                type: 'REMOVE_FROM_CART',
                                item: {
                                    title: item.title,
                                    url: item.url,
                                }
                              })
                            }}
                        >
                            Remove from Cart
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                ))
                }
            </Grid>   
        </Box>
        <Container
          sx={{backgroundColor: "#f3f3f3", 
                width: "30%",
                height: "30%",
                margin: 5, 
                display: 'flex', 
                flexDirection: 'column',
                borderRadius: 1.5,
                border: 1,
                padding: 3
          }}>
          <CurrencyFormat 
            value={getCartTotal(cart)} 
            displayType={'text'} 
            thousandSeparator={true} 
            prefix={'$'} 
            renderText={value => 
              <>
              <Typography variant='h6' mb={2.5}>
                Subtotal ({cart.length} items): {value}
              </Typography>
              <Button variant="contained" sx={{width: '100%'}}>
                Process to Checkout
              </Button>
              </>
            }/>
        </Container>
      </Box>
      )}
    </>
  )
}

export default ShoppingCart