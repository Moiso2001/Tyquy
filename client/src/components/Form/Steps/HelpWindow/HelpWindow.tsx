import {useState} from 'react'

/* Icon */
import {BsArrowRightCircle, BsArrowLeftCircle} from "react-icons/bs"


export default function HelpWindow() {
  const [isHidden, setHidden] = useState(true)

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
            {isHidden
              ?<BsArrowRightCircle onClick={setHidden(status => !status)}/>
              :<BsArrowLeftCircle onClick={setHidden(status => !status)}/>
            }
        </div>
    </div>
  )
}
