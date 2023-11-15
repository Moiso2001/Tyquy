// import React from 'react'

/* Styles */
import styles from "./Cards.module.css"

/* Images */
import estandardPhoto from "../assets/standard2.jpg";
import esencialPhoto from "../assets/standard.jpeg";
import premiumPhoto from "../assets/standard3.jpg";

type OfficeProps = {
    handlePlanSelect: Function
}

export default function Office({handlePlanSelect}: OfficeProps) {
  return (
    <div className={styles.office__div_global}>
        <div onClick={() => handlePlanSelect('esencial')}>
            <img src={esencialPhoto}/>
            <div>
                <div>
                    <span>Plan Esencial</span>
                    <span>2 dias/semana</span>
                </div>
                <p>
                    ¿Necesitas cuidado ocasional para tu perro? Elige nuestro 
                    "Plan Esencial" para 2 días a la semana. Tu peludito 
                    disfrutará de atención y diversión mientras tú te ocupas 
                    de tus asuntos.
                </p>
            </div>                    
        </div>

        <div onClick={() => handlePlanSelect('estandard')}>
            <img src={estandardPhoto}/>
            <div>
                <div>
                    <span>Plan Estandar</span>
                    <span>3 dias/semmana</span>
                </div>
                <p>
                    ¿Buscas un equilibrio entre cuidado y comodidad? 
                    Nuestro "Plan Estándar" de 3 días a la semana 
                    ofrece actividades y cuidado de calidad para tu 
                    perro mientras tú sigues tu rutina.
                </p>
            </div>
        </div>

        <div onClick={() => handlePlanSelect('premium')}>
            <img src={premiumPhoto}/>
            <div>
                <div>
                    <span>Plan Premium</span>
                    <span>5 dias/semana</span>
                </div> 
                <p>
                    ¿Deseas lo mejor para tu amigo peludo? Nuestro 
                    "Plan Premium" de 5 días a la semana garantiza 
                    una experiencia de guardería completa con atención
                    constante y actividades emocionantes. 
                </p>
            </div>
        </div>
    </div>
  )
}
