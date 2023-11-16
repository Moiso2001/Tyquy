// import React from 'react'

/* Images and styles */
import styles from "./Cards.module.css"

import dogHotelPicture from "../assets/dog-sleep.jpeg"

export default function Hotel() {
  return (
    <div className={styles.hotel__div_global}>
        <div>
            <img src={dogHotelPicture}/>
        </div>
    
        <div className={styles.hotel__div_info}>
            <div className={styles.hotel__info_div_header}>
                <h3>Dog Hotel</h3>
                <span>Tu hogar temporal para tu amigo peludo</span>
            </div>

            <div className={styles.hotel__info_div_body}>
                <p>
                    Ofrecemos alojamiento seguro y cómodo para perros de todas las razas y 
                    tamaños. Incluye alimentación de calidad, paseos diarios, atención 
                    personalizada y áreas de juego. El costo es de $50,000 COP por noche, 
                    independientemente del tamaño o raza de tu perro. Confía en nosotros 
                    para cuidar a tu amigo peludo como si fuera parte de nuestra familia. 
                    ¡Reserva ahora para una estancia relajante para tu perro mientras te 
                    ocupas de tus asuntos!
                </p>
            </div>
        </div>
    </div>
  )
}
