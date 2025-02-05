import React, { useContext, useState } from 'react'
import { Globalstate } from '../context/GlobalContext'
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const{cartItems,removeFromCart,foodItems,cartValue,url}=useContext(Globalstate);
  const navigate=useNavigate();

  return (
    <div className='my-4 min-h-[48vh]'>
      <div className='grid grid-cols-6 w-full  border-b-[1px] border-gray-500 pb-2 text-xs sm:text-sm '>
        <p >Items</p>
        <p className='m-auto'>Title</p>
        <p className='m-auto'>Price</p>
        <p className='m-auto'>Quantity</p>
        <p className='m-auto'>Total</p>
        <p className='m-auto'>Remove</p>
      </div>
      {
        foodItems.map((item)=>{
          
          if(cartItems[item._id]>0){
            return(<div className='grid grid-cols-6 w-full  border-b-[1px] border-gray-500 pb-2 items-center justify-center my-2 text-xs sm:text-sm '>
              <img className='w-[min(10vw,50px)]' src={url+"images/"+item.image} />
              <p className='m-auto'>{item.name}</p>
              <p className='m-auto'>${item.price}</p>
              <p className='m-auto'>{cartItems[item._id]}</p>
              <p className='m-auto'>${item.price*cartItems[item._id]}</p>
              <p className='m-auto cursor-pointer' onClick={()=>removeFromCart(item._id)}>x</p>
            </div>)
          }
          
        })
      }
      <div className='flex flex-col-reverse gap-10 sm:flex-row w-full justify-between mt-16 mb-8'>
        <div className='min-w-[40%]'>
          <h2 className='font-bold text-lg'>Cart Totals</h2>
          <div className='flex justify-between border-b-[1.5px] border-gray-400 my-3 w-full '>
            <p>Sub total</p>
            <p>${cartValue()}</p>
          </div>
          <div  className='flex justify-between border-b-[1.5px] border-gray-400 my-3 w-full'>
            <p>Delivery Fee</p>
            <p>${2}</p>
          </div>
          <div  className='flex justify-between border-b-[1.5px] border-gray-400 my-3 w-full'>
            <p className='font-semibold text-[#121212]'>Total</p>
            <p>${cartValue()+2}</p>
          </div>
          <button className='bg-orange-500 rounded-sm py-1 text-center text-white my-3 w-[50%] text-[max(10px,1.15vw)] font-semibold' onClick={()=>{navigate('/order')}}>PROCEED TO CHECKOUT</button>
        </div>
        <div >
          <div className='flex '>
            <input type="text" placeholder='Apply promo code' className='text-sm  bg-gray-200 border-none outline-none  px-4 py-2 rounded-l-md w-[max(150px,15vw)]' />
            <button className='bg-black text-white py-2 px-4 rounded-r-md w-[max(80px,8vw)] active:bg-orange-500 active:text-white'>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart