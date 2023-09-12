// import React from 'react'

/* CSS */
import styles from "./Opinion.module.css";

/* Icons */

import runeM from "../../assets/greek decoration/rune m.png"


export type OpinionProps = {
    text: string
    owner: string
    img: string
    id: number
}

export default function Opinion({text, img, owner}: OpinionProps) {
  return (
    <div className={styles.div__global}>
        <img 
          className={styles.global__rune_icon}
          src={runeM}
        />

        <div className={styles.global__div_info}>
            <img src={img}/>
            <div className={styles.info__div_opinion}>
                <hr/>
                <p>{text}</p>
                <div className={styles.opinion__div_span}>
                  <span>- {owner}</span>
                </div>
            </div>
        </div>
    </div>
  )
}
