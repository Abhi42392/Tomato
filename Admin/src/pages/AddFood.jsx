import React, { useEffect, useState } from 'react'
import { assets, url } from '../assets/assets'
import axios from "axios"
import {toast} from "react-toastify"
import { food_list } from '../../../Frontend/src/assets/frontend_assets/assets'
const AddFood = () => {
  const[name,setName]=useState("");
  const[description,setDescription]=useState("");
  const[category,setCategory]=useState("Salad");
  const[price,setPrice]=useState(0);
  const[image,setImage]=useState(false);


  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      const fd= new FormData();
      fd.append("name",name);
      fd.append("description",description);
      fd.append("image",image);
      fd.append("price",price);
      fd.append("category",category);
      const response=await axios.post(`${url}/api/food/add`,fd);
      console.log(response);
      
      if(response.data.success){
        toast.success("Item added");
        setName("");
        setImage(false);
        setPrice(0);
        setDescription("");
      }else{
        throw new Error("Cannot add item");
      }
    }catch(err){
      toast.error(err.message||"Something went wrong");
    }
  }
  
  return (
    <div>
      <div className="my-5 ">
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
              <p className='text-sm sm:text-lg text-gray-500'>Upload image</p>
              <label htmlFor="image" className="block">
                <img src={image?URL.createObjectURL(image):assets.upload_area} alt="upload area" className='my-2 w-[max(12vw,120px)]' />
              </label>
            <input type="file"  id="image" accept='image/*' hidden onChange={(e)=>{setImage(e.target.files[0])}}/>
          </div>
          <div className='mt-6'>
              <p className='text-sm sm:text-lg text-gray-500'>Product name</p>
              <label htmlFor="name" className="block"></label>
              <input type="text"  id="name" onChange={(e)=>{setName(e.target.value)}} value={name}
              
              className='border border-gray-400 mt-1 py-1 px-2 sm:px-4 sm:py-2 text-xs sm:text-sm outline-[tomato] rounded-sm w-[50vw] sm:w-[40vw] md:w-[30vw] lg:w-[25vw]' placeholder='Enter product name'/>
          </div>
          <div className='mt-3' >
              <p className='text-sm sm:text-lg text-gray-500'>Product description</p>
              <label htmlFor="description" className="block"></label>
              <textarea  id="description" onChange={(e)=>{setDescription(e.target.value)}} value={description}
              className='border border-gray-400 mt-2 py-1 px-2 sm:px-4 sm:py-2 text-xs sm:text-sm outline-[tomato] rounded-sm w-[50vw] sm:w-[40vw] md:w-[30vw] lg:w-[25vw]' placeholder='Enter product description'></textarea>
          </div>
          <div className='mt-3 space-x-2 sm:space-x-10 flex'>
            <div>
              <label htmlFor='category'  className='text-sm  text-gray-500 mb-2 block'>Product Category</label>
                <select name="category" id="category" onChange={(e)=>{setCategory(e.target.value)}} defaultValue={category} className=' text-xs sm:text-sm w-[100px] outline px-2 py-1'>
                  <option value="Salad">Salad</option>
                  <option value="Rolls">Rolls</option>
                  <option value="Deserts">Deserts</option>
                  <option value="Sandwich">Sandwich</option>
                  <option value="Cake">Cake</option>
                  <option value="Pure veg">Pure veg</option>
                  <option value="Noodles">Noodles</option>
                  <option value="Pasta">Pasta</option>
                </select>
            </div>
            <div>
              <label htmlFor="price" className='text-sm  text-gray-500 mb-2 block'>Product Price</label>
              <input type="number" id="price" className='text-xs sm:text-sm w-[100px] outline px-2 py-1' placeholder='$0'  onChange={(e)=>{setPrice(e.target.value)}} value={price} />
            </div>
          </div>
          <button type='submit' className='w-[80px] text-sm sm:text-base sm:w-[120px] bg-black text-white font-semibold mt-6 py-2 px-4 active:scale-[0.9]'>ADD</button>
        </form>
      </div>
    </div>
  )
}

export default AddFood