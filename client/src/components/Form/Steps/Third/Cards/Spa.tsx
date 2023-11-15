// import React from 'react'

/* Styles */
import styles from "./Cards.module.css"

/* Icons */
import dogSpaImage from "../assets/dog-spa.jpg"

export default function Spa() {
  return (
    <div className={styles.spa__div_global}>
        <div>
            <img src={dogSpaImage}/>
        </div>
        
        <div className={styles.spa__div_info}>
            <div className={styles.spa__info_div_header}>
                <h3>Dog Spa</h3>
                <span>¡Mimos y Cuidados para tu peludo amigo!</span>
            </div>

            <div className={styles.spa__info_div_body}>
                <p>
                    En nuestro Dog Spa, consentimos a tu peludo amigo como se merece. 
                    Nuestros expertos en cuidado canino ofrecen una experiencia de 
                    relajación y belleza que dejará a tu perro sintiéndose como una 
                    verdadera estrella.
                </p>
                <p>
                    Para completar tu registro en nuestro servicio de Dog Spa, por favor, 
                    contáctanos a través de WhatsApp dando clic en “Continuar”.
                </p>
            </div>
        </div>
    </div>
  )
}
