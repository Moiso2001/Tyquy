import {useState} from 'react'

/* Icons */
import {AiOutlinePlusCircle, AiOutlineCloseCircle} from "react-icons/ai";
import {BsArrowLeftCircle} from "react-icons/bs"

/* Definitions */
import { FormType } from '../../Stepper';

type SecondProps = {
    setStep: React.Dispatch<React.SetStateAction<number>>
    setForm: React.Dispatch<React.SetStateAction<FormType>>
}

export default function Second({setStep}: SecondProps) {
  const [names,setNames] = useState([{id: 0, name: '', raza: '', edad: 0, peso: 0}])

  function updateNames(e: React.ChangeEvent<HTMLInputElement>, id: number) {
    const updatedNames = names.map((item) => {
      if (item.id === id) {
        return {...item, [e.target.name]: e.target.value };
      }
      return item;
    });

    setNames(updatedNames);
  }

  function deleteName(id: number) {
    const updatedNames = names.filter(name => name.id !== id);

    setNames(updatedNames)
  }


  return (
    <div>
        <div>
            {names.map(name => 
                <div>
                    <div>
                        <span>Nombre del perrit@</span>
                        <input 
                            onChange={e => updateNames(e, name.id)} 
                            name='name' 
                            value={name.name}
                        />
                    </div>

                    <div>
                        <span>Raza</span>
                        <input 
                            onChange={e => updateNames(e, name.id)} 
                            name='raza' 
                            value={name.raza}
                        />
                    </div>

                    <div>
                        <span>Edad</span>
                        <input 
                            onChange={e => updateNames(e, name.id)} 
                            type='number'
                            name='edad' 
                            value={name.edad}
                        />
                    </div>

                    <div>
                        <span>Peso</span>
                        <input
                            onChange={e => updateNames(e, name.id)}
                            type='number' 
                            name='peso' 
                            value={name.peso}
                        />
                    </div>

                    {name.id > 0
                     ? <AiOutlineCloseCircle onClick={() => deleteName(name.id)}/>
                     : <AiOutlinePlusCircle onClick={() => setNames([...names, {id: names.length, name: '', raza: '', edad: 0, peso: 0}])}/>
                    }
                </div>
            )}
        </div>  

        {/* Upload Images */}
        <div>

        </div>

        <div>
            <BsArrowLeftCircle onClick={() => setStep(step => step - 1)}/>
            <span onClick={() => setStep(step => step + 1)}>Continuar</span>
        </div>
    </div>
  )
}
