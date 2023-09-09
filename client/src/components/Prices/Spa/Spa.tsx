// import React from 'react'

/* Icons */
import {PiWhatsappLogoDuotone} from "react-icons/pi"

/* CSS */
export default function Spa() {
  return (
    <div>
      {/* Title */}
      <div>
        <h3>Dog Spa</h3>
      </div>

      {/* Description */}
      <div>
        <div>
          <p>El precio del spa variara dependiendo de la raza y tamaño del peludito. Escribenos para darte un precio especial!</p>
        </div>
        <div>
          <PiWhatsappLogoDuotone/>
          <button>Contactanos</button>
        </div>
      </div>
    </div>
  )
}
