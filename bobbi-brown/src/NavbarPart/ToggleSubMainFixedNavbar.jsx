import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBagShopping, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import NavbarPopupComponent from '../NavbarComponents/NavbarPopupComponent';
import {faUser} from '@fortawesome/free-regular-svg-icons'
// import {Fade} from '@mui/material'

const SubMainFixPartOfNavbar = styled.div`
background:black;
body{
    font-family:"Roboto";
}
.firstDiv{
    ${'' /* display:flex;
    align-items:center;
    width:90%;
    margin:auto; */}
    display:grid;
    grid-template-columns:1.5fr 10fr 1fr;
    width:92%;
    margin:auto;
    align-items:center; 
}
.searchNavbar{
    height:20px;
    width:140px;
    color: black;
    background-color: black;
    border:none;
    font-size:13px;
    font-weight:600;
    letter-spacing: 1px;
    
}
.linksForFixNav{
    margin-left:8vw;
}
ul {
      margin: 0;
      list-style: none;
      display: flex;
      gap:3.4%;
      width:100%;
      
}
li > *{
      display: flex;
      align-items: center;
      text-decoration: none;
      color: #ffffff;
      padding: 2px;
}
p {
      margin: 0;
      font-size: 14px;
      padding-top:25px;
      padding-bottom:6px;
      font-weight:400;
      align-items:center;
      letter-spacing: 1px;
}


`;
const ToggleSubMainFixedNavbar = () => {
    const [howerState, setHowerState] = useState("");
    const hoverHandler =(type)=>{
        setHowerState(type)
    }

    const handleNoHover=()=>{
        setHowerState("")
    }
    return (
        <div>
            <SubMainFixPartOfNavbar>
                <div>
                    <div className="firstDiv" style={{}}>
                        <div style={{ borderBottom: "1px solid rgb(225,236,233)" }}>
                            <FontAwesomeIcon icon={faSearch} style={{ fontWeight: "200", fontSize: "17px", color: "rgb(212,218,216)" }} />
                            <input className='searchNavbar' type="search" placeholder="SEARCH" />
                        </div>
                        <div>
                            <ul className=" linksForFixNav">
                                <li className='slideFixNavbar'>
                                    <Link to={"#"} onMouseOver={()=>hoverHandler('NEW')}  ><p>NEW</p></Link>
                                </li>
                                <li className='slideFixNavbar'>
                                    <Link to={"#"} onMouseEnter={()=>hoverHandler('BEST')} ><p>BESTSELLERS</p></Link>
                                </li>
                                <li className='slideFixNavbar'>
                                    <Link to={"#"} onMouseEnter={()=>hoverHandler('FACE')} ><p>FACE</p></Link>
                                </li>
                                <li className='slideFixNavbar'>
                                    <Link to={"#"} onMouseEnter={()=>hoverHandler('MAKEUP')} ><p>MAKEUP</p></Link>
                                </li>
                                <li className='slideFixNavbar'>
                                    <Link to={"#"} onMouseEnter={()=>hoverHandler('SKINCARE')} ><p>SKINCARE</p></Link>
                                </li>
                                <li className='slideFixNavbar'>
                                    <Link to={"#"} onMouseEnter={()=>hoverHandler('VIRTUAL')} ><p>VIRTUAL SERVICES</p></Link>
                                </li>
                                <li className='slideFixNavbar'>
                                    <Link to={"#"} onMouseEnter={()=>hoverHandler('DISCOVER')} ><p>DISCOVER</p></Link>
                                </li>
                            </ul>
                        </div>
                        <div className='iconsAdjust'>
                            <Link to={"#"}><FontAwesomeIcon style={{ color: "white", fontWeight: "900", fontSize: "20px", padding:"10px" }} icon={faMapMarkerAlt} /></Link>                            
                            <Link to={"#"}><FontAwesomeIcon style={{ color: "white", fontWeight: "900", fontSize: "20px", padding:"10px" }} icon={faUser} /></Link>
                            <Link to={"#"}><FontAwesomeIcon style={{ color: "white", fontWeight: "900", fontSize: "20px", padding:"10px" }} icon={faBagShopping} /></Link>
                        </div>
                    </div>
                </div>
            </SubMainFixPartOfNavbar>
            <div onMouseLeave={handleNoHover}>
                { howerState && <NavbarPopupComponent type={howerState} /> }
            </div>
        </div>
    )
}

export default ToggleSubMainFixedNavbar