import React, { useContext, useState } from 'react'
import { assets } from '../assets/frontend_assets/assets'
import { Globalstate } from '../context/GlobalContext';
const FoodItem = (props) => {
    
    const{addToCart,removeFromCart,cartItems,url}=useContext(Globalstate)
  return (
    <div className='rounded-[15px] shadow-md w-full food-item '>
        <div className='relative'>
            <img src={`${url}images/${props.image}`} alt="food image" className='w-full food-image'/>
            {!cartItems[props.id]||cartItems[props.id]==0?
            (<img src={assets.add_icon_white} alt="" className='w-6 h-6 sm:h-8 sm:w-8 absolute bottom-2 right-2 cursor-pointer' onClick={()=>addToCart(props.id)}/>)
            :
            (<div className='flex gap-2 absolute bottom-2 right-2 bg-white p-1 rounded-2xl items-center'>
                <img src={assets.remove_icon_red} alt="remove item"  className='w-4 h-4 sm:w-6 sm:h-6 cursor-pointer' onClick={()=>removeFromCart(props.id)}/>
                <p className='text-xs'>{cartItems[props.id]}</p>
                <img src={assets.add_icon_green} alt="add item" className='w-4 h-4 sm:w-6 sm:h-6 cursor-pointer' onClick={()=>addToCart(props.id)}/>
            </div>)
            }
        </div>
        <div className='mx-3 mt-4 mb-2'>
            <div className='flex flex-col items-start sm:flex-row justify-between sm:items-center gap-1'>
                <p className='font-semibold text-[max(1.2vw,12px)]'>{props.name}</p>
                <img src={assets.rating_starts} alt="" className='w-[max(6vw,50px)]'/>
            </div>
            <p className='text-[#676767] leading-4 text-[max(1vw,10px)] my-[2.5%]'>{props.description}</p>
            <p className='price font-bold text-[max(1.3vw,15px)]'>${props.price}</p>
        </div>
    </div>
  )
}

export default FoodItem