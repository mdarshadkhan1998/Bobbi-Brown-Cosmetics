import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MakeupPopupStyling = styled.div`
    body{
        font-family:"Roboto";
    }
    .maindivSet{
        width:100vw;
        background:white;
    }
    .maindiv{
        display:grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
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
        font-size:15px;
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
        font-size:14px;
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
const MakeupPopup = () => {
  return (
      <MakeupPopupStyling>
        <div className='maindivSet'>
            <div className='maindiv'>
                <Link to="/makeupmini"  style={{textDecoration:"none"}} >
                    <img className='imageResize' src="https://www.bobbibrowncosmetics.com/media/export/cms/nav_touts/new/BB_PC_Ecomm_Mini_Bar_Gnav.jpg" alt=''/>
                    <h3>MINI BAR</h3>
                </Link>
                {/* <Link to="#"  style={{textDecoration:"none"}}> */}
                    <ul>
                        <li><Link to='/mothersmapping' style={{textDecoration:"none"}} ><h3>FACE</h3> </Link></li>
                        <li><Link to='/mothersmapping' style={{textDecoration:"none"}} ><p>Foundation</p> </Link></li>
                        <li><Link to='/mothersmapping' style={{textDecoration:"none"}} ><p>Corrector & Concealer</p> </Link></li>
                        <li><Link to='/mothersmapping' style={{textDecoration:"none"}} ><p>Primer</p> </Link></li>
                        <li><Link to='/mothersmapping' style={{textDecoration:"none"}} ><p>Powder</p> </Link></li>
                        <li><Link to='/mothersmapping' style={{textDecoration:"none"}} ><p>Foundation Guide</p> </Link></li>
                    </ul>
                {/* </Link> */}
                {/* <Link to="#"  style={{textDecoration:"none"}}> */}
                    <ul>
                        <li><Link to='/productdatamapping' style={{textDecoration:"none"}} ><h3>LIPS</h3> </Link></li>
                        <li><Link to='/productdatamapping' style={{textDecoration:"none"}} ><p>Lipstick</p> </Link></li>
                        <li><Link to='/productdatamapping' style={{textDecoration:"none"}} ><p>Lip Gloss</p> </Link></li>
                        <li><Link to='/productdatamapping' style={{textDecoration:"none"}} ><p>Lip Liner</p> </Link></li>
                        <li><Link to='/productdatamapping' style={{textDecoration:"none"}} ><p>Lip Balms & Tints</p> </Link></li>
                        <li><Link to='/productdatamapping' style={{textDecoration:"none"}} ><p>Lip Guide</p> </Link></li>
                    </ul>
                {/* </Link> */}
                {/* <Link to="#"  style={{textDecoration:"none"}}> */}
                    <ul>
                        <li><Link to='/makeupmini' style={{textDecoration:"none"}} ><h3>EYES</h3> </Link></li>
                        <li><Link to='/makeupmini' style={{textDecoration:"none"}} ><p>Eye Shadow</p> </Link></li>
                        <li><Link to='/makeupmini' style={{textDecoration:"none"}} ><p>Brows</p> </Link></li>
                        <li><Link to='/makeupmini' style={{textDecoration:"none"}} ><p>Eyeliner</p> </Link></li>
                        <li><Link to='/makeupmini' style={{textDecoration:"none"}} ><p>Mascara</p> </Link></li>
                        <li><Link to='/makeupmini' style={{textDecoration:"none"}} ><p>Eye Shadow Guide</p> </Link></li>
                    </ul>
                {/* </Link> */}
                {/* <Link to="#"  style={{textDecoration:"none"}}> */}
                    <ul>
                        <li><Link to='/makeupmini' style={{textDecoration:"none"}} ><h3>CHEEKS</h3> </Link></li>
                        <li><Link to='/makeupmini' style={{textDecoration:"none"}} ><p>Highlight & Glow</p> </Link></li>
                        <li><Link to='/makeupmini' style={{textDecoration:"none"}} ><p>Blush</p> </Link></li>
                        <li><Link to='/makeupmini' style={{textDecoration:"none"}} ><p>Bronzer</p> </Link></li>
                        <li><Link to='/makeupmini' style={{textDecoration:"none"}} ><p>Glow Guide</p> </Link></li>
                    </ul>
                {/* </Link> */}
                {/* <Link to="#"  style={{textDecoration:"none"}}> */}
                    <ul>
                        <li><Link to='/mothersmapping' style={{textDecoration:"none"}} ><h3>MORE</h3> </Link></li>
                        <li><Link to='/mothersmapping' style={{textDecoration:"none"}} ><p>Gifts & Sets</p> </Link></li>
                        <li><Link to='/mothersmapping' style={{textDecoration:"none"}} ><p>Brushes & Tools</p> </Link></li>
                        <li><Link to='/mothersmapping' style={{textDecoration:"none"}} ><p>Beach Fragrance</p> </Link></li>
                        <li><Link to='/mothersmapping' style={{textDecoration:"none"}} ><p>Last Chance</p> </Link></li>
                        <li><Link to='/mothersmapping' style={{textDecoration:"none"}} ><p>Virtual Try-on</p> </Link></li>
                        <li><Link to='/mothersmapping' style={{textDecoration:"none"}} ><p>e-Gift Card</p> </Link></li>
                    </ul>
                {/* </Link> */}
            </div>
        </div>
    </MakeupPopupStyling>
  )
}

export default MakeupPopup