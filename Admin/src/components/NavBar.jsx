import React from 'react'
import {assets} from "../assets/assets"
const NavBar = () => {
  return (
    <div className='h-[5vw] border-b-1'>
        <div className='flex justify-between items-center mx-[3.5%] my-[1.5%]'>
            <img src={assets.logo} alt="logo" className='w-[10vw]' />
            <img src={assets.profile_image} alt="profile image" className='w-[3vw]'/>
        </div>
    </div>
  )
}

export default NavBar