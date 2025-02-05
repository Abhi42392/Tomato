import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
const Footer = () => {
  return (
    <div className='flex justify-between bg-black text-white p-[max(3%,20px)] gap-2 '>
        <div className='flex flex-col gap-2'>
            <img src={assets.logo} alt="" className='w-[max(11vw,110px)]' />
            <p className='w-[40vw] text-[max(1vw,10px)]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptatum, 
                odit dolorum repudiandae libero magnam explicabo eos unde reprehenderit hic
                 voluptatem consectetur veritatis. Beatae consectetur ad minus nemo quasi corporis?</p>
            <div className='flex gap-2'>
                <img src={assets.facebook_icon} alt="facebook" className='w-[min(15%,40px)]'/>
                <img src={assets.linkedin_icon} alt="linkedin" className='w-[min(15%,40px)]'/>
                <img src={assets.twitter_icon} alt="twitter" className='w-[min(15%,40px)]'/>
            </div>
        </div>
        
        <div>
            <p className='font-bold text-sm mb-[2%] sm:text-lg lg:text-2xl'>COMPANY</p>
            <p className='text-[max(1vw,10px)]'>Home</p>
            <p className='text-[max(1vw,10px)]'>About us</p>
            <p className='text-[max(1vw,10px)]'>Delivery</p>
            <p className='text-[max(1vw,10px)]'>Privacy policy</p>
        </div>
        <div>
            <p className='font-bold text-sm mb-[2%] sm:text-lg lg:text-2xl'>GET IN TOUCH</p>
            <p className='text-[max(1vw,10px)]'>+91 8320943903</p>
            <p className='text-[max(1vw,10px)]'>tomatoservices@gmail.com</p>
        </div>
        
    </div>
  )
}

export default Footer