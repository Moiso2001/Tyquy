// import React from 'react'


/* CSS */

/* Components */
import Office from "./Office/Office";
import Hotel from "./Hotel/Hotel";
import Spa from "./Spa/Spa";


export default function Prices() {
  return (
    <div>
        {/* Title */}
        <div>
            <h2>Conoce nuestras tarifas</h2>
        </div>

        {/* Cards of prices */}
        <div>
            <Office/>
            <Hotel/>
            <Spa/>
        </div> 
    </div>
  )
}
