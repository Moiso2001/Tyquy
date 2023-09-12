/* React */
import {useState, useEffect} from 'react'

/* Lottie */
import dogAnimation from "../../assets/lottie/animation_dog.json"
import Lottie from "lottie-react";

/* CSS */
import Opinion from "../Opinion/Opinion";
import styles from "./Head.module.css";

/* Images */
import greekPattern from "../../assets/greek decoration/Greek pattern horizontal.png"
import logoTyquyWhite from "../../assets/logo white.png"
import homeDogs from "../../assets/homedogs.jpg"
import arrow from "../../assets/arrow.png";

/* UTILS */
import { opinions } from "../../utils/constants";

/* Definition */
import { OpinionDef } from '../../types/global';


export default function Head() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [opinionsToShow, setOpinions] = useState<OpinionDef[]>([])

    /* Catch the window width to be used on how many opinions will be displayed */
    useEffect(() => {
        const handleWindowResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener('resize', handleWindowResize);
    
        // Remove event listener when the component unmounts to avoid memory leaks
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    /* Opinion effect handler */
    useEffect(() => {
        if(windowWidth < 600){
            setOpinions(opinions.filter(e => e.id < 2));
        } else {
            setOpinions(opinions.filter(e => e.id < 3));
        }
    }, [windowWidth])


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
        <div className={styles.div_register}>
            <div className={styles.register__div_title}>
                <span>No esperes más para brindarle a tu mascota una experiencia unica.</span>
                <p>Necesitaremos unos datos de tu peludito, escribenos y uno de nuestros asesores te ayudara con la inscripcion.</p>
            </div>

            <img src={arrow} className={styles.register__arrow}/> 

            <div className={styles.register__div_button}>
                <Lottie animationData={dogAnimation} className={styles.register__dogAnimation}/>
                <button>Registra a tu peludito</button>
            </div>
        </div>

        {/* Opinions */}
        <div className={styles.div_opinion}>
            {/* Greek Pattern */}
            <img 
                className={styles.opinion__greekPattern} 
                src={greekPattern}
            />

            {opinionsToShow.map(opinion => 
            <Opinion
                key={opinion.id}
                {...opinion}
            />)}
        </div>

    </div>
  )
}
