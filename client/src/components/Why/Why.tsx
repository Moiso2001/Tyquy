// import React from 'react'

/* Utils */
import { services, opinions } from "../../utils/constants"
import Opinion from "../Opinion/Opinion";
import Services from "../Services/Services"

export default function Why() {
  const twoOpinions = opinions.filter(opinion => opinion.id > 2);

  return (
    <div>
        {/* Title */}
        <div>
            <h2> ¿Por qué Tyquy Bayara?</h2>
        </div>

        {/* Description and list of services */}
        <div>
            <div>
                <p>¡Bienvenidos a nuestra guardería canina de confianza! Aquí, su peludo amigo experimentará cuidado de primera clase. Nuestro equipo dedicado ofrece atención personalizada, amplias áreas de juego y un entorno seguro. ¡Elije la felicidad y tranquilidad para tu mascota!</p>
            </div>

            <div>
              {services.map(service => 
                <Services
                  {...service}
                />)
              }
            </div>
        </div>

        {/* Opinions */}
        <div>
          {twoOpinions.map(opinion => 
            <Opinion
              {...opinion}
            />)
          }
        </div>
        
    </div>
  )
}
