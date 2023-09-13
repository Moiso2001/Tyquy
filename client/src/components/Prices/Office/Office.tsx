// import React from 'react'

/* CSS */
import styles from "./Office.module.css";

/* Images and icons */
import runeLine from "../../../assets/tribu decoration/Greek pattern horizontal.png"

export default function Office() {
  return (
    <div className={styles.div_global}>
        {/* Head */}
        <div className={styles.div_title}>
            <img src={runeLine} className={styles.title__runeIcon}/>

            <h3>Dog Office</h3>
            <div className={styles.title__div_day}>
                <span>Dia</span>
                <span>$40.000</span>
            </div>
        </div>

        {/* Description */}
        <div className={styles.div_description}>
            <span>Plan mensual</span>
        </div>

        {/* Prices Grid */}
        <div className={styles.div_prices}>
            <table>
                <thead>
                    <tr>
                      <th>Tamaño</th>
                      <th>2 Dias<br/>/semana</th>
                      <th>3 Dias<br/>/semana</th>
                      <th>5 Dias<br/>/semana</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                      <td>Pequeño<br/>(hasta 10KG)</td>
                      <td>$270.000</td>
                      <td>$290.000</td>
                      <td>$320.000</td>
                    </tr>
                    <tr>
                      <td>Mediano<br/>(hasta 10KG)</td>
                      <td>$298.000</td>
                      <td>$315.000</td>
                      <td>$350.000</td>
                    </tr>
                    <tr>
                      <td>Grande<br/>(hasta 10KG)</td>
                      <td>$340.000</td>
                      <td>$360.000</td>
                      <td>$400.000</td>
                    </tr>
                    <tr>
                      <td>Enorme<br/>(hasta 10KG)</td>
                      <td>$385.000</td>
                      <td>$405.000</td>
                      <td>$450.000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}
