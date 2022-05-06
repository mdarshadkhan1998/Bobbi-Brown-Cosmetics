
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../components/Home'
import Navbar from '../components/Navbar';
import ScrollToTop from "react-scroll-to-top";
import styled from 'styled-components';
import Footer from '../components/Footer/Footer';
import { AddtoCart } from '../components/AddtoCart';

const MainRoutesStyling = styled.div`

`;

export const MainRoutes = () => {


  return (
    <div>
      <MainRoutesStyling>
        <ScrollToTop smooth style={{ backgroundColor: "grey", borderRadius: "52%", fontSize: "20px", fontWeight: "700", color: "white" }} />
        <Navbar />

        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/addtocart" element={<AddtoCart/>}/>
        </Routes>
        
        <Footer/>
      </MainRoutesStyling>
    </div>
  )
}
