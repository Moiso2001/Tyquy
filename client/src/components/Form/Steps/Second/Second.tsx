import {useState} from 'react'

/* Icons */
import {AiOutlinePlusCircle, AiOutlineCloseCircle} from "react-icons/ai";


type SecondProps = {
    setStep: React.Dispatch<React.SetStateAction<number>>
}

export default function Second({setStep}: SecondProps) {
  const [names,setNames] = useState([{id: 0, name: '', raza: '', edad: 0, peso: 0}])

  return (
    <div>
        <div>
            {names.map(name => 
                <div>
                    <div>
                        <span>Nombre del perrit@</span>
                        <input value={name.name}/>
                    </div>

                    <div>
                        <span>Raza</span>
                        <input value={name.raza}/>
                    </div>

                    <div>
                        <span>Edad</span>
                        <input value={name.edad}/>
                    </div>

                    <div>
                        <span>Peso</span>
                        <input value={name.peso}/>
                    </div>

                    {name.id > 0
                     ? <AiOutlineCloseCircle/>
                     : <AiOutlinePlusCircle/>
                    }
                </div>
            )}
        </div>  

        <div>

        </div>

        <div>

        </div>
    </div>
  )
}
