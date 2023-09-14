// import React from 'react'

/* Icons and images */
import {PiWhatsappLogoDuotone} from "react-icons/pi"
import ruleImage from "../../assets/rulesImage.png"

/* Components */
import Map from '../Map/Map';

/* CSS */
import styles from "./Rules.module.css";

export default function Rules() {
  return (
    <div>
        <div className={styles.div_global}>
            {/* Head */}
            <div 
                style={{backgroundImage: `url(${ruleImage})`}}
                className={styles.div_title}
            >
                <h2>Reglas y Beneficios</h2>
            </div>

            {/* Body */}
            <div className={styles.div_body}>
                <span>Requerimientos:</span>
                <ul>
                    <li>Vacunas al día (incluidas: tos de las perreras, rabia, Parvo y moquillo)</li>
                    <li>Copia carné vacunación </li>
                    <li>Contacto veterinario del perro</li>
                    <li>Mascota desparasitada</li>
                    <li>Copia carné desparasitación</li>
                    <li>Mascota despulgada</li>
                    <li>Mascota esterilizada</li>
                    <li>Edad mínima 6 meses</li>
                </ul>
            </div>

            <div className={styles.div_button}>
                <PiWhatsappLogoDuotone className={styles.button__whatsappIcon}/>
                <button>Reserva por Whatsapp</button>
            </div>
        </div>

        <div>
          <Map/>
        </div>
    </div>
  )
}
