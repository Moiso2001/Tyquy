// import React from 'react'

/* CSS */
import Opinion from "../Opinion/Opinion";
import styles from "./Head.module.css";

/* Images */
import homeDogs from "../../assets/homedogs.jpg"
import logoTyquyWhite from "../../assets/logo white.png"

/* UTILS */
import { opinions } from "../../utils/constants";

export default function Head() {
    const twoOpinions = opinions.filter(e => e.id < 3);

  return (
    <div className={styles.div_global}>
        {/* Head */}
        <div 
            style={{ backgroundImage: `url(${homeDogs})` }}
            className={styles.div_head}
        >
            <div className={styles.head__div_title}>
                <img src={logoTyquyWhite}/>
                <span>Hotel y Guardería Canina en Bogotá</span>
            </div>
            <div className={styles.head__div_body}>
                <div>
                    <p>
                        Guardería canina en entorno natural con áreas verdes y 
                        cuidado excepcional, cerca de las afueras de la ciudad.
                    </p>
                </div>
                <div className={styles.head_body__div_button}>
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
        <div>
            {/* Greek Pattern */}
            <img/>

            {twoOpinions.map(opinion => 
            <Opinion
                key={opinion.id}
                {...opinion}
            />)}
        </div>

    </div>
  )
}
