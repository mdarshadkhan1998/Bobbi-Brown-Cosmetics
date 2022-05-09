
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../components/Home'
import Navbar from '../components/Navbar';
import ScrollToTop from "react-scroll-to-top";
import styled from 'styled-components';
import Footer from '../components/Footer/Footer';
import { AddtoCart } from '../components/AddtoCart';
import { Checkout } from '../components/Checkout';
import NewProductMapping from '../components/All Pages/NewProductMapping';
import ShopAllBestsellers from '../components/All Pages/ShopAllBestsellers';
import FaceProductMapping from '../components/All Pages/FaceProductMapping';
import SkincareMapping from '../components/All Pages/SkincareMapping';
import MakeupMini from '../components/All Pages/MakeupMini';
import { Login } from '../components/Authentication/Login'
import DiscoverDataMapping from '../components/All Pages/Discover/DiscoverDataMapping';
import { Signup } from '../components/Authentication/Signup';
import ProductDataMapping from '../components/All Pages/Product/ProductDataMapping';
import FixedNavbar from '../Navbar/NavbarPart/FixedNavbar'
import SubMainFixedNavbar from '../Navbar/NavbarPart/SubMainFixedNavbar'
import ToggleSubMainFixedNavbar from '../Navbar/NavbarPart/ToggleSubMainFixedNavbar'

const MainRoutesStyling = styled.div`

`;

export const MainRoutes = () => {


  return (
    <div>
      <MainRoutesStyling>
        <ScrollToTop smooth style={{ backgroundColor: "grey", borderRadius: "52%", fontSize: "20px", fontWeight: "700", color: "white" }} />
        <Navbar />

        <div style={{marginTop:"115px"}}>
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/addtocart" element={<AddtoCart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/newproductmapping" element={<NewProductMapping />} />
            <Route path="/shopallbestsellers" element={<ShopAllBestsellers />} />
            <Route path="/faceproductmapping" element={<FaceProductMapping />} />
            <Route path="/makeupmini" element={<MakeupMini />} />
            <Route path="/skincaremapping" element={<SkincareMapping />} />
            <Route path="/discoverdatamapping" element={<DiscoverDataMapping />} />
            <Route path="/productdatamapping" element={<ProductDataMapping />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
        <br/>
        <Footer />
      </MainRoutesStyling>
    </div>
  )
}
