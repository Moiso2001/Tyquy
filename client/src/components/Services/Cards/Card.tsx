import {useEffect, useState} from 'react'

/* CSS */
import styles from "./Card.module.css"

/* Icons and images */
import rune1 from "../../../assets/tribu decoration/rune1.png"
import rune2 from "../../../assets/tribu decoration/rune2.png"
import rune3 from "../../../assets/tribu decoration/rune3.png"

import runeCircle from "../../../assets/tribu decoration/Greek pattern horizontal.png"


type CardProps = {
    title: string
    text: string
    img: string
    id: number
}

export default function Card({title,text,img}: CardProps) {
    const [randomNumber, setRandomNumber] = useState<Number>()

    useEffect(() => {
        ra
    }, [])

  return (
    <div className={styles.div_global}>
        <img src={img} className={styles.global__image}/>

        <div className={styles.div_info}>
            {/* Icons */}




            <div className={styles.info__div_text}>
                <span>{title}</span>
                <p>{text}</p>
            </div>
            <div className={styles.info__div_button}>
                <button>Ver precios</button>
            </div>
        </div>
    </div>
  )
}
