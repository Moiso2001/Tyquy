import { Link } from 'react-router-dom'
// import React from 'react'

/* Icons */
import {AiFillHome} from "react-icons/ai"

export default function Final() {
  return (
    <div>
        <div>
            <h3>¡Bienvenido a la familia Tyquy!</h3>
        </div>

        <div>
            <p>Tu pago fue realizado exitosamente, en las siguientes 24 horas 
                nos comunicaremos contigo para cuadrar horas de recogida y 
                finalizar el registro.
            </p>

            <p>
                Pronto tu peludito estara disfrutando de todo lo que tenemos 
                preparado para el :)
            </p>
        </div>

        <Link to='/'>
            <div>
                <AiFillHome/>
            </div>
        </Link>
    </div>
  )
}
