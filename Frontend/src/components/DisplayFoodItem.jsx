import React,{useContext} from 'react'

import FoodItem from './FoodItem'
import { Globalstate } from '../context/GlobalContext'
const DisplayFoodItem = () => {
  const{foodItems,category}=useContext(Globalstate);
    const createFoodItem=(props)=>{
        return <FoodItem id={props._id} name={props.name} price={props.price} image={props.image} description={props.description} category={props.category} />
    }
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10'>
        {foodItems.filter((item)=>{
          if(category==="All"){
            return true;
          }else{
            return item.category===category
          }
          }).map(createFoodItem)}
    </div>
  )
}

export default DisplayFoodItem