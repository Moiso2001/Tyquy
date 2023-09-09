// import React from 'react'

/* CSS */
import styles from "./Head.module.css";

export default function Head() {
  return (
    <div className={styles.divGlobal}>
        {/* Head */}
        <div>
            <div>
                <img/>
                <span>Hotel y Guardería Canina en Bogotá</span>
            </div>
            <div>
                <div>
                    <p>
                        Guardería canina en entorno natural con áreas verdes y 
                        cuidado excepcional, cerca de las afueras de la ciudad.
                    </p>
                </div>
                <div>
                    <button>Contáctanos</button>
                </div>
            </div>
        </div>

        {/* Register button */}
        <div>
            <div>
                <span>No esperes más para brindarle a tu mascota una experiencia unica.</span>
                <p>Necesitaremos unos datos de tu peludito, escribenos y uno de nuestros asesores te ayudara con la inscripcion.</p>
            </div>
            
            {/* Dog and arrow Icons */}

            <div>
                <button>Registra a tu peludito</button>
            </div>
        </div>

        {/* Opinions */}

    </div>
  )
}
