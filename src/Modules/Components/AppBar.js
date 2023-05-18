import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';      
import { useStateValue } from './StateProvider';
import { auth } from './Firebase';
import MenuBar from './MenuBar';

export default function ButtonAppBar() {
  const navigate = useNavigate()
  const [{ cart, user }] = useStateValue();
  const [, dispatch] = useStateValue();

  const login = () =>{
    if(user){
      auth.signOut();
      dispatch({
        type: 'REMOVE_ALL_FROM_CART',
      })
    }else{
      navigate("/sign-in");
    }
  }
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Box display='flex' flexGrow={1}>
            <MenuBar></MenuBar>
            <Button
              color="inherit"
              onClick={() => navigate("/")}
              marginLeft="1"
            >
              <Typography variant='h5' ml={2} sx={{textTransform: 'capitalize'}}>Liquidation Sell</Typography>
            </Button>
          </Box>
          <IconButton
            color="inherit"
            onClick={() => navigate("/shopping-cart")}
          >
            <Typography mr={0.5}>{cart.length}</Typography>
            <ShoppingCartIcon></ShoppingCartIcon>
          </IconButton>
          <Button color="inherit" onClick={login} sx={{textTransform: 'capitalize', fontSize: 16}}>
            {user? (
                       
              <Box sx={{ml: 2, mr: 2, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Typography mt={0.5} sx={{fontSize: 13}}>
                  {user? `Hello, ${user?.email.substring(0, user?.email.indexOf("@"))}` : 'Hello'}
                </Typography>
                <Typography>
                  Sign Out
                </Typography>
              </Box >
            ) : (
              <Box sx={{ml: 2, mr: 2, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Typography mt={0.5} sx={{fontSize: 13}}>
                    Hello
                </Typography>
                <Typography>
                  Sign In
                </Typography>
              </Box >
            )
            }
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}