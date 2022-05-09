import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const DiscoverPopupStyling = styled.div`
    body{
        font-family:"Roboto";
    }
    .maindivSet{
        width:100vw;
        background:white;
    }
    .maindiv{
        display:grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        background:white;
        padding-top:26px;
        padding-left:26px;
        padding-right:15px;
        width:96vw;
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
        text-decoration:none;
    }
    ul {
      list-style: none;
    }
    li > *{
        line-height:0.9;
    }
`;
const DiscoverPopup = () => {
  return (
      <DiscoverPopupStyling>
        <div className='maindivSet'>
            <div className='maindiv'>
                <Link to="/productdatamapping"  style={{textDecoration:"none"}} >
                    <img className='imageResize' src="https://www.bobbibrowncosmetics.com/media/export/cms/nav_touts/new/BB_GNAV_Tout_04_LastChance.jpg" alt=''/>
                    <h3>PRODUCT GUIDES</h3>
                    <p>Take the guesswork out of your beauty routine with our curated guides for makeup and skincare.</p>
                </Link>
                <Link to="/discoverdatamapping"  style={{textDecoration:"none"}} >
                    <img className='imageResize' src="https://www.bobbibrowncosmetics.com/media/export/cms/nav_touts/face/Nagivation-Tiles-Face-Foundation-Finder_2_@2x.jpg" alt=''/>
                    <h3>FOUNDATION SHADE FINDER</h3>
                    <p>Discover your perfect shade match.</p>
                </Link>
                <Link to="/offers"  style={{textDecoration:"none"}} >
                    <img className='imageResize' src="https://www.bobbibrowncosmetics.com/media/export/cms/39-Navigation-Dropdown-Tile-PC_Loyalty_2x.jpg" alt=''/>
                    <h3>BBACCESS</h3>
                    <p>Join today and get <b>15% OFF</b> your first order plus free shipping every day.</p>
                </Link>
                <Link to="/discoverdatamapping"  style={{textDecoration:"none"}} >
                    <video className='imageResize' src="https://www.bobbibrowncosmetics.com/media/export/cms/nav_touts/new/20210420_BB_FY21_Citizenship&Sustainability_GNAV_Hub.mp4" muted loop preload='none' autoPlay='10'/>
                    <h3>DO GOOD</h3>
                    <p>See how we're showing up to make things more beautiful.</p>
                </Link>
                {/* <Link to="#"  style={{textDecoration:"none"}}> */}
                    <ul>
                        <li><Link to='/offers' style={{textDecoration:"none"}} ><h3>DISCOVER MORE</h3></Link></li>
                        <li><Link to='/offers' style={{textDecoration:"none"}} ><p>Our Story</p></Link></li>
                        <li><Link to='/offers' style={{textDecoration:"none"}} ><p>Our Artistry Experts</p></Link></li>
                        <li><Link to='/offers' style={{textDecoration:"none"}} ><p>Pretty Powerful Fund</p></Link></li>
                        <li><Link to='/offers' style={{textDecoration:"none"}} ><p>Ingredients Glossary</p></Link></li>
                        <li><Link to='/offers' style={{textDecoration:"none"}} ><p>Bobbi Brown Community</p></Link></li>
                    </ul>
                {/* </Link> */}
            </div>
        </div>
    </DiscoverPopupStyling>
  )
}

export default DiscoverPopup