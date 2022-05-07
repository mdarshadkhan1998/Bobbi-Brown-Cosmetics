import React from "react";
import data from "../data.json";
import styles from "./Offers.module.css";
const Offers = () => {
  console.log(data);

  return (
    <>
      <div className={styles.heading}>today's offers</div>
      <div className={styles.flexdiv}>
        <div className={styles.flexdiv1}>
          <img
            src="https://www.bobbibrowncosmetics.com/media/export/cms/offers/SS22_Offers_Banner_MitigationBeautyEvent_VEEB_660x372.jpg"
            alt={"img"}
          />
        </div>
        <div className={styles.flexdiv2}>
          <span>MAY BEAUTY EVENT</span>
          <p>Get 30% off Vitamin Enriched Eye Base and 40% off select glow</p>
          <p>Discount automatically applied at checkout.</p>
          <div className={styles.flexdiv21}>
            <span>SHOP 40% OFF GLOW</span>
            <br />
            <span>SHOP 30% OFF EYE BASE</span>
          </div>
        </div>
      </div>
      <hr className={styles.horizontalline}></hr>
      <div className={styles.heading}>everyday offers &amp; services</div>
      <div className={styles.container}>
        {data.map(({ name, imgurl, description, target }) => {
          return (
            <div className={styles.main}>
              <img src={imgurl} alt={"img"} />
              <p className={styles.mainp}>{name}</p>
              <p className={styles.mainp1}>{description}</p>
              <p className={styles.mainp2}>{target}</p>
            </div>
          );
        })}
      </div>
      <div className={styles.lastdiv}>
        <div className={styles.lastdiv1}>
          <div>
            BB
            <u>ACCESS</u>
            <br />
            REWARDS
          </div>
        </div>

        <div className={styles.lastdiv2}>
          Join now and get <span>15% Off</span> your first order plus other
          exclusive perks.
        </div>

        <div className={styles.lastdiv3}>
          <input
            className={styles.lastdiv31}
            type="text"
            placeholder="Enter email address"
            name="PC_EMAIL_ADDRESS"
          />
          <input className={styles.lastdiv32} type="submit" value="SIGN UP" />
        </div>

        <div className={styles.lastdiv4}>
          {" "}
          <span>
            By joining, I accept BB<u>ACCESS</u> <u>Terms &amp; Conditions</u>{" "}
            and agree to receive Bobbi Brown marketing emails.
          </span>
        </div>
      </div>
      <div className={styles.textdivmain}>
        <div className={styles.textdiv}>
          <p>
            <span>
              *Offer starts on 5/3/2022 and ends on 5/4/2022 at 11:59PM
              PT.&nbsp;
            </span>
            <span>
              Get 30% off Vitamin Enriched Eye Base and 40% off select glow.
              Discount automatically applied at checkout.&nbsp;
            </span>
            <span>
              Offer available to U.S. residents only. Quantities are limited and
              offer is subject to availability, while supplies last. We reserve
              the right to substitute any free item offered with an item of
              equal or greater value. Only one per order. Offer is subject to
              change or cancellation without notice. Offer may not be used in
              combination with any other offer or discount. Free items are not
              eligible for returns or exchanges. *Applicable purchase amount and
              offer does not include the purchase of gift sets; eGift cards;
              sales tax; shipping and handling; items noted as not eligible;
              items that are not in stock at the time of purchase; pending
              purchases or purchases made prior to the start of the offer or
              after the offer ends. All purchases are subject to bank
              authorization prior to processing. Only authorized purchases will
              be processed and shipped. Other restrictions may apply. If you
              have placed an order containing a free promotional item(s) and
              such order also contains a backordered or pre-order item, in the
              event that you cancel either the backordered or pre-order item
              prior to the promotional item(s) shipping, and in doing so the
              order total is below the promotional offer threshold, you will no
              longer be eligible for the free promotional item(s), the cancelled
              item(s) and promotional item(s) items from your order will be
              cancelled, and you will not be charged. If the cancelled portion
              of your order was pre-paid, a full refund will be issued for all
              pre-paid items cancelled.
            </span>
          </p>
        </div>
      </div>
    </>
  );
};
export default Offers;
