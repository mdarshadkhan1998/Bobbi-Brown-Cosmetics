import React from "react";
import { Link } from "react-router-dom";
// import styles from "./Main.css";
import styled from "styled-components";

const MainStyling = styled.div`
 /* mom gift   */

 .main{
    height: 100%;
    width: 1330px;
    /* border: 5px solid rgb(182, 240, 25); */
}

.gift_main_div{
    height: 550px;
    width: 100%;
    /* border: 1px solid red; */
    display: flex;
}
.gift_text_div{
    /* border: 1px solid blue; */
    flex: 4;
    height: 100%;
    padding: 0px;
}
.gift_image_div{
    /* border: 1px solid greenyellow; */
    flex: 6;
    height: 100%;
}

.gift_main_div img{
    height: 100%;
    width: 75%;
}
.mom-text{
    height: 450px;
    width: 85%;
    /* border: 1px solid black; */
    margin: 30px 0px 0px 50px ;
}


.mom-text h5{
  font-size: 40px;
  font-family: "BBSans Regular",Helvetica,Arial,sans-serif;
  line-height: 1;
  margin: 60px 65px 10px 0px;
  text-align: left;
}
.mom-text p{
    margin: 0px 0px 0px 0px;
    text-align: left;
    font-size: 16px;
  }
  .button-div{
    height: 100px;
    width: 80%;
    /* border: 1px solid red; */
    margin: 20px 0px 0px 0px ;
}
.button-div button{
    background-color: black;
    margin: 10px 190px 0px 0px ;
    height: 40px;
    width: 180px;
    /* border: 1px solid white; */
    color: white;
}

/* power of beauty */

.beauty-main-div{
    height: 600px;
    width: 100%;
    /* border: 1px solid rgb(3, 129, 41); */
    margin: 60px 0px 0px 0px;
}

.headline{
    height: 20%;
    width: 80%;
    /* border: 1px solid blue; */
    margin: 10px 0px 0px 15% ;
}

.headline h1{
    font-size: 50px;
    font-weight: 500;
    font-family: "BBSans Regular",Helvetica,Arial,sans-serif;
    line-height: .95;
    letter-spacing: 1.5px;
}
.headline p{
    font-weight: 400;
}
.headline button{
    background-color: black;
    margin: 10px 190px 0px 0px ;
    height: 40px;
    width: 180px;
    /* border: 1px solid white; */
    color: white;
}
.main-images-div{
    height: 70%;
    width:100%;
    /* border: 1px solid red; */
    margin: 8% 0px 0px 0px;
    display: flex;
}
.image-div{
    height: 90%;
    width: 21%;
    /* border: 1px solid blue; */
    margin: 0px 0px 0px 40px ;
}
.image-div img{
    height: 75%;
    width: 90%;
    margin: 0px 40px 0px 0px ;
    
}
.image-div h5{
    font-size: 15px;
    font-family: "BBSans Regular",Helvetica,Arial,sans-serif ;
    text-align: left;
}
.image-div p{
    text-align: left;
}

/* set for spring */

.main-spring-div{
    height: 660px;
    width: 100%;
    /* border: 1px solid blue; */
    margin: 160px 0px 0px 0px ;
    display: flex;
}

.powder-image-div{
    height: 100%;
    width: 60%;
    /* border: 1px solid black; */
}

.powder-text-div{
    height: 60%;
    width: 40%;
    /* border: 1px solid brown; */
    padding: 0px 0px 80px 0px;
}
.powder-text-div  h4{
    font-size: 55px;
    font-weight: 500;
    font-family: "BBSans Regular",Helvetica,Arial,sans-serif ;
    text-align: left;
    text-transform: uppercase;
}
.lightweight{
    text-align: left;
    margin: 0px 0px 0px 0px ;
}
.powder-text-div h5{
    text-align: left;
    text-transform: uppercase;
}

.powder-text-div p{
    text-align: left;
}
.powder-text-div button{
    background-color: black;
    margin: 0px 70% 0px 0px ;
    height: 40px;
    width: 180px;
    border: 1px solid white;
    color: white;   
}
.powder-image-div img{
    height: 100%;
    width: 75%;
}


/* YK2 MAKEUP  */

.makeup-main-div{
    height: 500px;
    width: 100%;
    /* border: 1px solid blue; */
    margin: 70px 0px 0px 0px ;
    display: flex;
}
.YK-MAKEUP {
    height: 100%;
    width: 30%;
    /* border: 1px solid black; */
    margin: 0px 0px 0px 60px;
}

.makeup-image-div {
    height: 100%;
    width: 30%;
    /* border: 1px solid olivedrab; */
    margin: 0px 0px 0px 20px ;
}
.frosted-div {
    height: 100%;
    width: 30%;
    /* border: 1px solid red; */
    margin: 0px 0px 0px 20px ;
}

.YK-MAKEUP h3{
    font-size: 55px;
    font-weight: 500;
    font-family: "BBSans Regular",Helvetica,Arial,sans-serif ;
    text-align: left;
    text-transform: uppercase;    
}

.YK-MAKEUP p{
    text-align: left;   
    font-size: 18px;
}

.makeup-image-div img{
    height: 90%;
    width: 86%;
    margin: 0px 0px 0px 0px;
}

.frosted-div div{
    height: 25%;
    width: 100%;
    /* border: 1px solid blueviolet ; */
    text-align: left;
    padding-bottom: 40px;
}

/* ARTISTY consultation */

.consultation-main-div{
height: 600px;
width: 100%;
/* border: 1px solid blue; */
margin: 60px 0px 0px 0px;
}
.artisty-headline-div{
    height: 30%;
    width: 100%;
    /* border: 1px solid brown; */
    float: none;
}

.learn-headline h4{
    font-size: 50px;
    font-weight: 500;
    font-family: "BBSans Regular",Helvetica,Arial,sans-serif ;
    text-align: center;  
    margin: -10px 0px 0px 0px ;
}

.virtual-headline{
    height: 15%;
    width: 100%;
    /* border: 1px solid red; */
    padding: 0px 0px 20px 0px;
}

.learn-headline{
    height: 40%;
    width: 100%;
    /* border: 1px solid blue; */
    padding: 0px 0px 20px 0px ;
}

.complimentary-div{
    height: 30%;
    width: 100%;
    /* border: 1px solid green; */
}           

.complimentary-div p{
   margin: -40px 0px 0px 0px ; 
}  

.main-artisty-images-div{
    height: 70%;
    width: 100%;
    /* border: 1px solid black; */
    margin: 20px 0px 0px 0px ;
    display: flex;
}
.artisty-images-div{
    height: 100%;
    width: 30%;
    /* border: 1px solid blue; */
    margin: 0px 0px 0px 20px;  
    text-align: left; 
}
.artisty-images-div img{
     height: 65%;
     width: 90%;
}

.artisty-images-div p{
    margin: 10px 0px 10px 0px ;
    font-size: 13px;
    color: grey;
}
.artisty-images-div h5{
    font-size: 20px;
    font-weight: 500;
    font-family: "BBSans Regular",Helvetica,Arial,sans-serif ;
    text-align: left;  
    margin: 0px 0% 0px 0px ;
}

.artisty-images-div button{
    background-color: black;
    margin: 0px 0% 0px 0px ;
    height: 40px;
    width: 150px;
    border: 1px solid white;
    color: white;   
}

/* BOBBIBROWN COMMUNITY */

.community-main-div{
    height: 400px;
    width: 100%;
    /* border: 1px solid black; */
    margin: 10% 0px 0px 0px ;
}
.community-headline-div{
    height: 20%;
    width: 100%;
    /* border: 1px solid blue; */
}

.community-headline-div h4{
    font-size: 45px;
    font-weight: 500;
    font-family: "BBSans Regular",Helvetica,Arial,sans-serif ;
    text-align: center;  
    margin: 0px 0% 0px 0px ;
}
.community-headline-div p{
    margin: -5px 0px 0px 0px ;
    font-size: 15px;
    color: gray;
}

.community-images-div{
    height: 80%;
    width: 100%;
    /* border: 1px solid rgb(255, 0, 34); */
    display: flex;
}
.community-image-div{
    height: 100%;
    width: 22%;
    /* border: 1px solid green; */
    margin: 0px 0px 0px 30px ;
    text-align: left;
}

.community-image-div img{
    height: 70%;
    width: 80%;
}

.community-image-div h4{
margin: 0px 0px 0px 0px ;
}
`;

const Main = () => {
  return (
    <MainStyling>
      <div>
        <div className="main">
          <div className="gift_main_div">
            <div className="gift_text_div">
              <div className="mom-text">
                <h5>
                  GIFT MOM <br />
                  ON TIME
                </h5>
                <p>
                  mom's golden rule.don't be late. Order her gift using the
                  <br />
                  shipping timelines below or send a personalized eGift card.
                  <br />
                  <br />
                  Standard Gorund Service-Friday,April 29
                  <br />
                  2-day Air-Wednesday. May 4<br />
                  Overnight Air - Thursday.May 5
                </p>
                <div className="button-div">
                  <button>SHOP THE GIFT GUIDE</button>
                  <br />
                  <button>SEND AN EGIFT CARD</button>
                </div>
              </div>

            </div>
            <div className="gift_image_div">
              <img
                src="https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/SS22/SS22_MD_Shipping_pc.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="beauty-main-div">
            <div className="headline">
              <h1>THE POWER OF ASIAN BEAUTY </h1>
              <p>
                Join us as we celebrate Asian beauty all month long. Tune in to
                our Instagram Stories for a special -edition series featuring four
                Pretty Powerful women
              </p>
              <button>LEARN MORE</button>
            </div>
            <div className="main-images-div">
              <div className="image-div">
                <img
                  src="https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/SS22/SS22_PrettyPowerful_APAHM_pc_1.jpg"
                  alt=""
                />
                <h5>
                  TIFFANY LEE <br />
                  Celebrity Hair and Makeup Artist <br /> & Beauty influencer
                </h5>
                <p>"I am starting to own myself and my unique features"</p>
              </div>
              <div className="image-div">
                <img
                  src="https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/SS22/SS22_PrettyPowerful_APAHM_pc_2.jpg"
                  alt=""
                />
                <h5>
                  KRISTINA RODULFO <br />
                  Beauty Content Creator
                </h5>
                <p>
                  "When I look at my skin, i have this <br />
                  golden shade. It reminds me of my <br />
                  heritage and it makes me proud."
                </p>
              </div>
              <div className="image-div">
                <img
                  src="https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/SS22/SS22_PrettyPowerful_APAHM_pc_3.jpg"
                  alt=""
                />
                <h5>
                  SARA TAN CHRISTENSEN <br />
                  Beauty Director at Refinery29 and <br />
                  Co-Host of the Gloss Angeles pocast
                </h5>
                <p>
                  "I'm resilient ,it's the work ethic my Filipino parents
                  instilled in me."
                </p>
              </div>
              <div className="image-div">
                <img
                  src="https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/SS22/SS22_PrettyPowerful_APAHM_pc_4.jpg"
                  alt=""
                />
                <h5>
                  ASHLEY VILLA <br />
                  Attorney and CEO/Founder <br />
                  of Rare Global
                </h5>
                <p>"Be rare. Rise and roll every day"</p>
              </div>
            </div>
          </div>

          <div className="main-spring-div">
            <div className="powder-image-div">
              <img
                src="https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/SS22/SS22_Golden_Hour_Glow_pc.jpg"
                alt=""
              />
            </div>
            <div className="powder-text-div">
              <h4>
                set for <br />
                spring
              </h4>
              <p className="lightweight">
                Our lightweight breathable Sheer Finish Pressed Powder sets <br />
                foundation and stands up to shine as the weather warms up.
              </p>
              <h5>sheer finish pressed powder</h5>
              <p>Oil-absorbing powder</p>
              <p>$45.00</p>
              <p>PALE YELLOW</p>
              <button>ADD TO BAG</button>
            </div>
          </div>

          <div className="makeup-main-div">
            <div className="YK-MAKEUP">
              <h3>
                yk2 <br />
                makeup
                <br />
                play
              </h3>
              <p>
                The 2000s throwback look we're loving-
                <br />
                created with a few of our favorites.
              </p>
            </div>
            <div className="makeup-image-div">
              <img
                src="https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/SS22/SS22_Y2K_pc.jpg"
                alt=""
              />
            </div>
            <div className="frosted-div">
              <div className="div1">
                <h5>FROSTED LIDS</h5>
                <p>
                  Long-Wear Cream Shadow Stick in <br />
                  Incandescent creates
                  <br />a pink-peach shimmer effect.
                </p>
                <a href="">Shop Now</a>
              </div>
              <br />
              <br />
              <div className="div2">
                <h5>LINED AND DEFINED</h5>
                <p>
                  Long-Wear Gel Eyeliner in Black Ink
                  <br />
                  turn up the drama with highly
                  <br />
                  pigmented smudge-free definition.
                </p>
                <br />
                <a href="">Shop Now</a>
                <br />
                <br />
              </div>
              <div className="div3">
                <br />
                <br />
                <h5>AMPED-UP-LASHES</h5>
                <p>
                  Smokey Eye Mascrara gives lashes a<br />
                  volumized streched-out effect.
                  <br />a pink-peach shimmer effect.
                </p>
                <a href="">Shop Now</a>
              </div>
            </div>
          </div>

          <div className="consultation-main-div">
            <div className="artisty-headline-div">
              <div className="virtual-headline"><p>VIRTUAL ARTISTY CONSULTATION</p></div>
              <br />
              <div className="learn-headline"><h4>LEARN FROM THE PROS</h4></div>
              <br />
              <div className="complimentary-div">            <p>Form trying a new shade to learn new tips our artists <br />are here to help with comlimentary video</p></div>
            </div>
            <div className="main-artisty-images-div">
              <div className="artisty-images-div">
                <img src="https://www.bobbibrowncosmetics.com/media/export/cms/VirtualServices/SS21_lookfreshvideocalls.jpg" alt="" />
                <p>30 MIN</p>
                <h5>LOOK FRESH FOR VIDEO CALLS</h5>
                <p>Learn how to look bright eyed and fresh faced in<br />minutes with our pro tips.</p>
                <button>BOOK NOW</button>
              </div>
              <div className="artisty-images-div">
                <img src="https://www.bobbibrowncosmetics.com/media/export/cms/VirtualServices/BB_PC_VirtualServices_LandingPage_Group_Tile2_1_@2x.gif" alt="" />
                <p>15 MIN</p>
                <h5>CORRECT & CONCEAL</h5>
                <p>Look less tried by neturalizing undereye circles to<br />look instantly more awake and bright-eyed using <br />our new Skin Corrector & Skin Conceal</p>
                <button>BOOK NOW</button>
              </div>
              <div className="artisty-images-div">
                <img src="https://www.bobbibrowncosmetics.com/media/export/cms/VirtualServices/SS21_customizeskincareroutine.jpg" alt="" />
                <p>30 MIN</p>
                <h5>CUSTOMIZE YOUR SKINCARE <br />ROUTINE</h5>
                <p>Learn how to address your top skin concerns with<br />a personalized routines curated by an artist.</p>
                <button>BOOK NOW</button>
              </div>
            </div>
          </div>
          <div className="community-main-div">
            <div className="community-headline-div">
              <h4>#BOBBIBROWN COMMUNITY</h4>
              <p>Looking fresh-faced? Let's see it. Mention @bobbibrown and tag #bobbiBrown to share</p>
            </div>
            <div className="community-images-div">
              <div className="community-image-div">
                <img src="https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/EvergreenServices/BB_HP_Module_PC_Services_03.jpg" alt="" />
                <h4>CHAT NOW</h4>
                <p>chat with makeup artist to get<br />products recommendations.</p>
                <a href="">LEARN MORE</a>
              </div>
              <div className="community-image-div">
                <img src="https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/EvergreenServices/BB_HP_Module_PC_Services_05.jpg" alt="" />
                <h4>FREE SHIPPING</h4>
                <p>Get free shipping on all orders<br />$65+ or join Bobbi Brown Club to<br />get free shipping on all orders</p>
                <a href="">LEARN MORE</a>
              </div>
              <div className="community-image-div">
                <img src="https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/EvergreenServices/BB_HP_Module_PC_Services_07.jpg" alt="" />
                <h4>WE WANT YOU TO LOVE IT</h4>
                <p>That's why we offer free shipping <br />and returns on all foundation <br /> correction,conceals and powders.</p>
                <a href="">LEARN MORE</a>
              </div>
              <div className="community-image-div">
                <img src="https://www.bobbibrowncosmetics.com/media/export/cms/HP_Modules/EvergreenServices/BB_HP_Module_PC_Services_09.jpg" alt="" />
                <h4>EXCLUSIVE OFFERS</h4>
                <p>chat with makeup artist to get<br />products recommendations.</p>
                <a href="">LEARN MORE</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainStyling>
  );
};

export default Main;
