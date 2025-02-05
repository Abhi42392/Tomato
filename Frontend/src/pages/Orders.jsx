import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/frontend_assets/assets'
import axios from 'axios';
import { Globalstate } from '../context/GlobalContext';

const Orders = () => {
    const{url,token,cartItems,foodItems,orders,setOrders}=useContext(Globalstate);
    console.log(cartItems);
    
    useEffect(()=>{
        async function fetchOrders(){
            try{
                const response=await axios.post(url+"api/order/list",{},{headers:{token}});
                if(response.data.success){
                    setOrders(response.data.message);
                    console.log(response.data);
                }else{
                    throw new Error("Problem in retrieving orders")
                }
            }catch(err){
                console.log(err.message||"Something went wrong")
            }
            
        }
        fetchOrders();
    })
  return (
    <div className='my-4 min-h-[48vh] w-full'>
        <div className='flex flex-col space-y-2'>
            {orders.map((item)=>(
                <div className='flex justify-between items-center border-[1px] border-[tomato] px-2 py-1 sm:py-3 sm:px-6 text-xs sm:text-sm space-x-2 '>
                    <img src={assets.parcel_icon} alt="parcel icon" />
                    <div className='flex flex-wrap gap-1 max-w-[20vw] lg:w-[30vw] '>
                    {item.items.map((subItem)=>{
                        let key=Object.keys(subItem)[0];
                        let quantity=subItem[key];
                        let foundFood = foodItems.find((food) => food._id === key);
                        return(<p>{foundFood.name +" x"+`${quantity},`}</p>)
                    })}
                    </div>
                    <p>${item.amount}</p>
                    <p className='hidden sm:block'>Items: {item.items.length}</p>
                    <p>{item.status}</p>
                    <button className='bg-[tomato] text-white px-2 py-1 rounded-lg'>Track order</button>
                </div>
            )
            )}
        </div>
    </div>
  )
}

export default Orders