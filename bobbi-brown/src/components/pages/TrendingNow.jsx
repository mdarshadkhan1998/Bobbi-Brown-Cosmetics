import React from 'react'
import Carousel from "react-multi-carousel";
import Button from 'react-bootstrap/Button'
import 'react-multi-carousel/lib/styles.css';
// import { hover1here } from '../../styled.js/styled';


export const TrendingNow = () => {

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
      <Carousel className="itemcrouselhere" responsive={responsive} swipeable={false}
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
            <img id="hover1here" src="https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E9TN01_600x600_0.jpg" alt="Bobbi brown" />
            <p className="nameofproducts">BLACK</p>
            <h5 className="nameofproductsh1">SMOKEY EYE MASCARA</h5>
            <p>Long-wearing, volumizing mascara</p>
            <span><p className="dollarhere">$32.00</p></span>
            <Button style={{ backgroundColor: "black" }}>ADD TO BAG</Button>
            {/* //   onMouseEnter={imagesforhover} */}

          </div>
        </div>
        <div>
          <img src="https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E96E49_600x600_0.jpg" alt="bobbi brown" />
          <p className="nameofproducts">INCANDESCENT</p>
          <h5 className="nameofproductsh1">LONG-WEAR CREAM SHADOW STICK</h5>
          <p>Our ultimate quick eye shadow stick</p>
          <span><p className="dollarhere">$30.00</p></span>
          <Button style={{ backgroundColor: "black" }}>ADD TO BAG</Button>
        </div>
        <div>
          <img src="https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_E0KK07_600x600_0.jpg" alt="bobbi brown" />
          <p className="nameofproducts">ESPRESSO INK</p>
          <h5 className="nameofproductsh1">LONG-WEAR GEL EYELINER</h5>
          <p>Waterproof, no-smudge eyeliner</p>
          <span><p className="dollarhere">$28.00</p></span>
          <Button style={{ backgroundColor: "black" }}>ADD TO BAG</Button>
        </div>
        <div>
          <img src="https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ENPT01_600x600_0.jpg" alt="bobbi brown" />
          <p className="nameofproducts">PALE YELLOW</p>
          <h5 className="nameofproductsh1">SHEER FINISH PRESSED POWDER</h5>
          <p>Oil-absorbing powder</p>
          <span><p className="dollarhere">$45.00</p></span>
          <Button style={{ backgroundColor: "black" }}>ADD TO BAG</Button>
        </div>
        <div>
          <img src="https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EMCK02_600x600_0.jpg" alt="bobbi brown" />
          <p className="nameofproducts">FREE SPIRIT</p>
          <h5 className="nameofproductsh1">CRUSHED OIL-INFUSED GLOSS</h5>
          <p>Hydrating, non-sticky lip gloss</p>
          <span><p className="dollarhere">$29.00</p></span>
          <Button style={{ backgroundColor: "black" }}>ADD TO BAG</Button>
          <br />
        </div>
      </Carousel>
    </div>
  )
}

