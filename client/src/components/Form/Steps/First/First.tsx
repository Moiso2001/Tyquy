import {useCallback, useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

/* Icons */
import {AiOutlinePlusCircle, AiOutlineCloseCircle, AiOutlineHome} from "react-icons/ai";

/* Definitions */
import { FormType } from '../../Stepper';


type FirstProps = {
    setStep: React.Dispatch<React.SetStateAction<number>>
    form: {
      nombre: string
      celular: string;
      correo: string;
      direccion: string;
  }
  setForm: React.Dispatch<React.SetStateAction<FormType>>
}

type ErrorType = {
  nombre?: string
  celular?: string;
  correo?: string;
  direccion?: string;
}

export default function First({setStep, form, setForm}: FirstProps) {
  const [formInfo,setFormInfo] = useState(form)
  const [error, setError] = useState<ErrorType>({})

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
      setFormInfo(prevForm => ({...prevForm, [e.target.name]: e.target.value}))
  }

  const validationForm = useCallback(() => {
    let newError: ErrorType = {}

    if(formInfo.nombre.length === 0){
      newError.nombre = 'El nombre no puede estar vacio'
    }

    setError(newError)
  },[formInfo])

  useEffect(() => {
    validationForm()
  }, [validationForm])

  console.log(error)
  return (
      <div>
        <div>

        </div>

        <div>
          <div>
            <span>Nombre completo</span>
            <input 
              name='nombre'
              value={formInfo.nombre} 
              onChange={event => handleOnChange(event)}
            />
          </div>     
          <div>
              <span>Celular</span>
              <input 
                name='celular' 
                value={formInfo.celular}
                onChange={e => handleOnChange(e)}
              />
          </div>
          <div>
              <span>Correo</span>
              <input 
                name='correo' 
                value={formInfo.correo}
                onChange={e => handleOnChange(e)}
              />
          </div>
          

          <div>
            <span>Direccion</span>
            <input 
              name='direccion' 
              value={formInfo.direccion}
              onChange={e => handleOnChange(e)}
            />
          </div>

          <div>
            <Link 
              style={{color: "black"}} 
              to='/'
            >
              <AiOutlineHome/>
            </Link>
            <span onClick={() => {setStep(step => step + 1); setForm(prevForm => ({...prevForm, first: formInfo}))}}>Continuar</span>
          </div>
        </div>
      </div>
  )
}
