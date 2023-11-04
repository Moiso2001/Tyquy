import {useCallback, useEffect, useState} from 'react'

import { v4 as uuidv4 } from 'uuid';

/* Icons */
import {AiOutlinePlusCircle, AiOutlineCloseCircle} from "react-icons/ai";
import {BsArrowLeftCircle} from "react-icons/bs"

/* Definitions */
import { FormType } from '../../Stepper';

type SecondProps = {
    form: {
        info: {
            id: string;
            name: string;
            raza: string;
            edad: string;
            peso: string;
        }[];
        photos: never[];
    }
    setStep: React.Dispatch<React.SetStateAction<number>>
    setForm: React.Dispatch<React.SetStateAction<FormType>>
}

type ErrorForm = {
  id?: string
  name?: string
  raza?: string
  edad?: string
  peso?: string
}

export default function Second({setStep, setForm, form}: SecondProps) {
  // const [photos, setPhotos] = useState(form.photos)
  const [names,setNames] = useState(form.info)

  const [error, setError] = useState<ErrorForm[]>([])


  /* Form Handlers */
  function updateNames(e: React.ChangeEvent<HTMLInputElement>, id: string) {
    const updatedNames = names.map((item) => {
      if (item.id === id) {
        return {...item, [e.target.name]: e.target.value };
      }
      return item;
    });

    setNames([...updatedNames]);
  }

  function deleteName(id: string) {
    const updatedNames = names.filter(name => name.id !== id);

    setNames(updatedNames)
  }

  function updateForm() {
    setForm(prevForm => ({...prevForm, second: {info: names, photos: []}}))
  }

  /* Validation */
  const validateForm = useCallback(() => {
    const error: ErrorForm[] = []

    names.map(dog => {
      const errorDog: ErrorForm = {id: dog.id}
      let addErrorDog = false

      if(dog.name.length === 0) {
        addErrorDog = true
        errorDog.name = 'Agrega el nombre de tu mascota'
      }
      
      if (!dog.edad || dog.edad === "0") {
        addErrorDog = true
        errorDog.edad = 'Debe tener un año o mas'
      }
      
      if (!dog.peso || dog.peso === "0") {
        addErrorDog = true
        errorDog.peso = 'Agrega el peso de tu mascota'
      }
      
      if(dog.raza.length === 0){
        addErrorDog = true
        errorDog.raza = 'Que raza es tu perrito'
      }

      if(addErrorDog){
        error.push(errorDog)
      }
    })

    setError(error)
  }, [names])

  useEffect(() => {
    validateForm()
  }, [validateForm])

  return (
    <div>
        <div>
            {names.map((name, index) => 
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

                    {index !== 0
                     ? <AiOutlineCloseCircle onClick={() => deleteName(name.id)}/>
                     : <AiOutlinePlusCircle onClick={() => {
                        if(names.length < 4){
                          setNames([...names, {id: uuidv4(), name: '', raza: '', edad: "0", peso: "0"}])
                        } else {
                          alert('Solo puedes agregar hasta 4 peluditos, escribenos si seran mas de 4!')
                        }
                      }}/>
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
                  // onChange={e => {}}
                />
              </div>
            )}
        </div>

        <div>
            <BsArrowLeftCircle onClick={() => setStep(step => step - 1)}/>
            <button 
              onClick={() => {setStep(step => step + 1); updateForm()}}
              disabled={error.length !== 0}
            >
              Continuar
            </button>
        </div>
    </div>
  )
}
