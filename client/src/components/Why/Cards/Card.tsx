// import React from 'react'

/* CSS */
import styles from "./Card.module.css";

type CardProps = {
    id: number
    title: string
    text: string
    icon: string
}

export default function Card({id, title, text, icon}: CardProps) {
  return (
    <div 
      className={styles.div__global}
      key={id}
    >
        <img src={icon}/>
        
        <div>
            <span>{title}</span>
            <p>{text}</p>
        </div>
    </div>
  )
}
