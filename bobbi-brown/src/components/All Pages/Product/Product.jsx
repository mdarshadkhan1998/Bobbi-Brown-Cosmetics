import React from 'react'
import styled from 'styled-components'

export const Product = (props) => {

    const ProductStyling = styled.div`
    .img{
      width:100%;
    }
    .title{
      font-size:22px;
      font-family: sans-serif;
    }
  `;
  return (
    <div>
        <>
    <ProductStyling>
      <div className='maindiv' >
        <div className="d1" >
            <img className="img" src={props.imgsrc} />
            <h2 className="title">{props.title}</h2>
            <p>{props.details}</p>
            <a href={props.link} >Explore Now</a>
        </div>
      </div>
    </ProductStyling>
   
    </>
    </div>
  )
}
