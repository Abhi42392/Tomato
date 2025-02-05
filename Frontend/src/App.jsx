import React, { useContext, useState } from 'react'
import NavBar from './components/NavBar';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import PlaceOrder from './pages/PlaceOrder';
import Footer from './components/Footer';
import LoginPopup from './components/LoginPopup';
import { Globalstate } from './context/GlobalContext';
import Orders from './pages/Orders';
const App = () => {
  const{showLogin,setShowLogin}=useContext(Globalstate);
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin} />:<></>}
    <div className='px-[10vw] '>
      <NavBar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path={'/'} element={<Home/>} />
          <Route path={'/cart'} element={<Cart/>} />
          <Route path={'/order'} element={<PlaceOrder/>} />
          <Route path={'/user-orders'} element={<Orders/>} />
        </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App;