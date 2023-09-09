// import React from 'react'

/* CSS */
import styles from "./Services.module.css";

type ServicesProps = {
    id: number
    title: string
    text: string
    icon: string
}

export default function Services({id, title, text, icon}: ServicesProps) {
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
