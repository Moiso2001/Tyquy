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
                <thead className={styles.prices__grid_head}>            
                    <tr>
                      <th className={styles.prices__head_tamaño}>Tamaño</th>   
                      <div className={styles.prices__div_head}>  
                        <th className={styles.prices__head_dias}>2 Dias<br/><span>/semana</span></th>
                        <th className={styles.prices__head_dias}>3 Dias<br/><span>/semana</span></th>
                        <th className={styles.prices__head_dias}>5 Dias<br/><span>/semana</span></th>
                      </div>
                    </tr>
                    
                </thead>
                <tbody className={styles.prices__grid_body}>
                    <tr>
                      <td className={styles.body__tamaño}>
                        <div>Pequeño<br/><span className={styles.body__peso}>(hasta 10KG)</span></div>
                      </td>
                      <div className={styles.prices__div_numberPrice}>
                        <td>$270.000</td>
                        <td>$290.000</td>
                        <td>$320.000</td>
                      </div>
                    </tr>

                    <tr>
                      <td className={styles.body__tamaño}>
                        <div>Mediano<br/><span className={styles.body__peso}>(10KG - 20KG)</span></div>
                      </td>
                      <div className={styles.prices__div_numberPrice}>
                        <td>$298.000</td>
                        <td>$315.000</td>
                        <td>$350.000</td>
                      </div>
                    </tr>

                    <tr>
                      <td className={styles.body__tamaño}>
                        <div>Grande<br/><span className={styles.body__peso}>(20KG - 30KG)</span></div>
                      </td>
                      <div className={styles.prices__div_numberPrice}>
                        <td>$340.000</td>
                        <td>$360.000</td>
                        <td>$400.000</td>
                      </div>
                    </tr>

                    <tr>
                      <td className={styles.body__tamaño}>
                        <div>Enorme<br/><span className={styles.body__peso}>(30KG en adelante)</span></div>
                      </td>
                      <div className={styles.prices__div_numberPrice}>
                        <td>$385.000</td>
                        <td>$405.000</td>
                        <td>$450.000</td>
                      </div>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}
