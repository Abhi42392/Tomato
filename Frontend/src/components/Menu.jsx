import React, { useContext, useState } from 'react'
import {menu_list} from "../assets/frontend_assets/assets"
import { Globalstate } from '../context/GlobalContext';
const Menu = () => {
  const{category,setCategory}=useContext(Globalstate);
  return (
    <div className='my-6'>
        <p className='font-semibold text-[5vw] md:text-2xl'>Explore our menu</p>
        <p className='my-[1.5%] leading-none text-gray-500 text-[2vw] md:text-sm'>choose from a diverse menu feauturing delectable array of dishes. Our mission is to satisfy your
        <br /> cravings and elevate your dining experience, one delicious meal at a time</p>
        <div className='my-[3.5%] flex overflow-x-scroll menu-list gap-[30px] justify-between text-center'>
            {menu_list.map((item,index)=>(
                <div className='flex flex-col gap-[0.35rem] items-center min-w-16' onClick={()=>{setCategory((prev)=>prev===item.menu_name?"All":item.menu_name)}} >
                    <img src={item.menu_image} alt="menu image" className=' cursor-pointer' style={category===item.menu_name?{border:"tomato 4px solid",borderRadius:"50%",padding:"2px"}:{}}/>
                    <p className='text-gray-500 text-xs md:text-base'>{item.menu_name}</p>
                </div>
            ))}
            
        </div>
        <hr className='my-10 border-y-[1.5px] border-gray-300'/>
    </div>
  )
}
export default Menu