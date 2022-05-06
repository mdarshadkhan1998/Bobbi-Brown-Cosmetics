
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AddtoCart } from '../components/AddtoCart'
import { Home } from '../components/Home'


export const MainRoutes = () => {


  return (
    <div>
        
  
   <Routes>
  <Route path="/*" element={<Home/>} />
  <Route path="addtocart" element={<AddtoCart/>}/>
   </Routes>
    </div>
  )
}
