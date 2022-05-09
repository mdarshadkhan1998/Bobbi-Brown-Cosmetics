import React from "react";

import styles from "./SingleProductPage.module.css";
import { New } from "./Slider";
const SingleProductPage = () => {
  return (
    <>
      <div className={styles.background}>
        <div className={styles.productdetails}>
          <div className={styles.productdetailsleftimg}>
            <img
              src="https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_BBUSET_1080x1080_0.jpg"
              alt="img"
            />
            <img
              src="https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_102124_1080x1080_0.jpg"
              alt="img"
            />
            <img
              src="https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_prod_102124_1080x1080_1.jpg"
              alt="img"
            />
          </div>
          <div className={styles.productdetailsleft}>
            <img
              src="https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_BBUSET_1080x1080_0.jpg"
              alt="img"
            />
          </div>
          <div className={styles.productdetailsright}>
            <div>
              <div>
                <h1> Luxe &amp; Glow</h1>
                <h2>4 luxurious formulas for lids and lips</h2>
              </div>
              <div className={styles.textaling}>
                <span>$83.00</span>
                <div className={styles.textaling1}>$104 Value</div>
                <div>Write the First Review</div>
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
              <img src="logo1.png" alt="img" />
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.heading}> you may also like</div>
        <New />
        <hr />
        <div className={styles.heading}> Coustmer Reviews</div>
        <div className={styles.reviev}>
          <div className={styles.reviev1}>
            <div className={styles.reviev11}>Coustmer Reviewe</div>
            <div className={styles.reviev12}>ask &amp; answer</div>
          </div>
          <div className={styles.reviev2}>
            <u>Write the First Reviews</u>
          </div>
        </div>
        <div className={styles.lastdiv}>
          <img
            src="https://www.bobbibrowncosmetics.com/media/export/cms/products/v2_1080x1080/bb_sku_BBUSET_1080x1080_0.jpg"
            alt="img"
          />
          <div>
            <p className={styles.lastdivp1}>LUX &amp; GLOW</p>
            <p className={styles.lastdivp2}>$83.00</p>
          </div>
          <button>ADD TO BAG</button>
          <p>A Few Left!</p>
        </div>
      </div>
    </>
  );
};
export default SingleProductPage;