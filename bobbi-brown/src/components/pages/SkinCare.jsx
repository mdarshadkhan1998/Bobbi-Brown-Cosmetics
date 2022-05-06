


import React from 'react'
import Carousel from "react-multi-carousel";
import Button from 'react-bootstrap/Button'
import 'react-multi-carousel/lib/styles.css';
// import { hover1here } from '../../styled.js/styled';


export const SkinCare = () => {
 
    // const imagesforhover = "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EFAA01_600x600_1.jpg"
      
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div>
     <Carousel  className="itemcrouselhere" responsive={responsive} swipeable={false}
  draggable={false}
//   showDots={true}
  infinite={true}
  loop
  autoPlay={true}
  inLine
  autoPlaySpeed={2000}
//   keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
 
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px">
   
  <div >
     <div>
         <img id="hover1here" src="https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E1LM01_600x600_0.jpg" alt="Bobbi brown" />
        <h5 className="nameofproductsh1">VITAMIN ENRICHED FACE BASE</h5>
        <p>Multitasking, moisturizing primer</p>
        <span><p className="dollarhere">$64.00</p></span>
        <Button style={{backgroundColor:"black"}}>ADD TO BAG</Button>
     {/* //   onMouseEnter={imagesforhover} */}
 
     </div>
  </div>
  <div>
      <img src="https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EL1901_600x600_0.jpg" alt="bobbi brown" />
      
      <h5 className="nameofproductsh1">VITAMIN ENRICHED EYE BASE</h5>
      <p>Moisturizing undereye primer</p>
      <span><p  className="dollarhere">$56.00</p></span>
      <Button style={{backgroundColor:"black"}}>ADD TO BAG</Button>
  </div>
  <div>
      <img src="https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EHP201_600x600_0.jpg" alt="bobbi brown" />
      <p className="nameofproducts">BARE GLOW</p>
      <h5 className="nameofproductsh1">EXTRA ILLUMINATING MOISTURE BALM</h5>
      <p>Glow-amplifying moisturizing</p>
      <span><p  className="dollarhere">$69.00</p></span>
      <Button style={{backgroundColor:"black"}}>ADD TO BAG</Button>
  </div>
  <div>
      <img src="https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EFX201_600x600_0.jpg" alt="bobbi brown" />
      
      <h5 className="nameofproductsh1">SKIN CLARIFIER NO. 75</h5>
      <p>Concentrated pore-clarifying treatment</p>
      <span><p  className="dollarhere">$49.00</p></span>
      <Button style={{backgroundColor:"black"}}>ADD TO BAG</Button>
  </div>
  <div>
      <img src="https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E65R01_600x600_0.jpg" alt="bobbi brown" />
      
      <h5 className="nameofproductsh1">HYDRATING FACE TONIC</h5>
      <p>Balancing and restoring toner</p>
      <span><p  className="dollarhere">$38.00</p></span>
      <Button style={{backgroundColor:"black"}}>ADD TO BAG</Button>
      <br />
  </div>
</Carousel>
    </div>
  )
}

