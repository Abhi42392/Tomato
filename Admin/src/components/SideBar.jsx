import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
  return (
        <div className='ml-[3.5%] w-[max(120px,18vw)] min-h-screen  border-r-1 py-[28px]  sm:text-base'>
            <NavLink to={"/add"} className='flex  px-2 py-1 gap-2 sm:gap-4 border border-gray-500 md:py-3 md:px-4 items-center focus:bg-[#fff0ed] focus:border-[tomato] '>
                <img src={assets.add_icon} alt="add food" className='w-[max(20px,2vw)]'/>
                <p className='text-xs sm:text-base'>Add Items</p>
            </NavLink>
            <NavLink to={"/list"} className='flex gap-2 sm:gap-4 my-[10%] px-2 py-1 w-full  border border-gray-500 md:py-3 md:px-4 items-center focus:bg-[#fff0ed] focus:border-[tomato]'>
                <img src={assets.order_icon} alt="food list" className='w-[max(20px,2vw)]' />
                <p className='text-xs sm:text-base'>List Items</p>
            </NavLink>
           
        </div>
  )
}

export default SideBar