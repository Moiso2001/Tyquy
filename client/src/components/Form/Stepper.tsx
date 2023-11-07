/* React */
import {useState} from 'react'

import { v4 as uuidv4 } from 'uuid';

/* CSS */
import styles from "./Stepper.module.css"

/* Components */
import HelpWindow from './Steps/HelpWindow/HelpWindow';
import Payment from './Steps/Payment/Payment';
import Second from './Steps/Second/Second';
import Third from './Steps/Third/Third';
import First from './Steps/First/First';
import Final from './Steps/Final/Final';

export type FormType = {
  first: {
    nombre: string;
    celular: string;
    correo: string;
    direccion: string;
  }
  second: {
    info: {
        id: string;
        name: string;
        raza: string;
        edad: string;
        peso: string;
    }[];
    photos: never[];
  }
  third: {nombre:string, tipo: string}
}


export default function Stepper() {
  const [step , setStep] = useState(1);

  const [form, setForm] = useState<FormType>({
    first: {
      nombre: '',
      celular: '',
      correo: '',
      direccion: ''
    },
    second: {
      info: [{id: uuidv4(), name: '', raza: '', edad: "0", peso: "0"}],
      photos: []
    },
    third: {nombre: 'office', tipo: ''},
  })

  /* This validation will be used to return the correct step depending of the status of the "step" react state */
  const validation = (step: number) => {
    if(step === 1){
      return (
        <First setStep={setStep} form={form.first} setForm={setForm}/>
      )
    }
    if(step === 2){
      return(
        <Second setStep={setStep} setForm={setForm} form={form.second}/>
      )
    }
    if(step === 3){
      return(
        <Third setStep={setStep} setForm={setForm} form={form.third}/>
      )
    }
    if(step === 4){
      return(
        <Payment setStep={setStep}setForm={setForm} form={form}/>
      )
    }
    if(step === 5){
      return(
        <Final/>
      )
    }
  }


  return (  
    <div className={styles.divGlobal}>
      {/* Steps */}
      <div>
        <div>

        </div>

        <div>
          <div/>
          <div/>
          <div/>
          <div/>
        </div>
      </div>

      {/* HelpWindow */}
      <div>
        <HelpWindow/>
      </div>

      {/* Form */}
      <div>
        {validation(step)}
      </div>

    </div>
  )
}
