import React, { useContext, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { producttocart } from "../../redux/action";
import axios from "axios";
import { Authcontext } from "../Authentication/CartContext";
import { LocalStorageContext } from "../Authentication/LocalContext";
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
const arr = JSON.parse(localStorage.getItem("local")) || [];
// var total =0;
var j = 0;
var sum = 0;
const RemoveProduct = (e,index) => {
  const [total, settotal] = useState();
  const {local,setlocal,addtolocalstorage} = useContext(LocalStorageContext)
  // const { arr, setarr, handleremove } = useContext(Authcontext);
 

  const handleremove =(id) =>{
   console.log(id)
     localStorage.removeItem(id)
    for(let i=0;i<arr.length;i++){
      if(arr[i].id== id){
        arr.splice(arr[i],1);
        console.log(arr)
        localStorage.setItem("local",JSON.stringify(arr));
        setlocal(arr)
      }
    }
      //  addtolocalstorage(arr)
      // setlocal(local)
      // 
     
   
  }

 
  const handleChange = (quantity, id) => {
    // console.log(id)

    const value = +quantity * +e.price;

    //   fetch(`http://localhost:3000/data/${id}`,{
    //     method:'PATCH',
    //     headers:{'content-type':'application/json'},
    //     body:JSON.stringify(arr)
    // }).then((res)=> res.json())
    // .then((d)=>console.log(d))
    // .catch((err)=>console.log("err",err))
  };

  return (
    <RemoveProductStyling>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <img
          src={e.image}
          alt="image"
          style={{ height: "80px", weight: "80px" }}
        />
        <div>
          <p style={{ fontSize: "16px" }}>{e.name}</p>
          <p style={{ fontSize: "12px" }}>{e.color}</p>
          Quantity
          <select onChange={(e) => handleChange(e.target.value, e.id)}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <button
            onClick={() => handleremove(e.id)}
            style={{ backgroundColor: "lightgrey", border: "transparent" }}
          >
            Remove
          </button>
          <br />
          <br />
        </div>
        <p>${e.price}</p>
      </div>
    </RemoveProductStyling>
  );
};

export default RemoveProduct;
