import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './Components/LandingPage';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import CartDisplay from './Components/Cart/CartDisplay';
import ShopNow from './Components/ShopNow';
import ViewCategory from './Components/ViewCategory';
import CategoryShopNow from './Components/CategoryShopNow';
import ShopNewArrivals from './Components/ShopNewArrivals';

const App = () => {
  return (
    <>
    <Router>
          <Routes>  
            <Route path='/signin' element={<Signin/>}></Route>
            <Route path='/cart' element = {<CartDisplay/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/shopnow' element={<ShopNow/>}></Route>
            <Route path='/shopnewarrivals' element={<ShopNewArrivals/>}></Route>
            <Route path='/categoryshopnow' element={<CategoryShopNow/>}></Route>
            <Route path='/viewcategory' element={<ViewCategory/>}></Route>
            <Route path="/" element={<><LandingPage/></>}></Route>
          </Routes>        
      </Router>
    </>
  )
}

export default App
