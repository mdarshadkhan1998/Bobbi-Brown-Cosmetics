import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NewPopupStyling = styled.div`
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
        padding:26px;
        width:92vw;
        margin:auto;
    }
    .imageResize{
        height:21vh;
    }
    h3{
        font-size:14px;
        font-weight:640;
        text-align:left;
        padding-left:25px;
        padding-top:15px;
        color:black;
        list-style: none;
    }
`;

const NewPopup = () => {
   
  return (
      <NewPopupStyling>
        <div className='maindivSet'>
            <div className='maindiv'>
                <Link to="/newproductmapping"  style={{textDecoration:"none"}} >
                    <img className='imageResize' src="https://www.bobbibrowncosmetics.com/media/export/cms/nav_touts/new/20210811_BB_FY21_LuxeDefiningLipstick_Engage_Product_ShadeRange_NA_GNAV_600x300.jpg" alt=''/>
                    {/* <img className='imageResize' src='../Navbar/Images/SHOP ALL NEW.jpg' alt=''/> */}

                    <h3>SHOP ALL NEW</h3>
                </Link>
                <Link to="/offers"  style={{textDecoration:"none"}} >
                    <img className='imageResize' src="https://www.bobbibrowncosmetics.com/media/export/cms/GNAV/BB_Gnav_PC_Mitigation_BeautyEvent_Glow.jpg" alt=''/>
                    <h3>OFFERS & SERVICES</h3>
                </Link>
                <Link to="/mothersmapping"  style={{textDecoration:"none"}} >
                    <img className='imageResize' src="https://www.bobbibrowncosmetics.com/media/export/cms/GNAV/BB-FY22-MothersDay_Gnav_Giftguide_@2x.jpg" alt=''/>
                    <h3>MOTHER'S DAY GIFT GUIDE</h3>
                </Link>
                <Link to="/makeupmini"  style={{textDecoration:"none"}}>
                    <img className='imageResize' src="https://www.bobbibrowncosmetics.com/media/export/cms/GNAV/20220215_BB_FY22_LWCSS_ShadeExt_GNAV_Global_Tile.jpg" alt=''/>
                    <h3>SHOP LONG-WEAR CREAM SHADOW STICK</h3>
                </Link>
            </div>
        </div>
    </NewPopupStyling>
  )
}

export default NewPopup