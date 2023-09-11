/* REACT */
import {useState} from 'react'

/* ICONS */
import {AiFillInstagram, AiOutlineClose} from "react-icons/ai"
import {IoLogoWhatsapp} from "react-icons/io5"
import {HiMenu} from "react-icons/hi"

/* CSS */
import styles from "./Navbar.module.css";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)


  return (
    <div className={styles.div_global}>

        {/* Phone UI */}
        <nav className={styles.nav_mobile}>
            <div onClick={() => setIsOpen(state => !state)}>
                {
                    isOpen
                    ? <AiOutlineClose className={styles.mobile__icon}/>
                    : <HiMenu className={styles.mobile__icon}/>
                }
            </div>

            <div className={`${isOpen ? styles.mobile__open_nav : styles.mobile__close_nav}`}>
                <div className={styles.mobile__open_span}>
                    <span>Inicio</span>
                </div>
                <div className={styles.mobile__open_span}>
                    <span>Nuestros servicios</span>
                </div>
                <div className={styles.mobile__open_span}>
                    <span>Precios</span>
                </div>
                <div className={styles.mobile__open_span}>
                    <span>FAQ</span>
                </div>
                <hr/>
                <div>
                    <IoLogoWhatsapp className={styles.mobile__icon__social}/>
                    <AiFillInstagram className={styles.mobile__icon__social}/>
                </div>
            </div>
        </nav>

        {/* Desktop UI */}
        <nav className={styles.nav_desktop}>
            <div>
                <span>Inicio</span>
            </div>
            <div>
                <span>Nuestros servicios</span>
            </div>
            <div>
                <span>Precios</span>
            </div>
            <div>
                <span>FAQ</span>
            </div>
        </nav>
    </div>
  )
}
