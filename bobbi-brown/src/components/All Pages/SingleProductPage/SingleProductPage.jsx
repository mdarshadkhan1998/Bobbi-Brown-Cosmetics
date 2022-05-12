import React from "react";
import { useLocation, Link, useNavigate} from "react-router-dom";
import styles from "./SingleProductPage.module.css";
import { New } from "./Slider";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedin, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa';
const SingleProductPage = () => {
  const navigate = useNavigate()
  const location = useLocation()
  // const {e} = location.state.e
  //  console.log(location.state)
  const gotoaddtocart = ()=>{
    // console.log(data)
 
    navigate("/addtocart")
}
  return (
    <>
      <div style={{width:"90vw", margin:"auto", paddingTop:"70px" }}>       
        <div className={styles.background}>
          <div className={styles.productdetails}>
            <div className={styles.productdetailsleftimg}>
              <img
                src={location.state.image}
                alt="img"
              />
             {location.state.image2 ? <>
              <img
                src={location.state.image2}
                alt="img"
              />
              <img
                src={location.state.image3}
                alt="img"
              />
             </> : ""}
            </div>
            <div className={styles.productdetailsleft}>
              <img
                src={location.state.image}
                alt="img"
              />
            </div>
            <div className={styles.productdetailsright}>
              <div>
                <div>
                  <h1> {location.state.name}</h1>
                  <h2>4 luxurious formulas for lids and lips</h2>
                </div>
                <div className={styles.textaling}>
                  <span>{`$${location.state.price}`}</span>
                  <div className={styles.textaling1}>$104 Value</div>
                  <div>{location.state.description}</div>
                </div>
              </div>
              <hr />
              <div>
                <div>Pay $0 now</div>
                <div> First Payment 2 Weeks from Purchase</div>
                <span> 4 interest-free installments of $20.75 with </span>
                <br />
                <span className={styles.img1}>
                  <img
                    src="https://static.afterpay.com/integration/product-page/logo-afterpay-black.png"
                    alt="img"
                  />{" "}
                  <p>i</p>
                </span>
              </div>
              <hr />
              <div>
                <button>ADD TO BAG</button>
              </div>
              <div>
                <p>A Few Left!</p>
              </div>
              <div>
                <p>
                  Get a Mini Makeup Set with your $65+ order. Use code BBSET at
                  checkout.&nbsp;
                  <u>Learn more</u>
                </p>
              </div>
              <div>
                <div className={styles.spase}>
                  {" "}
                  <span className={styles.spase1}>What It Is</span>{" "}
                  <span>A set of four luxuri...</span>
                  <span> </span>
                </div>
              </div>
              <hr />
              <div>
                <div className={styles.spase}>
                  {" "}
                  <span className={styles.spase1}>Benifit $ Claims</span>{" "}
                  <span>Lux Eye Shadow in M...</span>
                  <span> </span>
                </div>
              </div>
              <hr />
              <div>
                <div className={styles.spase}>
                  {" "}
                  <span className={styles.spase1}>How To Use</span>{" "}
                  <span>Sweep or smudge Luxe...</span>
                  <span> </span>
                </div>
              </div>
              <hr />
              <div className={styles.img2}>
                {/* <img src="logo1.png" alt="img" /> */}
                {/* Icons */}

                <a href="https://www.instagram.com/_mad___boxer_/" target="_blank" style={{color:"black", fontSize:"30px",padding:"5px"}}><FaInstagram /></a>
                <a href="https://www.linkedin.com/in/md-arshad-khan-350206154/" target="_blank" style={{color:"black", fontSize:"30px",padding:"5px"}}><FaLinkedin /></a>
                <a href="https://github.com/mdarshadkhan1998/Bobbi-Brown-Cosmetics" target="_blank" style={{color:"black", fontSize:"30px",padding:"5px"}}><FaGithub /></a>
                <a href="https://www.pinterest.com/bobbibrown/" target="_blank" style={{color:"black", fontSize:"30px",padding:"5px"}}><FaPinterest /></a>
              </div>
            </div>
          </div>
          <hr />
          <div className={styles.heading}> You may also like</div>
          <New />
          <hr />
          <div className={styles.heading}> Customer Reviews</div>
          <div className={styles.reviev}>
            <div className={styles.reviev1}>
              <div className={styles.reviev11}>Customer Reviewe</div>
              <div className={styles.reviev12}>ask &amp; answer</div>
            </div>
            <div className={styles.reviev2}>
              <u>Write the First Reviews</u>
            </div>
          </div>
          <div className={styles.lastdiv}>
            <img
              src={location.state.image}
              alt="img"
            />
            <div>
              <p className={styles.lastdivp1}>{location.state.name}</p>
              <p className={styles.lastdivp2}>{`$${location.state.price}`}</p>
            </div>
            <button onClick={()=>gotoaddtocart}>ADD TO BAG</button>
            <p>A Few Left!</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default SingleProductPage;