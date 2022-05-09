import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const VirtualServicesPopupStyling = styled.div`
    body{
        font-family:"Roboto";
    }
    .maindivSet{
        width:100vw;
        background:white;
    }
    .maindiv{
        display:grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        background:white;
        padding-top:26px;
        padding-left:6vw;
        width:97vw;
        margin:auto;
        gap:10px;
    }
    .imageResize{
        width:95%;
    }
    h3{
        font-size:14px;
        font-weight:640;
        text-align:left;
        padding-left:10px;
        padding-top:15px;
        color:black;
        list-style: none;
    }
    p{
        color:black;
        font-size:13.5px;
        text-align:left;
        padding-left:10px;
    }
    ul {
      list-style: none;
    }
    li > *{
        line-height:0.9;
    }
`;
const VirtualServicesPopup = () => {
  return (
      <VirtualServicesPopupStyling>
        <div className='maindivSet'>
            <div className='maindiv'>
                <Link to="/virtual"  style={{textDecoration:"none"}} >
                    <img className='imageResize' src="https://www.bobbibrowncosmetics.com/media/export/cms/nav_touts/new/BB_PC_GNAV_Virtual_Artistry_Consultations_Holiday_@2x.jpg" alt=''/>
                    <h3>VIRTUAL CONSULTATIONS</h3>
                    <p>Book complimentary video sessions with a top artist for makeup tips and tutorials tailored just to you.</p>
                </Link>
                <Link to="/virtual"  style={{textDecoration:"none"}} >
                    <img className='imageResize' src="https://www.bobbibrowncosmetics.com/media/export/cms/nav_touts/new/BB-PC-GNAV-VTO_600x300_@2x.jpg" alt=''/>
                    <h3>VIRTUAL TRY-ON</h3>
                    <p>Find your perfect foundation, lip, and eye shades with our easy-to-use tool.</p>
                </Link>
                <Link to="/virtual"  style={{textDecoration:"none"}} >
                    <img className='imageResize' src="https://www.bobbibrowncosmetics.com/media/export/cms/nav_touts/learn/Navigation-Tiles-Discover-Howtos_@2x.gif" alt=''/>
                    <h3>HOW TO</h3>
                    <p>Explore our artists' tools and tips to get your best look.</p>
                </Link>
                {/* <Link to="#"  style={{textDecoration:"none"}}> */}
                    <ul>
                        <li><Link to='/virtual' style={{textDecoration:"none"}} ><h3>MORE</h3></Link></li>
                        <li><Link to='/virtual' style={{textDecoration:"none"}} ><p>View All Services</p></Link></li>
                        <li><Link to='/virtual' style={{textDecoration:"none"}} ><p>Our Artistry Experts</p></Link></li>
                        <li><Link to='/virtual' style={{textDecoration:"none"}} ><p>Camera-Ready Filters</p></Link></li>
                        <li><Link to='/virtual' style={{textDecoration:"none"}} ><p>Live Stream Videos</p></Link></li>
                    </ul>
                {/* </Link> */}
            </div>
        </div>
    </VirtualServicesPopupStyling>
  )
}

export default VirtualServicesPopup









