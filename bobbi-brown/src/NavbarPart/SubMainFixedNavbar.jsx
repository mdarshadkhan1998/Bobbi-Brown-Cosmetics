import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCake, faSearch} from '@fortawesome/free-solid-svg-icons';
import {faSmile} from '@fortawesome/free-regular-svg-icons';
import { FaSearch} from 'react-icons/fa';

const SubMainFixPartOfNavbar = styled.div`
background:black;
body{
    font-family:"Roboto";
}
.firstDiv{
    display:flex;
    align-items:center;
    width:90%;
    margin:auto;
}
.searchNavbar{
    height:20px;
    width:100px;
    color: black;
    background-color: black;
    border:none;
    font-size:10px;
    font-weight:700;
    
}
.slideFixNavbar{
    display:flex;
}
}.slideFixNavbar{
    font-size:7px;
}
.linksForFixNav{
    margin-left:8vw;
}
ul {
      margin: 0;
      list-style: none;
      display: flex;
      gap:5%;
      margin:left;
      width:60%;
      
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
      padding-top:25px;
      padding-bottom:6px;
      font-weight:400;
      align-items:center;
}

`;
const SubMainFixedNavbar = () => {
  return (
    <div>
        <SubMainFixPartOfNavbar>
            <div>
                <div className="firstDiv" style={{}}>
                        <div style={{borderBottom:"1px solid rgb(225,236,233)"}}>
                            <FontAwesomeIcon icon={faSearch}  style={{color:"white", fontWeight:"200", fontSize:"12px", color:"rgb(212,218,216)"}}/>
                            <input className='searchNavbar' type="search" placeholder="SEARCH"/>
                        </div>
                        <ul className=" linksForFixNav">
                            <li className='slideFixNavbar'>
                                <Link to={"#"}><p>NEW</p></Link>
                            </li>
                            <li className='slideFixNavbar'>
                                <Link to={"#"}><p>BESTSELLERS</p></Link>
                            </li>
                            <li className='slideFixNavbar'>
                                <Link to={"#"}><p>FACE</p></Link>
                            </li>
                            <li className='slideFixNavbar'>
                                <Link to={"#"}><p>MAKEUP</p></Link>
                            </li>
                            <li className='slideFixNavbar'>
                                <Link to={"#"}><p>SKINCARE</p></Link>
                            </li>
                            <li className='slideFixNavbar'>
                                <Link to={"#"}><p>VIRTUAL SERVICES</p></Link>
                            </li>
                            <li className='slideFixNavbar'>
                                <Link to={"#"}><p>DISCOVER</p></Link>
                            </li>
                        </ul>
                </div>
            </div>
        </SubMainFixPartOfNavbar>
    </div>
  )
}

export default SubMainFixedNavbar