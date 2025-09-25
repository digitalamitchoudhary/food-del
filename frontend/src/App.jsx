import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Cart from './pages/Cart/Cart'

import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import { useContext, useState } from 'react'
import LoginPopup from './components/LoginPopup/LoginPopup'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'
import { StoreContext } from '../../frontend/src/context/StoreContext';

const App = () => {
    const {setShowLogin,showLogin}=useContext(StoreContext);
  
   return (
  
  <>
  {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar/>
      

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} />    
        <Route path='/verify' element={<Verify/>} />    
        <Route path='/myorders' element={<MyOrders/>} />    


      </Routes>

    </div>
  <Footer/>
</>
)
}

export default App
