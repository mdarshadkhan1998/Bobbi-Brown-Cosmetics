import React from 'react'
import styles from "./Offers.module.css";

const OffersJustMapping = (props) => {
  return (
    <div>
        <>
        <div className={styles.main}>
              <img src={props.imgurl} alt={"img"} />
              <p className={styles.mainp}>{props.name}</p>
              <p className={styles.mainp1}>{props.description}</p>
              <p className={styles.mainp2}>{props.target}</p>
            </div>
        </>
    </div>
  )
}

export default OffersJustMapping