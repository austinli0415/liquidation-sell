import './App.css';
import Home from "./Modules/Pages/Home";
import SignIn from "./Modules/Pages/SignIn";
import SignUp from "./Modules/Pages/SignUp";
import NotFound from "./Modules/Pages/NotFound";
import ShoppingCart from './Modules/Pages/ShoppingCart';
import ProductList from './Modules/Pages/ProductList';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { auth } from "./Modules/Components/Firebase";
import { useEffect } from "react";
import { useStateValue } from './Modules/Components/StateProvider';

function App() {
  const [, dispatch] = useStateValue();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser){
        console.log("user is ", authUser);
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
    });

    return () => {
      unsubscribe();
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="sign-in" element={<SignIn />}></Route>
        <Route path="sign-up" element={<SignUp />}></Route>
        <Route path="shopping-cart" element={<ShoppingCart />}></Route>
        <Route path="product-list" element={<ProductList />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
