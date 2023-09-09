// import React from 'react'

/* CSS */
import styles from "./Opinion.module.css";


type OpinionProps = {
    text: string
    owner: string
    img: string
    id: string | number
}

export default function Opinion({text, img, id, owner}: OpinionProps) {
  return (
    <div 
        key={id}
        className={styles.div__global}
    >
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
