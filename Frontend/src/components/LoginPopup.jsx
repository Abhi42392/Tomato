import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/frontend_assets/assets';
import axios from "axios";
import { Globalstate } from '../context/GlobalContext';

const LoginPopup = () => {
    const[currState,setCurrState]=useState("Login");
    const{url,setToken,setShowLogin}=useContext(Globalstate)
    const[data,setData]=useState({
        name:"",
        email:"",
        password:""
    });
    const[error,setError]=useState("");
    const onChangeHandler=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setData(data=>({...data,[name]:value}));
    }
    
    const onLogin=async(e)=>{
        e.preventDefault();
        let newUrl=url;
        if(currState==="Login"){
            newUrl+="api/user/login";
        }else{
            newUrl+="api/user/register";
        }
        const response=await axios.post(newUrl,data);
        if(response.data.success){
            setToken(response.data.token);
            localStorage.setItem("token",response.data.token);
            setShowLogin(false);
        }else{
            setError(response.data.message)
        }
    }

  return (
    <div className='w-screen h-screen bg-[#00000090] absolute top-0 flex items-center justify-center'>
        <div className='text-[#808080] bg-white p-8 rounded-lg w-[max(23vw,300px)]'>
            <div className='flex justify-between items-center'>
                <h2 className='font-bold text-black text-xl'>{currState}</h2>
                <img src={assets.cross_icon} alt="exit" className='w-3 h-3 hover:scale-125' onClick={()=>{setShowLogin(false)}}/>
            </div>
            <form onSubmit={onLogin}>
                {currState==="Sign Up"?<><input name='name' type="text" placeholder='Your name' className='block border border-gray-400 rounded-sm py-2 px-4 my-4 w-full' onChange={onChangeHandler} value={data.name}/></>:<></>}
                <input type="text" placeholder='Your email' name='email' className='block border border-gray-400 rounded-sm py-2 px-4 my-4 w-full' onChange={onChangeHandler} value={data.email}/>
                <input type="password" name="password" placeholder='Your password' className='block border border-gray-400 rounded-sm py-2 px-4 my-4 w-full' onChange={onChangeHandler} value={data.password}/>
                {error?<p className='text-sm text-red-600 text-center m-1'>{error}</p>:<></>}
                <button type="submit" className='block w-full bg-orange-500 text-center text-white rounded-sm py-1' >{currState==="Login"?<>Login</>:<>Create account</>}</button>
                <input type="checkbox" className='block mt-4' />
                <label htmlFor='terms'>By continuing, I agree to the terms of use & privacy policy.</label>
                <p>{currState==="Login"?<>Create a new account?</>:<>Already have an account?</>}<span className='text-orange-400 cursor-pointer' onClick={()=>{setCurrState(prev=>prev==="Login"?"Sign Up":"Login")}}>Click here</span></p>
            </form>
        </div>
        
    </div>
  )
}

export default LoginPopup