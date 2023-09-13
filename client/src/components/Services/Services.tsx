// import React from 'react'

/* Utils */
import { services } from "../../utils/constants";

/* Components */
import Card from "./Cards/Card";

/* CSS */
import styles from "./Services.module.css";

export default function Services() {
  return (
    <div className={styles.div_global}>
      {/* Title */}
      <div className={styles.div_title}>
        <h2>Nuestros servicios</h2>
      </div>

      {/* Cards */}
      <div className={styles.div_cards}>
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
