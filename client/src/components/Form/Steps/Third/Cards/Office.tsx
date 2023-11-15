import {useState} from 'react'

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
    const [planFocused, setPlanFocused] = useState('')

    function isFocused(name: string){
        if(planFocused === name){
            return true
        } else {
            return false
        }
    }

  return (
    <div className={styles.office__div_global}>
        <div 
          onClick={() => {handlePlanSelect('esencial'); setPlanFocused('esencial')}}
          className={isFocused('esencial') ? styles.office__div_esencial__focused : styles.office__div_esencial}
        >
            <img src={esencialPhoto}/>
            <div className={styles.esencial__div_info}>
                <div className={styles.info__div_header}>
                    <span className={styles.header__title}>Plan Esencial</span>
                    <span className={styles.header__subtitle}>2 dias/semana</span>
                </div>
                <p>
                    ¿Necesitas cuidado ocasional para tu perro? Elige nuestro 
                    "Plan Esencial" para 2 días a la semana. Tu peludito 
                    disfrutará de atención y diversión mientras tú te ocupas 
                    de tus asuntos.
                </p>
            </div>                    
        </div>

        <div 
            onClick={() => {handlePlanSelect('estandard'); setPlanFocused('estandard')}}
            className={isFocused('estandard') ? styles.office__div_estandard__focused : styles.office__div_estandard}
        >
            <img src={estandardPhoto}/>
            <div className={styles.estandard__div_info}>
                <div className={styles.info__div_header}>
                    <span className={styles.header__title}>Plan Estandar</span>
                    <span className={styles.header__subtitle}>3 dias/semmana</span>
                </div>
                <p>
                    ¿Buscas un equilibrio entre cuidado y comodidad? 
                    Nuestro "Plan Estándar" de 3 días a la semana 
                    ofrece actividades y cuidado de calidad para tu 
                    perro mientras tú sigues tu rutina.
                </p>
            </div>
        </div>

        <div 
          onClick={() => {handlePlanSelect('premium'); setPlanFocused('premium')}}
          className={isFocused('premium') ? styles.office__div_premium__focused : styles.office__div_premium}
        >
            <img src={premiumPhoto}/>
            <div className={styles.premium__div_info}>  
                <div className={styles.info__div_header}>
                    <span className={styles.header__title}>Plan Premium</span>
                    <span className={styles.header__subtitle}>5 dias/semana</span>
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
