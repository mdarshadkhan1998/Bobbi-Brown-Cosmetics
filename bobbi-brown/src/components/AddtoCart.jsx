import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { ButtonBase } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removefromcart, changequantity , totalprice } from "../redux/action";

const Flexdiv = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-around;
  margin: auto;
  gap: 50px;
`;

export const AddtoCart = () => {
  
 const arr = useSelector((store)=> store.cart)
   console.log(arr)
  const dispatch = useDispatch()

  const navigate = useNavigate();

  const handlecheckout = () => {
    if (arr.length) {
      navigate("/checkout");
    }
  };

  const handleaddquantity = (product) => {
        
      
       
        // const payload = {
        //   ...product,
        //   quantity: product.quantity + 1,
        //   price: (+product.quantity + 1) * product.price
        // }
        // console.log(product.quantity)
        // dispatch(changequantity(payload))
  }
  const handlesubquantity = (product)=>{
    // const payload = {
    //   ...product,
    //   quantity: product.quantity - 1,
    //   price: Math.floor( product.price/   (+product.quantity - 1))
    // }
    // // console.log(payload)
    // dispatch(changequantity(payload))
  }
  const handleremove = (product) => {
    // console.log(product)
    dispatch(removefromcart(product))
  }
  var all = 0 ;
   for(let i=0;i<arr.length;i++) {
    all += arr[i].price
   }
   useEffect(() => {
    dispatch(totalprice(all))
   })
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <Flexdiv>
        {/* //cart left part */}
        <div style={{ width: "65%" }}>
          <img
            width="800"
            src="https://www.bobbibrowncosmetics.com/media/export/cms/offers/BB_Banner_Loyalty_728x90.jpg"
            alt="Bobbi Brown cart image"
          />
          <div>
            <h2
              style={{ borderBottom: "2px solid black", paddingBottom: "10px" }}
            >
              SHOPPING BAG
            </h2>
            <br />
            <p>Enjoy Free Standard Shipping on any $65+ order.</p>
            <br />
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {" "}
              <h6> PRODUCT </h6>
              <h6> QUANTITY </h6>
              <h6 style={{ paddingLeft: "40px" }}> PRICE </h6>
            </div>
            {/* // map the data here ////////////// */}
            <div>
              <br />
              {arr.map((e) => (
                 <div key={e.key} style={{ display: "flex", justifyContent: "space-between" }}>
                 <img
                   src={e.image}
                   alt="image"
                   style={{ height: "80px", weight: "80px" }}
                 />
                 <div>
                   <p style={{ fontSize: "16px" }}>{e.name}</p>
                   <p style={{ fontSize: "12px" }}>{e.color}</p>
                   Quantity
                   <button onClick ={()=> handleaddquantity(e)}>+</button>
                   {e.quantity}
                   <button onClick ={()=> handlesubquantity(e)}>-</button>
                   <button
                     onClick={() => handleremove(e)}
                     style={{ backgroundColor: "lightgrey", border: "transparent" }}
                   >
                     Remove
                   </button>
                   <br />
                   <br />
                 </div>
                 <p>${e.price}</p>
               </div>
              ))}
            </div>
          </div>
        </div>

        {/* // cart right part */}
        <div style={{ width: "30%", backgroundColor: "lightyellow" }}>
          <div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <br />
              <Button
                style={{
                  backgroundColor: "white",
                  color: "black",
                  textAlign: "center",
                }}
              >
                <img src="https://www.bobbibrowncosmetics.com/media/export/cms/icons/paypal_button.svg" />
              </Button>
              <Button
                onClick={handlecheckout}
                style={{ backgroundColor: "black", color: "white" }}
              >
                {" "}
                <img src="https://www.bobbibrowncosmetics.com/media/export/cms/icons/security_white_lock_icon.svg" />{" "}
                CHECKOUT
              </Button>
              <br />
              <div>
                <img
                  src="https://www.bobbibrowncosmetics.com/media/export/cms/icons/visa_card.svg"
                  alt="visa"
                />
                <img
                  style={{ marginLeft: "5px" }}
                  src="https://www.bobbibrowncosmetics.com/media/export/cms/icons/master_card.svg"
                  alt="master"
                />
                <img
                  style={{ marginLeft: "5px" }}
                  src="https://www.bobbibrowncosmetics.com/media/export/cms/icons/maestro_card.svg"
                  alt="maestro"
                />
                <img
                  style={{ marginLeft: "5px" }}
                  src="https://www.bobbibrowncosmetics.com/media/export/cms/icons/discover_card.svg"
                  alt="discover card"
                />
                <img
                  style={{ marginLeft: "5px" }}
                  src="https://www.bobbibrowncosmetics.com/media/export/cms/icons/amex_card.svg"
                  alt="amex card"
                />
                <img
                  style={{ marginLeft: "5px" }}
                  src="https://www.bobbibrowncosmetics.com/media/export/cms/icons/paypal_icon.svg"
                  alt="paypal"
                />
                <img
                  style={{ marginLeft: "5px" }}
                  src="https://www.bobbibrowncosmetics.com/media/export/cms/icons/afterpay_icon.svg"
                  alt="afterpay"
                />
                <br />
              </div>
              <br />
              <h5>OFFER CODE</h5>
              <br />
              <TextField
                id="filled-basic"
                placeholder="Offer Code"
                variant="filled"
              />
              <p>One offer code per order</p>
              <div>
                <Button variant="secondary">APPLY</Button>
                <br />
                <br />
                <p
                  style={{
                    borderTop: "1px solid black",
                    borderBottom: "1px solid black",
                  }}
                >
                  Join BB Access and earn 52 points with your purchase today.
                </p>
                <br />
                <h5 style={{ textAlign: "left", marginLeft: "5px" }}>
                  TOTAL: ${all}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </Flexdiv>
      <br />
    </div>
  );
};

{
  /* <div  style={{display:"flex",justifyContent: "space-around"}} key={e.id} className='personalDiv'>
<div className='tag'>{e.tag }</div>
<img className='image' src={ e.image} alt='image' />
<h6 className='color'>{e.color}</h6>
<h5 className='name'>{ e.name}</h5>
<p className='description'>{e.description}</p>
<p className='price'>{`$${e.price}.00`}</p>
       
</div> */
}
