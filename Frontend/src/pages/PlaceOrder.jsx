import React, { useContext, useEffect, useState } from 'react'
import { Globalstate } from '../context/GlobalContext'
import axios from 'axios';
import {useNavigate} from "react-router-dom"
const PlaceOrder = () => {
  const navigate=useNavigate();
  const{cartValue,cartItems,foodItems,url,token}=useContext(Globalstate);
  const[userCart,setUserCart]=useState([]);
 
  const[address,setAddress]=useState({
      firstname:"",
      lastname:"",
      email:"",
      street:"",
      city:"",
      state:"",
      zipcode:"",
      country:"",
      phone:""
    }
  )

  const handleChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setAddress(prev=>({...prev,[name]:value}));
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const amount=cartValue()+2;
    try{
        const response=await axios.post(url+"api/order/place",{items:userCart,address,amount},{headers:{token}})
      if(response.data.success){
        setAddress({
          firstname:"",
          lastname:"",
          email:"",
          street:"",
          city:"",
          zipcode:"",
          country:"",
          phone:""
        })
        console.log(response.data.message);
        window.location.reload();
      }else{
        throw new Error("Cannot place order")
      }
    }catch(err){
      console.log(err.message||"Something went wrong")
    }
  }

 

  useEffect(()=>{
    function fetchCartData(){
      const cartFoods=[];
      foodItems.map((item)=>{
        if(cartItems[item._id]>0){
          cartFoods.push({[item._id]:cartItems[item._id]})
        }
        });
        console.log(cartFoods);
      setUserCart(cartFoods); 
    }
    fetchCartData();
  },[])

  return (
    <div className='my-4 min-h-[48vh] flex flex-col sm:flex-row sm:justify-between gap-10'> 
      <div className='sm:w-[60%]'>
        <h1 className='mb-5 font-bold text-2xl'>Delivery Information</h1>
        <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-3 text-sm w-full'>
          <input required type="text" name="firstname" value={address.firstname} placeholder='First Name'  onChange={handleChange} className=' border-gray-500 border-[1.5px] outline-tomato py-2 px-4 rounded-sm'/>
          <input required type="text" name="lastname" value={address.lastname}  placeholder='Last Name'  onChange={handleChange} className=' border-gray-500 border-[1.5px] outline-tomato py-2 px-4 rounded-sm'/>
          <input required type="text" name="email" value={address.email}  placeholder='Email'  onChange={handleChange} className=' border-gray-500 border-[1.5px] outline-tomato py-2 px-4 rounded-sm col-span-2'/>
          <input required type="text" name="street" value={address.street}  placeholder='Street' onChange={handleChange} className=' border-gray-500 border-[1.5px] outline-tomato py-2 px-4 rounded-sm col-span-2'/>
          <input required type="text" name="city" value={address.city}  placeholder='City'  onChange={handleChange} className=' border-gray-500 border-[1.5px] outline-tomato py-2 px-4 rounded-sm'/>
          <input required type="text" name="state" value={address.state}  placeholder='State'  onChange={handleChange} className=' border-gray-500 border-[1.5px] outline-tomato py-2 px-4 rounded-sm'/>
          <input required type="text" name="zipcode" value={address.zipcode}  placeholder='Zip code' onChange={handleChange} className=' border-gray-500 border-[1.5px] outline-tomato py-2 px-4 rounded-sm'/>
          <input required type="text" name="country"  value={address.country} placeholder='Country' onChange={handleChange} className=' border-gray-500 border-[1.5px] outline-tomato py-2 px-4 rounded-sm'/>
          <input required type="text" name="phone" value={address.phone}  placeholder='Phone number'  onChange={handleChange} className=' border-gray-500 border-[1.5px] outline-tomato py-2 px-4 rounded-sm col-span-2'/>
          <button type="submit" className='bg-orange-500 rounded-sm py-1 text-center text-white my-[2%] w-full text-[max(10px,1.15vw)] font-semibold' >PLACE ORDER</button>
        </form>
      </div>
      <div className='w-[50%] sm:w-[min(30vw,300px)]'>
          <h2 className='font-bold text-lg'>Cart Totals</h2>
          <div className='flex justify-between border-b-[1.5px] border-gray-400 my-[2%] w-full '>
            <p>Sub total</p>
            <p>${cartValue()}</p>
          </div>
          <div  className='flex justify-between border-b-[1.5px] border-gray-400 my-[2%] w-full'>
            <p>Delivery Fee</p>
            <p>$2</p>
          </div>
          <div  className='flex justify-between border-b-[1.5px] border-gray-400 my-[2%] w-full'>
            <p className='font-semibold text-[#121212]'>Total</p>
            <p>${cartValue()+2}</p>
          </div>
        </div>
    </div>
  )
}

export default PlaceOrder