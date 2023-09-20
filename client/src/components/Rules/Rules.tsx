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
    <div className={styles.div_god}>
        {/* Head */}
        <div 
            style={{backgroundImage: `url(${ruleImage})`}}
            className={styles.div_title}
        >
            <h2>Reglas y Beneficios</h2>
        </div>

        <div className={styles.div_global}>

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
                <div className={styles.body__div_button}>
                    <a
                        href="https://wa.me/message/4AXJXK2W3FYFI1"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                        textDecoration: 'none', 
                        color: 'inherit',
                        }}
                    >
                        <div className={styles.div_button}>
                            <PiWhatsappLogoDuotone className={styles.button__whatsappIcon}/>
                            <button>Reserva por Whatsapp</button>
                        </div>
                    </a>
                </div>
            </div>


            <div className={styles.div_maps}>
                <Map/>
            </div>
        </div>

    </div>
  )
}
