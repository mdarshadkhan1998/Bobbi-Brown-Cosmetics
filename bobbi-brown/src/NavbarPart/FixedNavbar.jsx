import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBagShopping, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-regular-svg-icons'
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
    padding-right: 4.5vw;
    padding-left:0px;
    margin-left:0px;
}
.logoImage{
    height: 42px;
    padding-top:17px;
    width:100%;
}
.rightPartTopNav .leftPartTopNav{
    font-size:7px;
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
      font-size: 7.7px;
      line-height: 27px;
      font-weight:700;
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
                            <Link to={"#"}><p>BBACCESS</p></Link>
                            <Link to={"#"}><FontAwesomeIcon style={{fontSize:'13px', padding:'6px'}} icon={faMapMarkerAlt} /></Link>                            
                            <Link to={"#"}><FontAwesomeIcon style={{fontSize:'13px', padding:'6px'}} icon={faUser} /></Link>
                            <Link to={"#"}><FontAwesomeIcon style={{fontSize:'13px', padding:'6px'}} icon={faBagShopping} /></Link>
                        </li>
                    </ul>
                </div>
            </MainFixPartOfNavbar>
            {/* <FaGithub/>             */}
        </div>
    )
}

export default FixedNavbar