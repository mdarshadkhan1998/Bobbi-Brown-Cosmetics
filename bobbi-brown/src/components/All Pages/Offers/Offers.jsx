import React from "react";
import styles from "./Offers.module.css";
import OffersJustMapping from "./OffersJustMapping";
const Offers = () => {
  const data = [
    {
      key: 1,
      name: "last chance",
      description:
        "Get up to 30% off select products before they’re gone for good.",
      imgurl:
        "https://www.bobbibrowncosmetics.com/media/export/cms/offers/BB-OfferLP-LastChance-Tile_@2x.gif",
      target: "Shop Now",
      selection4_url:
        "https://www.bobbibrowncosmetics.com/products/16111/Makeup/last-call",
    },
    {
      key: 2,
      name: "free samples",
      description: "Select at checkout with any order.*",
      imgurl:
        "https://www.bobbibrowncosmetics.com/media/export/cms/offers/FH20_OfferLP-Minis.jpg",
      target: "Shop Now",
      selection4_url: "https://www.bobbibrowncosmetics.com/products/14460/new",
    },
    {
      key: 3,
      name: "free shipping",
      description: "On all orders when you join BB Access.",
      imgurl:
        "https://www.bobbibrowncosmetics.com/media/export/cms/offers/FH20_OfferLP-FreeShipping.jpg",
      target: "Learn More",
      selection4_url:
        "https://www.bobbibrowncosmetics.com/customer-service-shipping#shipping-options",
    },
    {
      key: 4,
      name: "NO-QUESTION\nRETURNS",
      description: "On foundations, correctors,     and concealers.",
      imgurl:
        "https://www.bobbibrowncosmetics.com/media/export/cms/offers/FH20_OfferLP-FreeReturns.jpg",
      target: "Shop Now",
      selection4_url:
        "https://www.bobbibrowncosmetics.com/products/14017/Makeup/Face-and-Cheek/Foundation",
    },
    {
      key: 5,
      name: "Afterpay",
      description: "Shop now and pay in four equal installments.",
      imgurl:
        "https://www.bobbibrowncosmetics.com/media/export/cms/offers/FH20_OfferLP-Afterpay.jpg",
      target: "Learn More",
      selection4_url: "https://www.bobbibrowncosmetics.com/afterpay",
    },
    {
      key: 6,
      name: "connect with an artist",
      description:
        "Text or chat for expert advice and\nbook free virtual consultations with our artists—anytime, anywhere.",
      imgurl:
        "https://www.bobbibrowncosmetics.com/media/export/cms/offers/FH20_OfferLP-Connect.jpg",
      target: "Learn More",
      selection4_url: "https://www.bobbibrowncosmetics.com/digital-services",
    },
  ];

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
        {data.map((e) => {
          return (
            <OffersJustMapping key={e.id} {...e}/>
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