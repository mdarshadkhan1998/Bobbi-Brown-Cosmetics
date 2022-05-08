import React, { useEffect, useRef } from 'react';
// import {Carousel} from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'

export const FirstCrousel = () => {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);


  return (
    
    <div style={{ backgroundColor: "black"}}>
      <br/>
      
      <Carousel interval={3500} >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.bobbibrowncosmetics.com/media/export/cms/Homepage/SS22/SS22_LastBeautyEvent_Glow_pc.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="acrouselheading">
            <h5>May Beauty Days</h5>
            <h1>40% OFF GLOW FAVOURITES</h1>
            <div>
              <Button className="aslidebuttonhere" variant="outline-secondary">Shop Now</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <div className="App">
            <video
              style={{ maxWidth: "100%", width: "100vw", margin: "0 auto" }}
              playsInline
              loop
              muted
              // controls
              alt="All the devices"
              src="https://www.bobbibrowncosmetics.com/media/export/cms/Homepage/SS22/SS22_LWCSS_pc.mp4"
              ref={videoEl}
            />
          </div>
          <Carousel.Caption>
            <h1>MORE PLAY.</h1>
            <h1>YOUR WAY.</h1>
            <p>Blend the rules with our NEW 24-hour<br /> Long-Wear-Cream Shadow-Stick -now<br /> in 29 ready-to play shades.</p>
            <div>
              <Button className="aslidebuttonhere" variant="outline-secondary" >Shop Now</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block w-100"
            src="https://www.bobbibrowncosmetics.com/media/export/cms/Homepage/SS22/SS22_LastBeautyEvent_VEEB_pc.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <div className="slider_thingshere">
              <p>MAY BEAUTY DAYS</p>
              <h2>30% OFF VITAMIN <br /> ENRICHED EYE BASE</h2>
              <p> Wake up your makeup with 30% off our brightening, smoothing, priming <strong>Vitamin Enriched Eye Base</strong> for a limited time. </p>
              <div>
                <Button className="aslidebuttonhere" variant="outline-secondary">Shop Now</Button>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}