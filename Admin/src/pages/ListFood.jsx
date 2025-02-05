import React, { useEffect, useState } from 'react'
import { url } from '../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';
const ListFood = () => {
  const[foodList,setFoodList]=useState([]);
  const handleRemove=async(id)=>{
    console.log(id);
    
    try{
      const response=await axios.post(`${url}/api/food/remove`,{id});
      console.log(response.data);
      fetchData();
      if(response.data.success){
        toast.success("Item removed");
       
      }else{
        throw new Error("Can't remove item");
      }
    }catch(err){
      toast.error(err.message||"Something went wrong");
    }
    
  }
  const fetchData=async()=>{
    try{
      const response=await axios.get(`${url}/api/food/list`);
      if(response.data.success){
        setFoodList(response.data.message);
      }else{
        throw new Error("Cannot fetch data");
      }
    }catch(err){
      console.log(err.message||"Something went wrong");
    }
  }
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <div className='my-5'>
      <div className='w-[70vw]'>
        <p className='text-[min(4vw,20px)]'>All Food list</p>
      <div className='grid grid-cols-[1fr_2fr_1.5fr_1fr_1fr]  border px-2 sm:px-4 py-1 font-medium mt-2 text-[2.75vw] sm:text-base'>
        <p>Image</p>
        <p className='m-auto sm:m-0'>Name</p>
        <p>Category</p>
        <p>Price</p>
        <p className='m-auto'>Action</p>
      </div>
      {foodList.map((item)=>(
        <div className='grid grid-cols-[1fr_2fr_1.5fr_1fr_1fr]  border-t-[0px]  border-r-[1px] border-b-[1px] border-l-[1px] py-4 px-2 sm:p-4 items-center text-xs sm:text-sm'>
          <img src={`${url}/images/${item.image}`} alt="food image" className='w-[max(5vw,40px)]' />
          <p className='m-auto sm:m-0'>{item.name}</p>
          <p>{item.category}</p>
          <p>${item.price}</p>
          <p className='m-auto cursor-pointer' onClick={()=>{handleRemove(item._id)}}>x</p>
        </div>
      ),)}
      </div>
      
    </div>
  )
}

export default ListFood;