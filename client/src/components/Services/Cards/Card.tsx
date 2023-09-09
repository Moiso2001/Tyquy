// import React from 'react'

/* CSS */
import styles from "./Card.module.css"

type CardProps = {
    title: string
    text: string
    img: string
    id: number
}

export default function Card({title,text,img,id}: CardProps) {
  return (
    <div
        className={styles.div__global}
        key={id}
    >
        <img src={img}/>

        <div>
            <div>
                <span>{title}</span>
                <p>{text}</p>
            </div>
            <div>
                <button>Ver precios</button>
            </div>
        </div>
    </div>
  )
}
