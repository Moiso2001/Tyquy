// import React from 'react'


/* CSS */
import styles from "./Prices.module.css"

/* Images and icons */
import dogPrice from "../../assets/dogPrices.png"

/* Components */
import Office from "./Office/Office";
import Hotel from "./Hotel/Hotel";
import Spa from "./Spa/Spa";


export default function Prices() {
  return (
    <div 
      id="prices"
      className={styles.div_global}
    >
        {/* Title */}
        <div 
          style={{backgroundImage: `url(${dogPrice})`}}
          className={styles.div_title}
        >
            <h2>Conoce nuestras tarifas</h2>
        </div>

        {/* Cards of prices */}
        <div className={styles.div_cards}>
            <Office/>
            <Hotel/>
            <Spa/>
        </div> 
    </div>
  )
}
