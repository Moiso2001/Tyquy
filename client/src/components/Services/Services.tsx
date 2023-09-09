// import React from 'react'

/* Utils */
import { services } from "../../utils/constants";

/* Components */
import Card from "./Cards/Card";

export default function Services() {
  return (
    <div>
      {/* Title */}
      <div>
        <h2>Nuestros servicios</h2>
      </div>

      {/* Cards */}
      <div>
        {services.map(service => 
          <Card
            key={service.id}
            {...service}
          />)
        }
      </div>
    </div>
  )
}
