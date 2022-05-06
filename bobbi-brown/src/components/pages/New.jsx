import React from "react";
import Carousel from "react-multi-carousel";
import Button from "react-bootstrap/Button";
import "react-multi-carousel/lib/styles.css";
// import { hover1here } from '../../styled.js/styled';

export const New = () => {
  // const imagesforhover = "https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EFAA01_600x600_1.jpg"

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Carousel
        className="itemcrouselhere"
        responsive={responsive}
        swipeable={false}
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
        itemClass="carousel-item-padding-40-px"
      >
        <div>
          <div>
            <img
              id="hover1here"
              src="https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EFAA01_600x600_0.jpg"
              alt="Bobbi brown"
            />
            <p className="nameofproducts">PINK GLOW</p>
            <h5 className="nameofproductsh1">HIGHLIGHTING POWDER</h5>
            <p>Pearl-infused illuminator</p>
            <span>
              <p className="dollarhere">$50.00</p>
            </span>
            <Button style={{ backgroundColor: "black" }}>ADD TO BAG</Button>
            {/* //   onMouseEnter={imagesforhover} */}
          </div>
        </div>
        <div>
          <img
            src="https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ERGC03_600x600_0.jpg"
            alt="bobbi brown"
          />
          <p className="nameofproducts">LUXE EYE SHADOW</p>
          <h5 className="nameofproductsh1">LUXE EYE SHADOW</h5>
          <p>Metallic Shimmer Eye Shadow</p>
          <span>
            <p className="dollarhere">$38.00</p>
          </span>
          <Button style={{ backgroundColor: "black" }}>ADD TO BAG</Button>
        </div>
        <div>
          <img
            src="https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_BBUSET_600x600_0.jpg"
            alt="bobbi brown"
          />
          <p className="nameofproducts">LUXE & GLOW</p>
          <h5 className="nameofproductsh1">LUXE & GLOW</h5>
          <p>4 luxurious formulas for lids and lips</p>
          <span>
            <p className="dollarhere">$83.00</p>
          </span>
          <Button style={{ backgroundColor: "black" }}>ADD TO BAG</Button>
        </div>
        <div>
          <img
            src="https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_EPXL09_600x600_0.jpg"
            alt="bobbi brown"
          />
          <p className="nameofproducts">BISQUE</p>
          <h5 className="nameofproductsh1">SKIN CORRECTOR STICK</h5>
          <p>Discoloration neutralizer for undereyes & face</p>
          <span>
            <p className="dollarhere">$32.00</p>
          </span>
          <Button style={{ backgroundColor: "black" }}>ADD TO BAG</Button>
        </div>
        <div>
          <img
            src="https://www.bobbibrowncosmetics.com/media/export/cms/products/600x600/bb_sku_ERFJ11_600x600_0.jpg"
            alt="bobbi brown"
          />
          <p className="nameofproducts">HONEY</p>
          <h5 className="nameofproductsh1">HIGHLIGHTING POWDER</h5>
          <p>Easy-to-use,long-lasting concealer stick</p>
          <span>
            <p className="dollarhere">$32.00</p>
          </span>
          <Button style={{ backgroundColor: "black" }}>ADD TO BAG</Button>
          <br />
        </div>
      </Carousel>
    </div>
  );
};
