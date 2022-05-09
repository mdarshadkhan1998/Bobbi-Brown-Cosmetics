
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
import { Verify } from '../components/UserAuthentication/Verify'
import DiscoverDataMapping from '../components/All Pages/Discover/DiscoverDataMapping';
import { Signup } from '../components/UserAuthentication/Signup';
import ProductDataMapping from '../components/All Pages/Product/ProductDataMapping';
import MothersMapping from '../components/All Pages/MothersMapping';
import SingleProductPage from '../components/All Pages/SingleProductPage/SingleProductPage';
import VirtualPage from "../components/All Pages/VirtualPage"
import Offers from '../components/All Pages/Offers/Offers';
import { Location } from '../components/UserAuthentication/Location';

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
            <Route path= "/mothersmapping" element={<MothersMapping/>}/>
            <Route path="/singleproductpage" element={<SingleProductPage/>}/>
            <Route path="/virtual" element={<VirtualPage/>}/>
            <Route path="/offers" element={<Offers/>}/>
            <Route path="/verify" element={<Verify />} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/location" element={<Location/>}/>
          </Routes>
        </div>
        <br/>
        <Footer />
      </MainRoutesStyling>
    </div>
  )
}
