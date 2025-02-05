import React from 'react'
import Header from '../components/Header'
import Menu from "../components/Menu";
import DisplayFoodItem from '../components/DisplayFoodItem';

const Home = () => {
  return (
    <div className='my-[20px]'>
      <Header />
      <Menu />
      <DisplayFoodItem />
    </div>
  )
}

export default Home