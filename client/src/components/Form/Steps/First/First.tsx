import {useCallback, useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

/* Icons */
import {AiOutlineHome} from "react-icons/ai";

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
    const emailValidateRegex: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    const newError: ErrorType = {}

    if(formInfo.nombre.length === 0) newError.nombre = 'El nombre no puede estar vacio';

    if(formInfo.celular.length === 0) newError.celular = 'Agrega un numero de celular';
    if(formInfo.direccion.length === 0) newError.direccion = 'Agrega una direccion valida';
    
    if(formInfo.correo.length === 0) newError.correo = 'Agrega un correo electronico';
    if(!emailValidateRegex.test(formInfo.correo)) newError.correo = 'El correo electronico no es valido';

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
            <button 
              onClick={() => {setStep(step => step + 1); setForm(prevForm => ({...prevForm, first: formInfo}))}}
              disabled={Object.keys(error).length > 0}
            >
              Continuar
            </button>
          </div>
        </div>
      </div>
  )
}
