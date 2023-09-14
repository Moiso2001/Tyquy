// import React from 'react'

/* CSS */
import styles from "./Hotel.module.css"

/* Images and icons */
import runeLine from "../../../assets/tribu decoration/Greek pattern horizontal.png"

/* Lottie */
import dogHotel from "../../../assets/lottie/dog_sleep.json"
import Lottie from "lottie-react";


export default function Hotel() {
  return (
    <div 
      id="Dog Hotel"
      className={styles.div_global}
    >
      {/* Title */}
      <div className={styles.div_title}>
        <img src={runeLine} className={styles.title__runeIcon}/>
        <Lottie animationData={dogHotel} className={styles.title__dogAnimation}/>
        <h3>Dog Hotel</h3>
      </div>

      {/* Description */}
      <div className={styles.div_description}>
        <span>Estadia Nocturna</span>
        <span>$50.000<br/><span style={{fontSize: '0.6rem'}}>(cualquier peso o raza)</span></span>
      </div>
    </div>
  )
}
