import React, { useContext, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { producttocart } from "../../redux/action";
import axios from "axios";
import { Authcontext } from "../Authentication/CartContext";
const RemoveProductStyling = styled.div`
  .personalDiv {
    padding: 20px;
    line-height: 1;
    margin-top: 20px;
  }
  .tag {
    border: 1px solid black;
    width: fit-content;
    margin: auto;
    padding: 5px 10px;
    font-size: 13px;
    cursor: pointer;
  }
  .justImage {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  .image {
    width: 90%;
    height: 100%;
    padding: 30px 10px;
    cursor: pointer;
  }
  .color {
    font-size: 13px;
    text-transform: uppercase;
    font-weight: 650;
    cursor: pointer;
  }
  .name {
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 650;
    cursor: pointer;
  }
  .description {
    font-size: 16px;
    font-weight: 450;
    cursor: pointer;
  }
  .totalReview {
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
  }
  .price {
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
  }
  .addToCartButton {
    padding: 8px 28px;
    color: white;
    background-color: black;
    font-weight: 700;
    font-size: 13.7px;
    margin-top: 20px;
    cursor: pointer;
  }
  .rating {
    display: flex;
    justify-content: center;
    display: grid;
    grid-template-columns: 5fr 1fr;
    flex-direction: row;
    align-item: center;
    width: 40%;
    margin: auto;
    cursor: pointer;
  }
`;
var total =0;
const RemoveProduct = (e) => {
 const {arr,setarr,handleremove} = useContext(Authcontext)
  const navigate = useNavigate();
  useEffect(() => {
   
  }) 
    
  const handleChange = (e) => {
    const value = +e.target.value;

  };
    total += +e.price
    // console.log(total)
  // const handleremove = (id) => {
  //   fetch(`http://localhost:3000/data/${id}`, { method: "DELETE" })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       fetch(`http://localhost:3000/data`)
  //         .then((res) => res.json())
  //         .then((res) => setArr(res))
  //         .catch((err) => console.log(err));
  //     })
  //     .catch((err) => console.log(err));

  // };
  
  return (
  <RemoveProductStyling>
      
     <div style={{ display: "flex", justifyContent: "space-around" }}>

        <img
          src={e.image}
          alt="image"
          style={{ height: "80px", weight: "80px" }}
        />
        <div>
          <p style={{ fontSize: "16px" }}>{e.name}</p>
          <p style={{ fontSize: "12px" }}>{e.color}</p>
       
          Quantity
          <select onChange={handleChange}>
            <option value={+1}>1</option>
            <option value={+2}>2</option>
            <option value={+3}>3</option>
            <option value={+4}>4</option>
            <option value={+5}>5</option>
          </select>
          <button
            onClick={() => handleremove(e.id)}
            style={{ backgroundColor: "lightgrey", border: "transparent" }}
          >
            Remove
          </button>
          <br/>
        <br/>
        </div>
        <p >{e.price}</p>
      
      </div>
    </RemoveProductStyling>
  );
};

export default RemoveProduct;
