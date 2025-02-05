import React from 'react'
import Menu from './Menu'
const Header = () => {
  return (
    <div className='header-top rounded-xl px-[5vw] pt-[70px] pb-[30px] sm:pt-[20vh] sm:pb-[8vh]'>
        <div className='header-content'>
            <h1 className='text-white font-semibold text-[1.85rem] leading-10 sm:text-[3.5rem] sm:leading-[4.5rem]'>Order your <br /> favourite food here</h1>
            <p className='text-gray-200 font-normal py-5 leading-5'>Welcome to Tomato, your ultimate destination for quick and reliable food delivery!
                 Enjoy a wide variety of cuisines delivered straight to your door, hot and fresh. Our easy-to-use platform makes ordering a breeze,
                  ensuring a seamless experience every time. 
                Satisfy your cravings in just a few clicks and have your favorite meals delivered right to you—hassle-free and fast!</p>
            <button className='rounded-3xl bg-white text-gray-500 text-sm px-8 py-2 active:bg-black active:text-white'>Menu</button>
        </div>
    </div>
  )
}

export default Header