import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SkincarePopupStyling = styled.div`
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
        padding-top:10px;
        padding-left:26px;
        padding-right:26px;
        width:92vw;
        margin:auto;
    }
    .imageResize{
        height:23vh;
        padding-top:10px;
    }
    h3{
        font-size:14px;
        font-weight:700;
        text-align:left;
        padding-left:10px;
        padding-top:15px;
        padding-bottom:15px;
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
        line-height:0.7;
    }
`;
const SkincarePopup = () => {
  return (
      <SkincarePopupStyling>
        <div className='maindivSet'>
            <div className='maindiv'>
                <Link to="/skincaremapping"  style={{textDecoration:"none"}} >
                    <img className='imageResize' src="https://www.bobbibrowncosmetics.com/media/export/cms/nav_touts/skincare/Nagivation-Tiles-Skincare-Best-Sellers_@2x.jpg" alt=''/>
                    <h3>VITAMIN ENRICHED FACE BASE</h3>
                    <p>This cult favorite is the perfect prep for foundation.</p>
                </Link>
                <Link to="/makeupmini"  style={{textDecoration:"none"}} >
                    <img className='imageResize' src="https://www.bobbibrowncosmetics.com/media/export/cms/nav_touts/skincare/BB-PC-GNAV-Skincare_Bestsellers_600x300_@2x.jpg" alt=''/>
                    <h3>OUR BEST SELLERS</h3>
                    <p>Shop moisturizers, serums & more.</p>
                </Link>
                {/* <Link to="#"  style={{textDecoration:"none"}}> */}
                    <ul>
                        <li><Link to='#' style={{textDecoration:"none"}} ><h3>SKINCARE</h3></Link></li>
                        <li><Link to='#' style={{textDecoration:"none"}} ><p>Moisturizers</p></Link></li>
                        <li><Link to='#' style={{textDecoration:"none"}} ><p>Serums & Treatment</p></Link></li>
                        <li><Link to='#' style={{textDecoration:"none"}} ><p>Cleansers & Toner</p></Link></li>
                        <li><Link to='#' style={{textDecoration:"none"}} ><p>Eye & Lip Care</p></Link></li>
                        <li><Link to='#' style={{textDecoration:"none"}} ><p>SPF</p></Link></li>
                        <li><Link to='#' style={{textDecoration:"none"}} ><p>Skincare Guide</p></Link></li>
                    </ul>
                {/* </Link> */}
                {/* <Link to="#"  style={{textDecoration:"none"}}> */}
                    <ul>
                        <li><Link to='#' style={{textDecoration:"none"}} ><h3>CONCERN</h3></Link></li>
                        <li><Link to='#' style={{textDecoration:"none"}} ><p>Extra Moisture & Repair</p></Link></li>
                        <li><Link to='#' style={{textDecoration:"none"}} ><p>Wrinkle Treatment</p></Link></li>
                        <li><Link to='#' style={{textDecoration:"none"}} ><p>Pore & Blemishes</p></Link></li>
                        <li><Link to='#' style={{textDecoration:"none"}} ><p>Redness & Irritation</p></Link></li>
                        <li><Link to='#' style={{textDecoration:"none"}} ><p>Dullness & Discoloration</p></Link></li>
                    </ul>
                {/* </Link> */}
                
            </div>
        </div>
    </SkincarePopupStyling>
  )
}

export default SkincarePopup

