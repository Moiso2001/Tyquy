import React from 'react'

/* Icon */
import {BsArrowRightCircle, BsArrowLeftCircle} from "react-icons/bs"

type HelpWindowProps = {
    hidden: boolean
}

export default function HelpWindow({hidden}: HelpWindowProps) {
  return (
    <div>
        <div>
            <p>Queremos conocerte! A continuacion te pediremos cierta 
                informacion importante para que hagas parte de nuestra 
                familia, cualquier duda puedes escribirnos a nuestro 
                whatsapp dando click aqui.
            </p>
        </div>

        <div>
            {hidden
              ?<BsArrowRightCircle/>
              :<BsArrowLeftCircle/>
            }
        </div>
    </div>
  )
}
