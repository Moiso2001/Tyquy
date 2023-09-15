// import React from 'react';

/* Icons */
import {BsFillTelephoneFill, BsClock, BsInstagram, BsWhatsapp} from "react-icons/bs";
import {ImMail4} from "react-icons/im";
import logo from "../../assets/logo white.png"
import linktreeQR from "../../assets/linktree qr.jpg"

/* CSS */
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.div_global}>
        <div className={styles.div_logo}>
            <img src={logo}/>
        </div>

        <div className={styles.div_legalText}>
            <span>©2023  Tyquy Bayara</span>
            <span>Todos los derechos reservados</span>
        </div>

        <div className={styles.div_info}>
            <div className={styles.info__section}>
                <ImMail4 className={styles.info__icon}/>
                <span>tyquybayarapet@gmail.com</span>
            </div>
            <div className={styles.info__section}>
                <BsFillTelephoneFill className={styles.info__icon}/>
                <span>+57 3002343569</span>
            </div>
            <div className={styles.info__section}>
                <BsClock className={styles.info__icon}/>
                <div>
                    <div>
                        <span>Lunes - Sabados:</span>
                        <span>7:00am - 7:00pm</span>
                    </div>
                    <div>
                        <span>Domingos:</span>
                        <span>10:00am - 4:00pm</span>
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.div_social}>
            <div>
                <h3>Siguenos en nuestras redes</h3>
            </div>
            <div className={styles.social__div_icons}>
                <a
                    href="https://instagram.com/tyquy_bayara?utm_source=qr&igshid=OGU0MmVlOWVjOQ"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: 'none', 
                      color: 'inherit',
                    }}
                >
                    <BsInstagram className={styles.social__icon}/>
                </a>
                <img src={linktreeQR}/>
                <a
                    href="https://wa.me/message/4AXJXK2W3FYFI1"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      textDecoration: 'none', 
                      color: 'inherit',
                    }}
                >    
                    <BsWhatsapp className={styles.social__icon}/>
                </a>
            </div>
        </div>
    </div>
  )
}
