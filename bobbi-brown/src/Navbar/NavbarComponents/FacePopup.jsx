import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FacePopupStyling = styled.div`
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
        padding-left:26px;
        padding-right:26px;
        padding-bottom:15px;
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
const FacePopup = () => {
  return (
      <FacePopupStyling>
        <div className='maindivSet'>
            <div className='maindiv'>
                <Link to="/faceproductmapping"  style={{textDecoration:"none"}} >
                    <img className='imageResize' src="https://www.bobbibrowncosmetics.com/media/export/cms/nav_touts/face/Nagivation-Tiles-Face-PC-SLWW_2_@2x.jpg" alt=''/>
                    <h3>DISCOVER SKIN LONG-WEAR WEIGHTLESS FOUNDATION SPF 15</h3>
                    <p>Our #1 Foundation Formula now in 42 shades.</p>
                </Link>
                <Link to="/discoverdatamapping"  style={{textDecoration:"none"}} >
                    <img className='imageResize' src="https://www.bobbibrowncosmetics.com/media/export/cms/nav_touts/face/Nagivation-Tiles-Face-Foundation-Finder_2_@2x.jpg" alt=''/>
                    <h3>FOUNDATION SHADE FINDER</h3>
                    <p>Discover your perfect shade match.</p>
                </Link>
                <Link to="/faceproductmapping"  style={{textDecoration:"none"}} >
                    <img className='imageResize' src="https://www.bobbibrowncosmetics.com/media/export/cms/GNAV/BB_2021_PC_GNAV_NPUF.jpg" alt=''/>
                    <h3>SHOP NOW. PAY LATER.</h3>
                    <p>Pay for your purchase in four equal installments, every two weeks with Afterpay.</p>
                </Link>
                {/* <Link to="#"  style={{textDecoration:"none"}}> */}
                    <ul>
                        <li><Link to='/productdatamapping' style={{textDecoration:"none"}} ><h3>FACE</h3></Link></li>
                        <li><Link to='/productdatamapping' style={{textDecoration:"none"}} ><p>Foundation</p></Link></li>
                        <li><Link to='/productdatamapping' style={{textDecoration:"none"}} ><p>Corrector & Concealer</p></Link></li>
                        <li><Link to='/productdatamapping' style={{textDecoration:"none"}} ><p>Primer</p></Link></li>
                        <li><Link to='/productdatamapping' style={{textDecoration:"none"}} ><p>Powder</p></Link></li>
                        <li><Link to='/productdatamapping' style={{textDecoration:"none"}} ><p>Face Brushes & Tools</p></Link></li>
                        <li><Link to='/productdatamapping' style={{textDecoration:"none"}} ><p>Foundation Guide</p></Link></li>
                    </ul>
                {/* </Link> */}
            </div>
        </div>
    </FacePopupStyling>
  )
}

export default FacePopup