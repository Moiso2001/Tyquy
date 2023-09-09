// import React from 'react'

/* CSS */
import styles from "./Office.module.css";

export default function Office() {
  return (
    <div>
        {/* Head */}
        <div>
            <h3>Dog Office</h3>
            <div>
                <span>Dia</span>
                <span>$40.000</span>
            </div>
        </div>

        {/* Description */}
        <div>
            <span>Plan mensual</span>
        </div>

        {/* Prices Grid */}
        <div>
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
