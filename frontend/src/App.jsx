import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Cart from './pages/Cart/Cart'

import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import { useState } from 'react'
import LoginPopup from './components/LoginPopup/LoginPopup'

const App = () => {
  const [showLogin, setShowLogin] = useState(false)
  return (
  
  <>
  {showLogin?<LoginPopup/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
      

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} />    

      </Routes>

    </div>
  <Footer/>
</>
)
}

export default App
