import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const BestSellersPopupStyling = styled.div`
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
        height:27vh;
    }
    h3{
        font-size:14px;
        font-weight:640;
        padding-left:10px;
        padding-top:15px;
        color:black;
        list-style: none;
    }
`;
const BestSellersPopup = () => {
  return (
      <BestSellersPopupStyling>
        <div className='maindivSet'>
            <div className='maindiv'>
                <Link to="/shopallbestsellers"  style={{textDecoration:"none"}} >
                    <img className='imageResize' src="https://www.bobbibrowncosmetics.com/media/export/cms/nav_touts/bestsellers/BB-PC-Gnav-Tile-01-B_@2x.jpg" alt=''/>
                    <h3>SHOP ALL BESTSELLERS</h3>
                </Link>
                <Link to="/productdatamapping"  style={{textDecoration:"none"}} >
                    <img className='imageResize' src="https://www.bobbibrowncosmetics.com/media/export/cms/nav_touts/bestsellers/BB-PC-GNAV-LWCSS_450x300_@2x.jpg" alt=''/>
                    <h3>LONG-WEAR CREAM SHADOW STICK</h3>
                </Link>
                <Link to="/shopallbestsellers"  style={{textDecoration:"none"}} >
                    <img className='imageResize' src="https://www.bobbibrowncosmetics.com/media/export/cms/nav_touts/bestsellers/BB-PC-GNAV-Highlighters_450x300_@2x.jpg" alt=''/>
                    <h3>HIGHLIGHTING POWDER</h3>
                </Link>
                <Link to="/virtual"  style={{textDecoration:"none"}}>
                    <img className='imageResize' src="https://www.bobbibrowncosmetics.com/media/export/cms/nav_touts/bestsellers/BB-PC-Gnav-Tile-04-B_@2x.jpg" alt=''/>
                    <h3>GIFTS & SETS</h3>
                </Link>
            </div>
        </div>
    </BestSellersPopupStyling>
  )
}

export default BestSellersPopup