// import React from 'react'

/* Icons */
import {PiWhatsappLogoDuotone} from "react-icons/pi"

export default function Rules() {
  return (
    <div>
        {/* Head */}
        <div>
            <h2>Reglas y Beneficios</h2>
        </div>

        {/* Body */}
        <div>
            <span>Requerimientos</span>
            <ul>
                <li>Vacunas al día (incluidas: tos de las perreras, rabia, Parvo y moquillo)</li>
                <li>Copia carné vacunación </li>
                <li>Contacto veterinario del perro</li>
                <li>Mascota desparasitada</li>
                <li>Copia carné desparasitación</li>
                <li>Mascota despulgada</li>
                <li>Mascota esterilizada</li>
                <li>Edad mínima 6 meses</li>
            </ul>
        </div>

        <div>

        </div>

        <div>
            <PiWhatsappLogoDuotone/>
            <button>Reserva por Whatsapp</button>
        </div>
    </div>
  )
}
