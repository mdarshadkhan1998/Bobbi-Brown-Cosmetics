import React from 'react'
import styled from 'styled-components'
// import Footer from '../Footer/Footer';

export const Discover = (props) => {

  const DiscoverStyling = styled.div`
    .img{
      width:100%;
    }
    .title{
      font-size:22px;
      font-family: sans-serif;
    }
  `;
    // console.log(props)
  return (
    <>
    <DiscoverStyling>
      <div className='maindiv' >
        <br/>
        <div className="d1" >
            <img className="img" src={props.imgsrc} alt="discoverImage"/>
            <h2 className="title">{props.title}</h2>
            <p>{props.details}</p>
            <a href={props.link} >Learn More</a>      
        </div>
      </div>
    </DiscoverStyling>
   
    </>
  )
}

