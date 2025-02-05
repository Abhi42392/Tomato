import React, { useContext, useState } from 'react'
import {assets} from '../assets/frontend_assets/assets';
import {useNavigate} from 'react-router-dom';
import { Globalstate } from '../context/GlobalContext';
const NavBar = ({setShowLogin}) => {
  const navigate=useNavigate();
  const[menu,setMenu]=useState("home");

  const{cartValue,token,setToken}=useContext(Globalstate);
  const[showProfile,setShowProfile]=useState(false);

  const logOut=()=>{
    localStorage.removeItem("token")
    setToken("")
    navigate("/")
  }

 
  return (
    <div className='flex justify-between items-center my-10  relative'>
        <img src={assets.logo} alt="logo" className='w-[max(10vw,120px)] cursor-pointer' onClick={()=>{
          setMenu("home");
          navigate('/')}} />

        <div className='hidden md:block md:flex gap-3  '>
            <p className='hover:border-b-2 hover:border-black cursor-pointer' style={menu==="home"?{borderBottom:"2px solid black"}:{}} onClick={()=>{setMenu("home")
              navigate("/")
            }}>home</p>
            <p className='hover:border-b-2 hover:border-black cursor-pointer' style={menu==="menu"?{borderBottom:"2px solid black"}:{}} onClick={()=>{setMenu("menu")}}>menu</p>
            <p className='hover:border-b-2 hover:border-black cursor-pointer' style={menu==="mobile app"?{borderBottom:"2px solid black"}:{}} onClick={()=>{setMenu("mobile app")}}>mobile app</p>
            <p className='hover:border-b-2 hover:border-black cursor-pointer'style={menu==="contact us"?{borderBottom:"2px solid black"}:{}} onClick={()=>{setMenu("contact us")}}>contact us</p>
        </div>
        <div className='flex gap-3 md:gap-6 items-center'>
            <img src={assets.search_icon} alt="search" className='w-[min(7vw,20px)] cursor-pointer'/>
            <div className='relative'><img src={assets.basket_icon} alt="cart" className='w-[min(7vw,20px)] cursor-pointer' onClick={()=>{navigate('/cart')}}/><div className='dot' style={cartValue()==0?{display:"none"}:{display:'block'}} ></div></div>
            {!token?<button className='border-2 border-orange-500 rounded-3xl text-xs px-4 py-1 sm:text-sm text-gray-500 hover:bg-orange-500 hover:text-white' onClick={()=>{setShowLogin(prev=>!prev)}}>sign in</button>:
            <div onClick={()=>{setShowProfile(toggle=>!toggle)}}>
              <img src={assets.profile_icon} alt="" className='h-6' />
              <ul className=' bg-[#fff2ef] absolute right-0 m-2 py-3 px-6 rounded-lg border border-[tomato] outline-2 outline-white' style={showProfile?{"display":"block"}:{"display":"none"}}>
                <li className='flex space-x-2 my-2 items-center cursor-pointer' onClick={()=>{navigate("/user-orders")}}><img src={assets.bag_icon} alt="orders" className='h-5' /><p className='text-sm hover:text-[tomato]'>Orders</p></li>
                <div className='bg-slate-500 h-[0.5px]'></div>
                <li className='flex space-x-2 my-2 items-center cursor-pointer' onClick={logOut}><img src={assets.logout_icon} alt="log out" className='h-5'  /><p className='text-sm hover:text-[tomato]'>Log out</p></li>
              </ul>
            </div>
          }
        </div>

    </div>
  )
}

export default NavBar