import React from 'react'

import { useNavigate } from 'react-router-dom';

const SearchPopUp = (e) => {
    // console.log(e)
    
    const navigate= useNavigate();

    const gotoseperate = (data)=>{
      // console.log(data)
   
      navigate("/singleproductpage",{state: e})
  }
  return (
      <>
        <div style={{display:"flex", padding:"5px", columnGap:"10px"}}  onClick={()=>gotoseperate(e)}>
            <div ><img src={e.image} alt="SearchImage" height="80px" width="80px"/></div>
            <div style={{display:"block"}}>
                <div style={{fontSize:"15px", fontWeight:"600", color:"black"}}>{e.name}</div>
                <div style={{fontSize:"14px", fontWeight:"400", color:"black", marginTop:"5px"}}>{e.description}</div>
            </div>        
        </div>
        <hr style={{width:"350px", color:"black", height:"3px"}}/>
      </>
          
  )
}

export default SearchPopUp