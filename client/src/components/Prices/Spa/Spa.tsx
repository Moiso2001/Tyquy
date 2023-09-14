// import React from 'react'

/* Icons */
import {PiWhatsappLogoDuotone} from "react-icons/pi"

/* Images and icons */
import runeLine from "../../../assets/tribu decoration/Greek pattern horizontal.png";

/* CSS */
import styles from "./Spa.module.css";

export default function Spa() {
  return (
    <div className={styles.div_global}>
      {/* Title */}
      <div className={styles.div_title}>
        <img src={runeLine} className={styles.title__runeIcon}/>
        <h3>Dog Spa</h3>
      </div>

      {/* Description */}
      <div className={styles.div_description}>
        <div>
          <p>El precio del spa variara dependiendo de la raza y tamaño del peludito. Escribenos para darte un precio especial!</p>
        </div>
        <div className={styles.description__div_button}>
          <PiWhatsappLogoDuotone className={styles.description__icon_whatsapp}/>
          <button>Contactanos</button>
        </div>
      </div>
    </div>
  )
}
