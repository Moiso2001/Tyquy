// import React from 'react'

/* CSS */
import styles from "./Opinion.module.css";


export type OpinionProps = {
    text: string
    owner: string
    img: string
    id: number
}

export default function Opinion({text, img, owner}: OpinionProps) {
  return (
    <div className={styles.div__global}>
        <img/>

        <div>
            <img src={img}/>
            <div>
                <p>{text}</p>
                <span>{owner}</span>
            </div>
        </div>
    </div>
  )
}
