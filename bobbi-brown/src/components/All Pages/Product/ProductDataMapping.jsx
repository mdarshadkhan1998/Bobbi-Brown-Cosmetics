import React from 'react'
import Footer from '../../Footer/Footer'
import { Product } from './Product'


const ProductDataMapping = () => {

    const Productdata =[
        {
            imgsrc:"https://www.bobbibrowncosmetics.com/media/export/cms/guides/BeautyGuides/SS20-GUIDE-LANDINGPAGE_FoundationBasics.jpg",
          title:"Foundation Guide",
          details:"Discover the skin-true formula that’s right for you.",
          link:"https://www.bobbibrowncosmetics.com/foundation-guide",
        },
        {
            imgsrc:"https://www.bobbibrowncosmetics.com/media/export/cms/guides/BeautyGuides/SS20-GUIDE-LANDINGPAGE_ConcealerBasics.jpg",
          title:"Concealer Guide",
          details:"Discover the skin-true formula that’s right for you.",
          link:"https://www.bobbibrowncosmetics.com/concealer-guide"
        },
        {
            imgsrc:"https://www.bobbibrowncosmetics.com/media/export/cms/guides/BeautyGuides/SS20-GUIDE-LANDINGPAGE_SkincareBasics.jpg",
          title:"Skincare Guide",
          details:"Perfect your regimen and prep for flawless makeup with our go-to guide.",
          link:"https://www.bobbibrowncosmetics.com/Skincare-guide",
        },
        {
            imgsrc:"https://www.bobbibrowncosmetics.com/media/export/cms/guides/BeautyGuides/SS20-GUIDE-LANDINGPAGE_LipBasics.jpg",
            title:"Lip Guide",
            details:"Explore every lip color by shade, formula and finish—from bold, brilliant shine to ultra-matte.",
            link:"https://www.bobbibrowncosmetics.com/lip-guide",
        },
        {
            imgsrc:"https://www.bobbibrowncosmetics.com/media/export/cms/guides/BeautyGuides/SS20-GUIDE-LANDINGPAGE_GlowBasics.jpg",
          title:"Glow Guide",
          details:"Whether you want subtle luminosity or a high-impact sheen, we make it simple to find your perfect glow.",
          link:"https://www.bobbibrowncosmetics.com/glow-guide"
        },
        {
            imgsrc:"https://www.bobbibrowncosmetics.com/media/export/cms/guides/BeautyGuides/SS20-GUIDE-LANDINGPAGE_EyeShadowBasics.jpg",
            title:"Eye shadow guide",
            details:"From powder and cream shadows to versatile palettes, we have everything you need to shade, line and define.",
            link:"https://www.bobbibrowncosmetics.com/eye-shadow-guide"
        },
        {
            imgsrc:"https://www.bobbibrowncosmetics.com/media/export/cms/guides/BeautyGuides/SS20-GUIDE-LANDINGPAGE_EyelinerBasics.jpg",
          title:"Eyeliner Guide",
          details:"Everything you need to line and define eyes—from long-wearing pencils to ultra-precise liquid formulas.",
          link:"https://www.bobbibrowncosmetics.com/eyeliner-guide"
        },
        {
            imgsrc:"https://www.bobbibrowncosmetics.com/media/export/cms/guides/BeautyGuides/SS20-GUIDE-LANDINGPAGE_MascaraBasics.jpg",
          title:"Mascara Guide",
          details:"Volumize, lengthen and define with high-impact mascara for every lash look.",
          link:"https://www.bobbibrowncosmetics.com/mascara-guide"
        },
        {
            imgsrc:"https://www.bobbibrowncosmetics.com/media/export/cms/guides/BeautyGuides/SS20-GUIDE-LANDINGPAGE_BrushBasics.jpg",
          title:"Brush Guide",
          details:"Find the right tools for any look with our collection of high-performance synthetic brushes.",
          link:"https://www.bobbibrowncosmetics.com/brush-guide"
        },
        {
            imgsrc:"https://www.bobbibrowncosmetics.com/media/export/cms/guides/BeautyGuides/BB-Guides-LandingPage-Tile-Brow_@2x.jpg",
          title:"Brow Guide",
          details:"With the right tools and techniques, mastering the art of shading and defining your brows is easier than you think.",
          link:"https://www.bobbibrowncosmetics.com/brow-guide"
        }
    
    
    
    ]


  return (
      <>
         <div style={{ width:"100vw" , height:"220px",margin:"Auto" , backgroundColor:"black", color:"#FFFFFF", textAlign:"center", }}>
          <h1 style={{textAlign:"center",fontSize:"40px" ,position:"relative",top:"30px"}}>PRODUCT GUIDES</h1>
            <p style={{textAlign:"center" ,position:"relative",top:"30px"}}>Take the guesswork out of your beauty routine with our
            curated guides for makeup and skincare</p>
        </div>

    <div className="ProductDataMapping" style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", width:"90vw", margin:"auto", textAlign:"start", gap:"20px",marginTop:"50px"}}>
    {Productdata.map((e)=>(<Product {...e}/>))}
    
</div>
<br></br>
<br></br>
<br></br>
</>
  )
}

export default ProductDataMapping
