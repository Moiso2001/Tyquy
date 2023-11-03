import {useState} from 'react'

/* Icons */
import {AiOutlinePlusCircle, AiOutlineCloseCircle} from "react-icons/ai";
import {BsArrowLeftCircle} from "react-icons/bs"

/* Definitions */
import { FormType } from '../../Stepper';

type SecondProps = {
    form: {
        info: {
            id: number;
            name: string;
            raza: string;
            edad: number;
            peso: number;
        }[];
        photos: never[];
    }
    setStep: React.Dispatch<React.SetStateAction<number>>
    setForm: React.Dispatch<React.SetStateAction<FormType>>
}

export default function Second({setStep, setForm, form}: SecondProps) {
  const [names,setNames] = useState(form.info)
//   const [photos, setPhotos] = useState(form.photos)

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

  function updateForm() {
    setForm(prevForm => ({...prevForm, second: {info: names, photos: []}}))
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
            {names.map(dog => 
              <div>
                <label>{dog.name} foto (opcional)</label>
                <input 
                  name={`${dog.name}_photo`} 
                  type='file' 
                  accept='.jpg, .jpeg, .png'
                  onChange={e => {}}
                />
              </div>
            )}
        </div>

        <div>
            <BsArrowLeftCircle onClick={() => setStep(step => step - 1)}/>
            <span onClick={() => {setStep(step => step + 1); updateForm()}}>Continuar</span>
        </div>
    </div>
  )
}
