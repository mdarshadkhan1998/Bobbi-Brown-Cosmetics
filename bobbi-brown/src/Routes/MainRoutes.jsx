
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../components/Home'
import Navbar from '../components/Navbar';
import ScrollToTop from "react-scroll-to-top";
import styled from 'styled-components';
import Footer from '../components/Footer/Footer';

export const MainRoutes = () => {
  const MainRoutesStyling = styled.div`

  `;

  return (
    <div>
      <MainRoutesStyling>
        <ScrollToTop smooth style={{ backgroundColor: "grey", borderRadius: "52%", fontSize: "20px", fontWeight: "700", color: "white" }} />
        <Navbar />

        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
        
        <Footer/>
      </MainRoutesStyling>
    </div>
  )
}
