// import React from 'react'

/* Utils */
import { benefits, opinions } from "../../utils/constants"

/* Components */
import Opinion from "../Opinion/Opinion";
import Card from "./Cards/Card";

/* CSS */
import styles from "./Why.module.css"


export default function Why() {
  const twoOpinions = opinions.filter(opinion => opinion.id > 2);

  return (
    <div className={styles.div_global}>
        {/* Title */}
        <div className={styles.div_title}>
          <h2> ¿Por qué Tyquy Bayara?</h2>
        </div>

        {/* Description and list of services */}
        <div className={styles.div_benefits}>
          <div>
            <p>¡Bienvenidos a nuestra guardería canina de confianza! Aquí, su peludo amigo experimentará cuidado de primera clase. Nuestro equipo dedicado ofrece atención personalizada, amplias áreas de juego y un entorno seguro. ¡Elije la felicidad y tranquilidad para tu mascota!</p>
          </div>
          <div>
            {benefits.map(benefit => 
              <Card
                key={benefit.id}
                {...benefit}
              />
            )}
          </div>
        </div>

        {/* Opinions */}
        <div className={styles.div_opinion}>
          {twoOpinions.map(opinion => 
            <Opinion
              key={opinion.id}
              {...opinion}
            />)
          }
        </div>       
    </div>
  )
}
