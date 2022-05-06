import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBagShopping, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-regular-svg-icons'
import { red } from '@mui/material/colors';
import { height } from '@mui/system';
// import {} from '@fortawesome/fontawesome-svg-core'
// import { FaBeer, FaGithub } from 'react-icons/fa';

const MainFixPartOfNavbar = styled.div`
background:black;
body{
    font-family:"Roboto";
}
.firstDiv{
    width:96%;
    margin:auto;
}
.firstSubDiv{
}
Link{
    text-decoration:none;
}
.rightPartTopNav{
    display:flex;
    float:right;
    padding-right: 1vw;
}
.leftPartTopNav{
    display:flex;
    float:left;
    padding-right: 4vw;
    padding-left:0px;
    margin-left:0px;
}
.logoImage{
    height: 37px;
    padding-top:22px;
    width:100%;
}
.rightPartTopNav .leftPartTopNav{
    font-size:14px;
}
ul {
      margin: 0;
      list-style: none;
      display: flex;
      justify-Content:space-between;
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
      font-size: 10px;
      line-height: 27px;
      font-weight:700;
      letter-spacing: 2px;
}

`;

const FixedNavbar = () => {
    return (
        <div>
            <MainFixPartOfNavbar>
                <div className="firstDiv">
                    <ul className="firstSubDiv">
                        <li className='leftPartTopNav'>
                            <Link to={"#"}><p>EMAIL</p></Link>
                            <Link to={"#"}><p>SIGN UP</p></Link>
                        </li>
                        <li>
                            <Link to={"#"}>
                                <img src="https://www.bobbibrowncosmetics.com/media/export/cms/logo.png" className='logoImage' alt="" />
                            </Link>
                        </li>
                        <li className='rightPartTopNav'>
                            <Link to={"#"}><p>JOIN</p></Link>
                            <Link to={"#"}><p  style={{paddingRight:"15px"}} >BBACCESS</p></Link>
                            <Link to={"#"}><img style={{padding:'8px' ,height:"21px"}} src='https://www.bobbibrowncosmetics.com/sites/bobbibrown/themes/bb_base/img/icons/svg/Location-White.svg' alt='' /></Link>                            
                            <Link to={"#"}><FontAwesomeIcon style={{fontSize:'21px', padding:'8px'}} icon={faUser} /></Link>
                            <Link to={"#"}><img style={{padding:'8px' ,height:"21px"}} src='https://www.bobbibrowncosmetics.com/sites/bobbibrown/themes/bb_base/img/icons/svg/Bag-White.svg' alt='' /></Link>
                        </li>
                    </ul>
                </div>
            </MainFixPartOfNavbar>
            {/* <FaGithub/>             */}
            <>
                
            </>
        </div>
    )
}

export default FixedNavbar