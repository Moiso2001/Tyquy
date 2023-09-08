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
                <p>
                    No esperes más para brindarle a tu mascota una experiencia unica.
                </p>
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
