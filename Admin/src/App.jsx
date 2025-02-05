import React from 'react'
import SideBar from './components/SideBar'
import NavBar from './components/NavBar'
import AddFood from "./pages/AddFood"
import { ToastContainer } from 'react-toastify'
import {Routes,Route} from "react-router-dom"
import ListFood from './pages/ListFood'

const App = () => {
  return (
    <div className='min-h-screen'>
      <ToastContainer />
      <NavBar />
      <div className='flex  gap-[5%]'>
        <SideBar />
        <Routes>
          <Route path='/add' element={<AddFood />}/>
          <Route path='/list' element={<ListFood />}/>
        </Routes>
      </div>
      

    </div>
  )
}

export default App