import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import styled from "styled-components"
import {producttocart} from '../../redux/action'
import SingleProductPage from './SingleProductPage/SingleProductPage';

const ProductMappingStyling = styled.div`
.personalDiv{
    padding:20px;
    line-height:1;
    margin-top:20px;
}
.tag{
     border: 1px solid black;
     width:fit-content;
     margin:auto;
     padding:5px 10px;
     font-size:13px;
     cursor:pointer;
}
.justImage{
    width:100%;
    height:100%;
    cursor:pointer;
}
.image{
    width:90%;
    height:100%;
    padding:30px 10px;
    cursor:pointer;
}
.color{
    font-size:13px;
    text-transform: uppercase;
    font-weight:650;
    cursor:pointer;
}
.name{
    font-size:16px;
    text-transform: uppercase;
    font-weight:650;
    cursor:pointer;
}
.description{
    font-size:16px;
    font-weight:450;
    cursor:pointer;
}
.totalReview{
    font-size:13px;
    font-weight:500;
    cursor:pointer;
}
.price{
    font-size:15px;
    font-weight:600;
    cursor:pointer;
}
.addToCartButton{
    padding: 8px 28px;
    color:white;
    background-color:black;
    font-weight:700;
    font-size:13.7px;
    margin-top:20px;
    cursor:pointer;
}
.rating{
    display:flex;
    justify-content:center;
    display:grid;
    grid-template-columns:5fr 1fr;
    flex-direction:row;
    align-item:center;
    width:40%;
    margin:auto;
    cursor:pointer;
}
`;
// const Array = localStorage.getItem("producthere")|| []
const ProductMapping = (e) => {
    
//  console.log(e)
     const [data,setData] = useState([])
        //  console.log(data)
   
   const location = useLocation()
   const navigate= useNavigate()
    const handlecart =(product,item) =>{
       
               setData([...data,product])
                //  console.log(product)
          fetch(`http://localhost:3000/data`,{
              method:'POST',
              headers:{'content-type':'application/json'},
              body:JSON.stringify(product)
          }).then((res)=> res.json())
          .then((d)=>console.log())
          .catch((err)=>console.log("err",err))
        // console.log(data)
    }
    
    const gotoseperate = (data)=>{
        // console.log(data)
     
        navigate("/singleproductpage",{state: e})
    }
  return (
    <ProductMappingStyling>
        <div  className='personalDiv'>
            <div className={`${e.tag===undefined ? "" : 'tag' }`}>{`${e.tag===undefined ? "" : e.tag }`}</div>
            <img onClick={()=>gotoseperate(e)} className={e.image===undefined ? 'justImage' : 'image' } src={`${e.image===undefined ? e.justImage : e.image }`} alt='' />
            <h6 className='color'>{`${e.color===undefined ? "" : e.color }`}</h6>
            <h5 onClick={()=>gotoseperate(e)} className='name'>{`${e.name===undefined ? "" : e.name }`}</h5>
            <p onClick={()=>gotoseperate(e)} className='description'>{`${e.description===undefined ? "" : e.description }`}</p>
            <div className='rating'>
                <p onClick={()=>gotoseperate(e)} style={{fontSize:"20px"}}>{`${e.rating===undefined ? "" : e.rating }`}</p>
                <p onClick={()=>gotoseperate(e)} className='totalReview'>{`${e.totalReview===undefined ? "" : `(${e.totalReview})` }`}</p>
            </div>
            <p className='price'>{`${e.justImage ? "" : `$${e.price}.00` }`}</p>
            {e.name===undefined ? "" : <button className='addToCartButton' onClick={()=>handlecart(e,e.id)}>ADD TO BAG</button> }            
        </div>
    </ProductMappingStyling>
  )
}

export default ProductMapping