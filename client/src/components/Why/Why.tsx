import {useEffect, useState} from 'react'

/* Utils */
import { benefits, opinions } from "../../utils/constants"

/* Components */
import Opinion from "../Opinion/Opinion";
import Card from "./Cards/Card";

/* CSS */
import styles from "./Why.module.css"

/* Images */
import  grassBG from "../../assets/grass.png";
import muiscaMask from "../../assets/tribu decoration/muiscaMask.png"
import greekPattern from "../../assets/tribu decoration/pngwing.com (1) (1).png"
import greekPatternVertical from "../../assets/tribu decoration/Greek pattern horizontal.png"


/* Definitions */
import { OpinionDef } from '../../types/global';

export default function Why() {
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
          setOpinions(opinions.filter(e => e.id === 3));
      } else {
          setOpinions(opinions.filter(e => e.id > 2));
      }
  }, [windowWidth])

  return (
    <div className={styles.div_global}>
        {/* Title */}
        <div 
          className={styles.div_title}
          style={{backgroundImage: `url(${grassBG})`}}
        >
          <img
            src={muiscaMask}
            className={styles.title__muiscaMask}
          />
          <h2> ¿Por qué Tyquy Bayara?</h2>
        </div>

        {/* Description and list of services */}
        <div className={styles.div_benefits}>
          <div className={styles.benefits__div_title}>
            <p>¡Bienvenidos a nuestra guardería canina de confianza! Aquí, su peludo amigo experimentará cuidado de primera clase. Nuestro equipo dedicado ofrece atención personalizada, amplias áreas de juego y un entorno seguro. ¡Elije la felicidad y tranquilidad para tu mascota!</p>
          </div>

          <div className={styles.benefits__div_cards}>
            <img src={greekPattern} className={styles.benefit__greek_pattern}/>
            {benefits.map(benefit => 
              <Card
                key={benefit.id}
                {...benefit}
              />
            )}
          </div>
        </div>

        <div className={styles.div_opinion}>
            <img 
                className={styles.opinion__greekPattern1} 
                src={greekPatternVertical}
            />
            <img 
                className={styles.opinion__greekPattern2} 
                src={greekPatternVertical}
            />

          {opinionsToShow.map(opinion => 
            <Opinion
              key={opinion.id}
              {...opinion}
            />)
          }
        </div>   
    </div>
  )
}
