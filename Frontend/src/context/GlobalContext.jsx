import React,{ createContext, useEffect, useState} from 'react'
import axios from 'axios'
export const Globalstate=createContext();
const GlobalContext = ({children}) => {
    const[cartItems,setCartItems]=useState({});
    const[orders,setOrders]=useState([]);
    const[foodItems,setFoodItems]=useState([]);//take from database and it doesnot change this value is loaded when data is requested from database
    const[category,setCategory]=useState("All");
    const[showLogin,setShowLogin]=useState(false);
    const[token,setToken]=useState(null);
    const url="https://tomato-qpby.onrender.com/"
    const addToCart=async(itemId)=>{
        
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
        try{
            if(token){
                const response= await axios.post(url+"api/cart/add",{itemId},{headers:{token}})
                console.log(response.data.message);
                
            }else{
                throw new Error("No token");
            }
        }catch(err){
            console.log(err.message||"Something went wrong");
        }
        
    };
    const removeFromCart=async(itemId)=>{
        
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        try{
            if(token){
                const response= await axios.post(url+"api/cart/remove",{itemId},{headers:{token}})
                console.log(response.data.message);
                
            }else{
                throw new Error("No token");
            }
        }catch(err){
            console.log(err.message||"Something went wrong");
        }
    }

    const cartValue=()=>{
        var res=0;
        foodItems.map((item)=>{
            if(cartItems[item._id]>0){
                res+=cartItems[item._id]*item.price;
            }
        })
        return res;

    }

    const fetchFoodItems=async()=>{
        try{
            const response=await axios.get(`${url}api/food/list`);
           setFoodItems(response.data.message);
        }catch(err){
            console.log(err);
        }
    }
    const fetchCartItems=async(ctoken)=>{
        try{
            if(ctoken){
                const response= await axios.post(url+"api/cart/list",{},{headers:{"token":ctoken}})
                setCartItems(response.data.message)
            }else{
                throw new Error("User does not authenticated");
            }
            
        }catch(err){
            console.log(err.message||"Something went wrong")
        }
    }
    
    useEffect(()=>{
        async function loadData(){
            await fetchFoodItems();
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"));
                await fetchCartItems(localStorage.getItem("token"));
            }
        }
        loadData();
    },[])
    
  return(
    <Globalstate.Provider value={{cartItems,orders,setOrders,addToCart,removeFromCart,foodItems,category,setCategory,cartValue,showLogin,setShowLogin,url,setToken,token}}>
        {children}
    </Globalstate.Provider>
  )
}

export default GlobalContext;
