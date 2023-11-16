import { Link } from 'react-router-dom'
// import React from 'react'

/* Icons */
import {AiFillHome} from "react-icons/ai"

/* Styles */
import styles from "./Final.module.css";
import muiscaMask from "../../../../assets/tribu decoration/muiscaMask.png"

export default function Final() {
  return (
    <div className={styles.div_global}>
        <div className={styles.div_title}>
            <h3>¡Bienvenido a la familia Tyquy!</h3>
        </div>

        <div className={styles.div_body}>
            <img src={muiscaMask}/>
            <p>
                Recibimos tu informacion, en las siguientes 24 horas nos 
                comunicaremos contigo para cuadrar horas de recogida y finalizar 
                el pago. 
            </p>

            <p>
                Pronto tu peludito estara disfrutando de todo lo que tenemos 
                preparado para el :)
            </p>
        </div>

        <Link to='/'>
            <div className={styles.div_button}>
                <AiFillHome className={styles.button__home}/>
            </div>
        </Link>
    </div>
  )
}
