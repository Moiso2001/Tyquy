// import React from 'react'

/* Utils */
import { services } from "../../utils/constants";

/* Components */
import Card from "./Cards/Card";

/* CSS */
import styles from "./Services.module.css";

/* Icons and images */
import runeLine from "../../assets/tribu decoration/Greek pattern horizontal.png"


export default function Services() {
  return (
    <div className={styles.div_global}>
      {/* Title */}
      <div className={styles.div_title}>
        <h2>Nuestros servicios</h2>
      </div>

      {/* Cards */}
      <div className={styles.div_cards}>
        <img src={runeLine} className={styles.cards__greekLine1}/>
        <img src={runeLine} className={styles.cards__greekLine2}/>

        {services.map(service => 
          <Card
            key={service.id}
            {...service}
          />)
        }
      </div>
    </div>
  )
}
