// import React from 'react'

/* Icons */
import {PiWhatsappLogoDuotone} from "react-icons/pi"

/* Images and icons */
import runeLine from "../../../assets/tribu decoration/Greek pattern horizontal.png";

/* CSS */
import styles from "./Spa.module.css";

/* Lottie */
import dogSpa from "../../../assets/lottie/dog_spa.json"
import Lottie from "lottie-react";


export default function Spa() {
  return (
    <div 
      id="Dog Spa"
      className={styles.div_global} 
    >
      {/* Title */}
      <div className={styles.div_title}>
        <img src={runeLine} className={styles.title__runeIcon}/>
        <Lottie animationData={dogSpa} className={styles.title__dogAnimation}/>
        <h3>Dog Spa</h3>
      </div>

      {/* Description */}
      <div className={styles.div_description}>
        <div>
          <p>El precio del spa variara dependiendo de la raza y tamaño del peludito. Escribenos para darte un precio especial!</p>
        </div>
        <a
          href="https://wa.me/message/4AXJXK2W3FYFI1"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: 'none', 
            color: 'inherit',
          }}
        >
          <div className={styles.description__div_button}>
            <PiWhatsappLogoDuotone className={styles.description__icon_whatsapp}/>
            <button>Contactanos</button>
          </div>
        </a>
      </div>
    </div>
  )
}
