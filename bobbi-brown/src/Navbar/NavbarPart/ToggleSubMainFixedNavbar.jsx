import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import NavbarPopupComponent from '../NavbarComponents/NavbarPopupComponent';
import {faUser} from '@fortawesome/free-regular-svg-icons'
import searchData from '../searchData.json'
import SearchPopUp from '../NavbarComponents/SearchPopUp';
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
    color:  rgb(180,180,190);
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


    var d = searchData.dataJson;
    var [visiblitySearch, setVisiblity] = useState(false)
    const [searchD, setSearchD] = useState([...d])
    const [searchDCPY, setSearchDCPY] = useState([])
    // console.log(searchDCPY)
    const handleChange = (inputText) => {    
      let z = searchD.filter((e)=>{
        return e.name.includes(inputText);  
      })
      setSearchDCPY([...z])
      setVisiblity(true)
    //   console.log(z)
    }


    const hoverHandler =(type)=>{
        setHowerState(type)
    }

    const handleNoHover=()=>{
        setHowerState("")
    }
    const handleVisiblity = ()=>{
        setVisiblity(false)
    }
    return (
        <div>
            <SubMainFixPartOfNavbar>
                <div>
                    <div className="firstDiv" style={{}}>
                        <div style={{ borderBottom: "1px solid rgb(225,236,233)" }}>
                            <FontAwesomeIcon icon={faSearch} style={{ fontWeight: "200", fontSize: "17px", color: "rgb(212,218,216)" }} />
                            <input className='searchNavbar' type="text" onChange={(el)=>handleChange(el.target.value)} placeholder="SEARCH" />
                        </div>
                        <div>
                            <ul className=" linksForFixNav">
                                <li className='slideFixNavbar'>
                                    <Link to={"/newproductmapping"} onMouseOver={()=>hoverHandler('NEW')}  ><p>NEW</p></Link>
                                </li>
                                <li className='slideFixNavbar'>
                                    <Link to={"/shopallbestsellers"} onMouseEnter={()=>hoverHandler('BEST')} ><p>BESTSELLERS</p></Link>
                                </li>
                                <li className='slideFixNavbar'>
                                    <Link to={"/faceproductmapping"} onMouseEnter={()=>hoverHandler('FACE')} ><p>FACE</p></Link>
                                </li>
                                <li className='slideFixNavbar'>
                                    <Link to={"/makeupmini"} onMouseEnter={()=>hoverHandler('MAKEUP')} ><p>MAKEUP</p></Link>
                                </li>
                                <li className='slideFixNavbar'>
                                    <Link to={"/skincaremapping"} onMouseEnter={()=>hoverHandler('SKINCARE')} ><p>SKINCARE</p></Link>
                                </li>
                                <li className='slideFixNavbar'>
                                    <Link to={"/virtual"} onMouseEnter={()=>hoverHandler('VIRTUAL')} ><p>VIRTUAL SERVICES</p></Link>
                                </li>
                                <li className='slideFixNavbar'>
                                    <Link to={"/discoverdatamapping"} onMouseEnter={()=>hoverHandler('DISCOVER')} ><p>DISCOVER</p></Link>
                                </li>
                            </ul>
                        </div>
                        <div className='iconsAdjust' style={{display:"flex", alignItems:"center"}}>
                            {/* <Link to={"#"}><FontAwesomeIcon style={{ color: "white", fontWeight: "900", fontSize: "20px", padding:"10px" }} icon={faMapMarkerAlt} /></Link>                            
                            <Link to={"#"}><FontAwesomeIcon style={{ color: "white", fontWeight: "900", fontSize: "20px", padding:"10px" }} icon={faUser} /></Link>
                            <Link to={"#"}><FontAwesomeIcon style={{ color: "white", fontWeight: "900", fontSize: "20px", padding:"10px" }} icon={faBagShopping} /></Link> */}
                            <Link to={"/location"}><img style={{padding:'8px' ,height:"37px"}} src='https://www.bobbibrowncosmetics.com/sites/bobbibrown/themes/bb_base/img/icons/svg/Location-White.svg' alt='' /></Link>                            
                            <Link to={"/verify"}><FontAwesomeIcon style={{ color: "white", fontWeight: "900", fontSize: "22px", paddingLeft:"10px",paddingRight:"10px" }} icon={faUser} /></Link>
                            <Link to={"/addtocart"}><img style={{padding:'8px' ,height:"37px"}} src='https://www.bobbibrowncosmetics.com/sites/bobbibrown/themes/bb_base/img/icons/svg/Bag-White.svg' alt='' /></Link>
                        </div>
                    </div>
                </div>
            </SubMainFixPartOfNavbar>
            <div onMouseLeave={handleNoHover}>
                { howerState && <NavbarPopupComponent type={howerState} /> }
            </div>
            <div style={{position:"fixed", 
                        color:"white", 
                        display:"grid", 
                        gridTemplateColumns:"1fr",
                        gap:"10px",
                        textAlign:"left", 
                        width:"360px", 
                        height:"500px", 
                        overflow:"scroll",
                        marginLeft:"4.5vw", 
                        background:"white", 
                        opacity:"0.95",
                        scrollbarWidth:"none",
                        visibility:(visiblitySearch===true ? "visible" : "hidden"),
                        cursor:"pointer"
                        }}
                        onMouseLeave={handleVisiblity}    
                    >
                {searchDCPY.map((e)=><SearchPopUp key={e.id} {...e}  />)}            
            </div>
        </div>
    )
}

export default ToggleSubMainFixedNavbar